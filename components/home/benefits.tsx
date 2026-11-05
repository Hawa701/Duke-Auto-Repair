import Stagger from "@/components/stagger";
import Icon from "@/components/icon";

// "The Duke Difference": Content & UX Guide (revised), section 1.1.
const features = [
  {
    icon: "chat",
    title: "Collaborative Customer Communication",
    body: "Our experienced service advisors and certified technicians work together to provide clear explanations, transparent estimates, and timely updates throughout the repair process. We help customers understand what needs immediate attention and what can be safely planned for a future visit.",
  },
  {
    icon: "tag",
    title: "Transparent Pricing",
    body: "Get premium, dealership-level diagnostics and repairs without the inflated dealership markup. We emphasize transparency by providing a detailed, itemized estimate of parts and labor before any authorization. No hidden fees, no surprise charges.",
  },
  {
    icon: "car",
    title: "Free 5-Mile Local Shuttle",
    body: "We know that being without your vehicle is a massive disruption to your daily routine. That is why we offer a fast, complimentary local shuttle service within a 5-mile radius.",
  },
  {
    icon: "wrench",
    title: "Complete Automotive Care Under One Roof",
    body: "From oil changes to complex engine and transmission repairs, our experienced team provides comprehensive automotive maintenance, diagnostics, and mechanical repairs.",
  },
] as const;

export default function HomeBenefits() {
  return (
    <section className="duke-diff" aria-labelledby="duke-diff-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="duke-diff-title">
            Why Alexandria Drivers Choose Duke Auto Repair
          </h2>
        </div>
        <Stagger className="diff-grid" pattern="alternate" interval={0.08}>
          {features.map((feature) => (
            <article className="diff-card" key={feature.title}>
              <span className="diff-icon" aria-hidden="true">
                <Icon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
