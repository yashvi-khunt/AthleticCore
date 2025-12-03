import { ReactNode } from "react";
import type { Section as SectionType } from "../types/site";
import Card from "./ProgramCard";

export default function Section({
  section,
  children,
}: {
  section: SectionType;
  children?: ReactNode;
}) {
  const hasItems = section.items && section.items.length > 0;

  return (
    <section id={section.id} className="py-8">
      <div className="container">
        <h2
          className="section-title"
          style={{ color: "var(--color-text-primary)" }}
        >
          {section.title}
        </h2>
        {section.description && (
          <p className="mt-2 muted">{section.description}</p>
        )}
        {children ? (
          <div className="mt-6">{children}</div>
        ) : hasItems ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.items?.map((it) => (
              <Card key={it.name} item={it} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
