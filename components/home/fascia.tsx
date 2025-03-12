const services = [
  "Brake repair",
  "Oil change",
  "A/C repair",
  "Wheel alignment",
  "Check engine diagnostics",
  "Battery service",
  "State inspection",
  "Suspension and steering",
];

export default function Fascia() {
  return (
    <div className="fascia" role="region" aria-label="Auto repair services">
      <div className="fascia-viewport">
        <div className="fascia-track">
          {[false, true].map((duplicate) => (
            <ul
              className="fascia-group"
              key={String(duplicate)}
              aria-hidden={duplicate || undefined}
