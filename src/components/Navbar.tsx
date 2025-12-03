import React from "react";
import Link from "next/link";
import { content } from "@/lib/content";

export default function Navbar() {
  const nav = content.site.nav;
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          {content.site.title}
        </Link>
        <nav>
          <ul className="flex gap-6 text-sm text-(--color-text-secondary)">
            {nav.map((n) => (
              <li key={n}>
                <Link
                  href={
                    n.toLowerCase() === "home" ? "/" : `/${n.toLowerCase()}`
                  }
                  className="hover:underline"
                >
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
