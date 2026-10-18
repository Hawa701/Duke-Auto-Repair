const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function harness(supported = true) {
  class MockObserver {
    observed = new Set();
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      MockObserver.instance = this;
    }
    observe(item) {
      this.observed.add(item);
    }
    unobserve(item) {
      this.observed.delete(item);
    }
    disconnect() {
      this.observed.clear();
    }
    send(entries) {
      this.callback(entries);
    }
  }
  const sandboxModule = { exports: {} };
  const code = ts.transpileModule(
    fs.readFileSync("lib/observe-reveals.ts", "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } },
  ).outputText;
  vm.runInNewContext(code, {
    module: sandboxModule,
    exports: sandboxModule.exports,
    ...(supported ? { IntersectionObserver: MockObserver } : {}),
  });
  return {
    observe: sandboxModule.exports.observeReveals,
    get observer() {
      return MockObserver.instance;
    },
  };
}

const entry = (target, visible = true, ratio = visible ? 0.5 : 0) => ({
  target,
  isIntersecting: visible,
  intersectionRatio: ratio,
});

test("later rows wait for their own viewport entry and reveal only once", () => {
  const api = harness();
  const first = {},
    second = {},
    later = {};
  const batches = [];
  api.observe([first, second, later], (items) =>
    batches.push(Array.from(items)),
  );
  api.observer.send([entry(first), entry(second), entry(later, false)]);
  assert.deepEqual(batches, [[first, second]]);
  assert.deepEqual(Array.from(api.observer.observed), [later]);
  api.observer.send([entry(later)]);
  api.observer.send([entry(first), entry(later)]);
  assert.deepEqual(batches, [[first, second], [later]]);
  assert.equal(api.observer.options.rootMargin, "0px 0px -80px 0px");
});

test("edge contact waits for visible content, including very tall cards", () => {
  const api = harness();
  const tall = {};
  const batches = [];
  api.observe([tall], (items) => batches.push(Array.from(items)));
  api.observer.send([entry(tall, true, 0)]);
  assert.equal(batches.length, 0);
  api.observer.send([entry(tall, true, 0.01)]);
  assert.deepEqual(batches, [[tall]]);
});

test("cleanup cancels pending reveals when filters change or the page unmounts", () => {
  const api = harness();
  const item = {};
  let count = 0;
  const stop = api.observe([item], () => count++);
  stop();
  assert.equal(api.observer.observed.size, 0);
  api.observer.send([entry(item)]);
  assert.equal(count, 0);
});

test("unsupported observers leave content untouched", () => {
  const api = harness(false);
  const stop = api.observe([{}], () => assert.fail("Unexpected reveal"));
  assert.doesNotThrow(stop);
});
