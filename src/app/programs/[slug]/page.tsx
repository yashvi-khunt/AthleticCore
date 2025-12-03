import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ProgramItem, SiteContent } from "@/types/site";

const loadContent = (): SiteContent => {
  const filePath = path.join(process.cwd(), "src/data/site-content.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as SiteContent;
};

const findProgram = (slug: string): ProgramItem | undefined => {
  const content = loadContent();
  const programs = content.sections.find((s) => s.id === "programs");
  return programs?.items?.find((p) => p.slug === slug);
};

export async function generateStaticParams() {
  const content = loadContent();
  const programs = content.sections.find((s) => s.id === "programs");

  return (
    programs?.items
      ?.filter((item): item is ProgramItem & { slug: string } => Boolean(item.slug))
      .map((item) => ({ slug: item.slug as string })) ?? []
  );
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = findProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
        <div>
          <h1 className="text-3xl font-bold">{program.name}</h1>
          {program.description && (
            <p className="mt-4 text-(--color-text-secondary)">
              {program.description}
            </p>
          )}
          {program.details?.length ? (
            <ul className="mt-6 space-y-3">
              {program.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 text-(--color-text-secondary)"
                >
                  <span
                    className="mt-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={program.image ?? "/images/hero.jpg"}
              alt={program.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
              priority
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {program.duration && (
              <div className="rounded-lg border p-3">
                <div className="text-xs uppercase tracking-wide text-(--color-text-secondary)">
                  Duration
                </div>
                <div className="font-medium">{program.duration}</div>
              </div>
            )}
            {program.frequency && (
              <div className="rounded-lg border p-3">
                <div className="text-xs uppercase tracking-wide text-(--color-text-secondary)">
                  Frequency
                </div>
                <div className="font-medium">{program.frequency}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
