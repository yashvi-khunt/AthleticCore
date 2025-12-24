"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getNavigation } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = getNavigation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 site-header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <div className="h-16 w-64 relative">
              <Image
                src="/AthleticCore/images/logos/full-logo-white.png"
                alt="Athletic Core Logo"
                fill
                className="object-contain object-left"
                sizes="256px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 site-nav">
            <ul className="flex items-center gap-6">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-wide text-white hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-lime text-black text-sm font-bold rounded-full hover:bg-lime-dark transition-colors shadow-md hover:shadow-lg"
            >
              Book Session
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-white/10">
            <ul className="flex flex-col gap-2 mt-4">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:text-lime-400 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 px-4">
                <Link
                  href="#contact"
                  className="block text-center px-6 py-2.5 bg-lime text-black text-sm font-bold rounded-full hover:bg-lime-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book Session
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
