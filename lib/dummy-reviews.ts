import type { CustomerReview } from "./customer-reviews";

// Fictional development data for the review list only. Replace before launch.
// These entries are separate from the supplied Google review and rating snapshot.
export const dummyReviews: CustomerReview[] = [
  {
    id: "dummy-olivia",
    name: "Olivia Morgan",
    initials: "OM",
    rating: 5,
    text: "I brought my car in for a safety inspection and had a great experience from start to finish. The team explained what they were checking, answered all my questions, and kept me updated while I waited. Everything was straightforward and the front desk made the whole visit feel easy.",
    service: "Safety inspection",
    topics: ["safety-inspection", "kind-staff"],
  },
  {
    id: "dummy-luis",
    name: "Luis Ortega",
    initials: "LO",
    rating: 5,
    text: "Quick emissions test, clear pricing, and no surprises. The team had me back on the road sooner than I expected. I'll be coming back for my next service.",
    service: "Emissions test",
    topics: ["emissions-test", "fair-pricing"],
  },
  {
    id: "dummy-priya",
    name: "Priya Shah",
    initials: "PS",
    rating: 5,
    text: "My check engine light had been worrying me for days. They found the issue, explained the options in plain language, and gave me time to decide before starting any work. I appreciated the honest advice about what needed attention now and what could wait. It's reassuring to have a shop that takes the time to explain things.",
    service: "Check engine diagnostics",
    topics: ["check-engine", "honest-staff"],
  },
  {
    id: "dummy-daniel",
    name: "Daniel Reyes",
    initials: "DR",
    rating: 5,
    text: "Stopped in for an oil change and the technicians were friendly and helpful. They walked me through the service and made sure everything was ready before I left. A really smooth experience.",
    service: "Oil change",
    topics: ["friendly-technicians"],
