import type { ProgramItem, Section, SiteContent } from "@/types/site";
import siteContent from "@/data/site-content.json";

export const content: SiteContent = siteContent;

export const getSectionById = (id: string): Section | undefined =>
  content.sections.find((section) => section.id === id);

export const getProgramsSection = (): Section | undefined =>
  getSectionById("programs");

export const getPrograms = (): ProgramItem[] =>
  getProgramsSection()?.items ?? [];

export const getProgramBySlug = (slug: string): ProgramItem | undefined =>
  getPrograms().find((program) => program.slug === slug);

export const getProgramSlugs = (): string[] =>
  getPrograms()
    .map((program) => program.slug)
    .filter((slug): slug is string => Boolean(slug));
