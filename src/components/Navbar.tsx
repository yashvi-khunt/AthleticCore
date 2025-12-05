"use client";

import { useState } from "react";
import Link from "next/link";
import { getNavigation } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = getNavigation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
                <span className="text-black font-black text-xl">C</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-black tracking-wider text-slate-900">
                  CORE
                </span>
                <span className="text-xs font-semibold tracking-widest text-lime-400">
                  ATHLETE
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-lime-400 text-black text-sm font-bold rounded-full hover:bg-lime-500 transition-colors shadow-md hover:shadow-lg"
            >
              Book Session
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
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
          <nav className="md:hidden pb-4 border-t border-slate-200">
            <ul className="flex flex-col gap-2 mt-4">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-700 hover:bg-slate-100 hover:text-lime-400 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 px-4">
                <Link
                  href="#contact"
                  className="block text-center px-6 py-2.5 bg-lime-400 text-black text-sm font-bold rounded-full hover:bg-lime-500 transition-colors"
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
