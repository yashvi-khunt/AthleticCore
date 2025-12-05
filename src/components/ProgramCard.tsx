import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/types/content";

export default function ProgramCard({ item }: { item: Program }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-200">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 350px, 100vw"
        />

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-4 right-4 bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
            Popular
          </div>
        )}

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-6 py-3 bg-lime-400 text-black font-bold rounded-full shadow-lg">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-400 transition-colors">
          {item.name}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {item.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          {item.groupSize && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>{item.groupSize}</span>
            </div>
          )}

          {item.duration && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{item.duration}</span>
            </div>
          )}
        </div>

        {/* Footer with Price and Link */}
        <div className="flex items-center justify-between pt-4">
          {item.price && (
            <span className="text-lg font-bold text-lime-400">
              {item.price}
            </span>
          )}

          <Link
            href={`/programs/${item.slug}`}
            className="text-sm font-semibold text-lime-400 hover:text-lime-500 flex items-center gap-2 group/link"
          >
            Learn More
            <svg
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
