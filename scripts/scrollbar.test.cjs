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
