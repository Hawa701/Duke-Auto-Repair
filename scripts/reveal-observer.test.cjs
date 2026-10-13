const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function harness(supported = true) {
  let observer;
  class MockObserver {
    observed = new Set();
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      observer = this;
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
  const module = { exports: {} };
  const code = ts.transpileModule(
    fs.readFileSync("lib/observe-reveals.ts", "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } },
  ).outputText;
  vm.runInNewContext(code, {
    module,
    exports: module.exports,
    ...(supported ? { IntersectionObserver: MockObserver } : {}),
  });
  return {
    observe: module.exports.observeReveals,
    get observer() {
      return observer;
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
