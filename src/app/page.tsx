"use client";

import SectionHero from "@/components/section-hero";
import SectionStats from "@/components/section-stats";
import SectionProjects from "@/components/section-projects";
import SectionSkills from "@/components/section-skills";
import SectionCta from "@/components/section-cta";
import SectionServices from "@/components/section-services";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionStats />
      <SectionSkills />
      <SectionProjects />
      <SectionServices />
      <SectionCta />
    </main>
  );
}
