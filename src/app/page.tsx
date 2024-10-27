import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Solutions from "@/components/sections/solutions";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Cta from "@/components/sections/cta";
import Experience from "@/components/sections/experience";
import Faq from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <About />
      <Projects />
      <Skills />
      <Cta />
      <Experience />
      <Faq />
    </>
  );
}
