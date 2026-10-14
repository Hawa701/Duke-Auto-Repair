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
