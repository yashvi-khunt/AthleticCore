import React from "react";
import Image from "next/image";
import type { ProgramItem } from "../types/site";
import Link from "next/link";

export default function Card({ item }: { item: ProgramItem }) {
  return (
    <article className="program-card">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={item.image ?? "/images/hero.jpg"}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="program-title font-semibold">{item.name}</h3>
        {item.description && (
          <p className="mt-2 text-sm muted">{item.description}</p>
        )}
        <div className="mt-4">
          <Link
            href={item.slug ? `/programs/${item.slug}` : "#"}
            className="text-sm font-medium"
            style={{ color: "var(--color-secondary)" }}
          >
            Learn more →
          </Link>
        </div>
      </div>
    </article>
  );
}
