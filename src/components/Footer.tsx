import React from "react";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-6 text-center text-sm text-(--color-text-secondary)">
        {content.footer.text}
      </div>
    </footer>
  );
}
