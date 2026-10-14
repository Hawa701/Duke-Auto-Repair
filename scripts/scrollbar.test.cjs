const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

const moduleFixture = { exports: {} };
const code = ts.transpileModule(fs.readFileSync("lib/scrollbar.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
vm.runInNewContext(code, {
  module: moduleFixture,
  exports: moduleFixture.exports,
});
const { scrollbarGeometry, scrollAfterDrag } = moduleFixture.exports;

test("thumb reaches the track bottom exactly at the end of a long page", () => {
  const top = scrollbarGeometry(800, 8000, 0, 788);
  const bottom = scrollbarGeometry(800, 8000, 7200, 788);
  assert.equal(top.offset, 0);
  assert.equal(bottom.offset + bottom.height, 788);
  assert.equal(bottom.progress, 1);
  assert.ok(
    Math.abs(scrollAfterDrag(0, top.travel, top.range, top.travel) - 7200) <
      0.000001,
  );
});

test("minimum thumb size stays usable and dragging clamps at page boundaries", () => {
  const page = scrollbarGeometry(600, 100000, 100, 588);
  assert.equal(page.height, 44);
  assert.equal(scrollAfterDrag(100, -1000, page.range, page.travel), 0);
  assert.equal(scrollAfterDrag(100, 1000, page.range, page.travel), 99400);
  assert.equal(scrollbarGeometry(600, 100000, -50, 588).progress, 0);
  assert.equal(scrollbarGeometry(600, 100000, 200000, 588).progress, 1);
});

test("short pages and resized viewports do not produce invalid thumb positions", () => {
  const fits = scrollbarGeometry(900, 500, 0, 888);
  assert.equal(fits.range, 0);
  assert.equal(fits.height, 888);
  assert.equal(fits.travel, 0);
  assert.equal(scrollAfterDrag(0, 100, 0, 0), 0);
  const resized = scrollbarGeometry(400, 8000, 3800, 388);
  assert.equal(resized.progress, 0.5);
  assert.equal(resized.offset, resized.travel / 2);
});
