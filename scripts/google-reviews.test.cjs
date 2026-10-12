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
      assert.ok(request.fields.includes("userRatingCount"));
      assert.ok(!request.fields.includes("reviews"));
      if (options.failOnce && calls.details === 1)
        throw new Error("Google unavailable");
      Object.assign(
        this,
        options.next ? options.next(calls.details) : fixture(),
      );
    }
  }
  const api = evaluate("lib/google-reviews.ts", (name) => {
    if (name === "./business") return { business };
    if (name === "@googlemaps/js-api-loader")
      return {
        setOptions() {},
        async importLibrary(name) {
          assert.equal(name, "places");
          calls.loader++;
          return { Place };
        },
      };
    throw new Error("Unexpected dependency: " + name);
  });
  return { ...api, calls };
}

test("missing key never loads Google's SDK", async () => {
  const api = harness();
  await assert.rejects(api.loadGoogleRating(""), /not configured/);
  assert.equal(api.calls.loader, 0);
});

test("all simultaneous badges share one request", async () => {
  const api = harness();
  const first = api.loadGoogleRating("mock-key");
  const second = api.loadGoogleRating("mock-key");
  assert.equal(first, second);
  const result = await first;
  assert.equal(result.rating, 4.8);
  assert.equal(result.reviewCount, 625);
  assert.equal(result.attributions[0].provider, "Example source");
  assert.equal(api.calls.searches, 1);
  assert.equal(api.calls.details, 1);
});

test("refresh reads changed Google values and reuses only the place ID", async () => {
  const api = harness({
    next: (n) => ({
      ...fixture(),
      rating: n === 1 ? 4.8 : 4.9,
      userRatingCount: 624 + n,
    }),
  });
  await api.loadGoogleRating("mock-key");
  const updated = await api.loadGoogleRating("mock-key");
  assert.equal(updated.rating, 4.9);
  assert.equal(updated.reviewCount, 626);
  assert.equal(api.calls.details, 2);
  assert.equal(api.calls.searches, 1);
});

test("a configured place ID avoids search", async () => {
  const api = harness();
  await api.loadGoogleRating("mock-key", "configured-place-id");
  assert.equal(api.calls.searches, 0);
});

test("wrong listing or invalid Google values cannot reach the badges", () => {
  const api = harness();
  for (const changes of [
    { internationalPhoneNumber: "+1 555 555 5555" },
    { formattedAddress: "5220 Duke St, Another City, VA" },
