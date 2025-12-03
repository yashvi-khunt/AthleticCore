import { getSectionById } from "@/lib/content";

export default function AboutPage() {
  const about = getSectionById("about");
  return (
    <div className="py-12 container">
      <h1 className="text-3xl font-bold">{about?.title ?? "About"}</h1>
      <p className="mt-4 text-(--color-text-secondary)">{about?.description}</p>
    </div>
  );
}
