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
  const sandboxModule = { exports: {} };
  vm.runInNewContext(code, {
    module: sandboxModule,
    exports: sandboxModule.exports,
    require: requireMock,
  });
  return sandboxModule.exports;
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
  const calls = { searches: 0, details: 0, loader: 0, reviews: 0 };
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
      if (request.fields.includes("reviews")) {
        calls.reviews++;
        assert.equal(this.id, "verified-place-id");
        assert.equal(JSON.stringify(request.fields), '["reviews"]');
        this.reviews = options.reviews ?? [];
        return;
      }
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
    { rating: NaN },
    { rating: 6 },
    { userRatingCount: -1 },
    { userRatingCount: 1.5 },
  ])
    assert.throws(() => api.readGoogleRating({ ...fixture(), ...changes }));
});

test("a failed request can recover on a later refresh", async () => {
  const api = harness({ failOnce: true });
  await assert.rejects(api.loadGoogleRating("mock-key"), /Google unavailable/);
  const result = await api.loadGoogleRating("mock-key");
  assert.equal(result.rating, 4.8);
  assert.equal(api.calls.details, 2);
});

test("no search result produces an error instead of invented numbers", async () => {
  const api = harness({ empty: true });
  await assert.rejects(api.loadGoogleRating("mock-key"), /could not be found/);
  assert.equal(api.calls.details, 0);
});

test("Google reviews load only for the verified listing and skip empty ones", async () => {
  const author = (name) => ({
    displayName: name,
    photoURI: "https://example.com/" + name + ".png",
    uri: "https://example.com/" + name,
  });
  const api = harness({
    reviews: [
      { authorAttribution: author("Ana"), rating: 5, text: " Great shop. ", relativePublishTimeDescription: "a week ago", publishTime: new Date(1) },
      { authorAttribution: author("Ben"), rating: 4, text: "", relativePublishTimeDescription: "a month ago" },
      { authorAttribution: author("Cy"), rating: 9, text: "Bad data" },
    ],
  });
  const reviews = await api.loadGoogleReviews("mock-key");
  assert.equal(api.calls.details, 1);
  assert.equal(api.calls.reviews, 1);
  assert.equal(reviews.length, 1);
  assert.equal(reviews[0].name, "Ana");
  assert.equal(reviews[0].text, "Great shop.");
  assert.equal(reviews[0].profileUrl, "https://example.com/Ana");
  assert.equal(reviews[0].when, "a week ago");
});

test("reviews are not requested when the listing check fails", async () => {
  const api = harness({ next: () => ({ ...fixture(), internationalPhoneNumber: "+1 555 555 5555" }) });
  await assert.rejects(api.loadGoogleReviews("mock-key"), /different business/);
  assert.equal(api.calls.reviews, 0);
});
