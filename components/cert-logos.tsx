import Image from "next/image";
import "./cert-logos.css";

// Certification artwork supplied by the shop (public/images/badges).
export const certLogos = {
  ase: {
    src: "/images/badges/ase.png",
    alt: "ASE Certified",
    width: 320,
    height: 320,
  },
  "va-safety": {
    src: "/images/badges/va-safety-inspection.png",
    alt: "Virginia State Safety Inspection",
    width: 320,
    height: 320,
  },
  "air-check": {
    src: "/images/badges/air-check-virginia.png",
    alt: "Air Check Virginia emissions inspection",
    width: 640,
    height: 316,
  },
} as const;

export type CertLogoId = keyof typeof certLogos;

/** A row of certification logos on white tiles. */
export default function CertLogos({
  ids = ["ase", "va-safety", "air-check"],
  label = "Certifications",
}: {
  ids?: CertLogoId[];
  label?: string;
}) {
  return (
    <ul className="cert-logos" aria-label={label}>
      {ids.map((id) => {
        const logo = certLogos[id];
        return (
          <li key={id} className={`cert-logo cert-logo--${id}`}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              sizes="160px"
            />
          </li>
        );
      })}
    </ul>
  );
}
