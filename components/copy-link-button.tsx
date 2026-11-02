"use client";

import { useState } from "react";
import Icon from "./icon";

export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="share-btn"
      aria-label={copied ? "Link copied" : "Copy link to this article"}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          window.prompt("Copy this link:", url);
        }
      }}
    >
      <Icon name={copied ? "check" : "link"} />
    </button>
  );
}
