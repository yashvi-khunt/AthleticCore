import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero {...content.hero} />

      {content.sections.map((s) => (
        <Section key={s.id} section={s} />
      ))}
    </>
  );
}
