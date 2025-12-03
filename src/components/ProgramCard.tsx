import React from "react";
import Image from "next/image";
import type { ProgramItem } from "../types/site";
import Link from "next/link";

export default function Card({ item }: { item: ProgramItem }) {
  return (
    <article className="rounded-lg overflow-hidden border">
      <div className="h-44 w-full overflow-hidden relative">
        <Image
          src={item.image ?? "/images/hero.jpg"}
          alt={item.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <Link
          href={item.slug ? `/programs/${item.slug}` : "#"}
          className="mt-3 inline-block text-sm font-medium"
          style={{ color: "var(--color-primary)" }}
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}
