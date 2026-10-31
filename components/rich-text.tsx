import { Fragment, type ReactNode } from "react";
import Link from "next/link";

/**
 * Renders the small markup used in the content data files:
 *   **bold text**          -> <strong>
 *   [link text](/path/)    -> internal link (bold, as the content guides ask
 *                             for the linked keywords to be bolded)
 * Anything else is plain text.
 */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

export default function RichText({ text }: { text: string }): ReactNode {
  return text.split(TOKEN).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      return (
        <Link key={index} href={link[2]}>
          <strong>{link[1]}</strong>
        </Link>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={index}>{bold[1]}</strong>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}

/** Plain-text version of the markup (for meta tags and alt text). */
export const plainText = (text: string) =>
  text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
