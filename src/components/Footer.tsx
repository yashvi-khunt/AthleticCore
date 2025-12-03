import React from "react";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer mt-12">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">{content.site.title}</div>
            <div className="mt-2 muted text-sm">{content.footer.text}</div>
          </div>

          <div className="text-sm muted">
            Contact: info@athleticcore.example
          </div>
        </div>
      </div>
    </footer>
  );
}
