import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Markit Design Resources",
    description:
      "A collection of design resources for developers and designers, including plugins, themes, and other useful tools.",
    image: "/projects/markit.webp",
    link: "https://markit-resources.vercel.app/",
  },
  {
    title: "Beamsoft Landing Page",
    description:
      "A responsive portfolio website for Beamsoft, built with Next.js, Prismic, Tailwind CSS, and Framer Motion.",
    image: "/projects/beamsoft.webp",
    link: "https://beamsoft.vercel.app/",
  },
  {
    title: "Pentaflow AI SaaS",
    description:
      "A SaaS platform for investigating AI's immense potential that enhances your digital experiences.",
    image: "/projects/pentaflow.webp",
    link: "https://pentaflow-app.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-border bg-accent py-12 md:py-24"
    >
      <div className="container mx-auto px-[5%]">
        <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1920}
                  height={1309}
                  className="aspect-[3/2] w-full rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
                <p className="font-medium text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
