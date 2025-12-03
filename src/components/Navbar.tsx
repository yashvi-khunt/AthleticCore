import React from "react";
import Link from "next/link";
import { content } from "@/lib/content";

export default function Navbar() {
  const nav = content.site.nav;
  return (
    <header className="site-header">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="site-logo text-2xl">
          {content.site.title}
        </Link>

        <nav>
          <ul className="site-nav flex items-center gap-6 text-sm">
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
            <li>
              <Link
                href="/contact"
                className="ml-2 btn-primary"
                aria-label="Join now"
              >
                Join Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
