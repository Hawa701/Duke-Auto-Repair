const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function harness(supported = true) {
  let observer;
  class MockObserver {
    observed = new Set();
