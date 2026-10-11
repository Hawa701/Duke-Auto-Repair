const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function evaluate(path, requireMock) {
  const code = ts.transpileModule(fs.readFileSync(path, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(code, {
    module,
    exports: module.exports,
    require: requireMock,
  });
  return module.exports;
}

const { business } = evaluate("lib/business.ts", () => {
  throw new Error("Unexpected import");
});
const fixture = () => ({
  rating: 4.8,
  userRatingCount: 625,
  formattedAddress: business.shortAddress + ", USA",
  internationalPhoneNumber: business.phoneInternational,
  googleMapsURI: business.googleMapsUrl,
  attributions: [
    { provider: "Example source", providerURI: "https://example.com" },
  ],
});

function harness(options = {}) {
  const calls = { searches: 0, details: 0, loader: 0 };
  class Place {
    constructor({ id }) {
      this.id = id;
    }
    static async searchByText(request) {
      calls.searches++;
      assert.equal(request.textQuery, business.googlePlaceQuery);
      assert.equal(JSON.stringify(request.fields), '["id"]');
      return { places: options.empty ? [] : [{ id: "verified-place-id" }] };
    }
    async fetchFields(request) {
      calls.details++;
      assert.ok(request.fields.includes("rating"));
