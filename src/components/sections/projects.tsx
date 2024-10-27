"use client";

import Image from "next/image";
import Link from "next/link";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/fade-in";

const projects = [
  {
    title: "Markit",
    description: "A platform for finding and sharing local events.",
    url: "https://markit-resources.vercel.app/",
    image: {
      src: "/markit.gif",
      alt: "markit",
    },
    categories: ["Next.js", "Tailwind", "Contentful"],
  },
  {
    title: "Beamsoft",
    description: "A landing page for a software company.",
    url: "https://beamsoft.vercel.app/",
    image: {
      src: "/beamsoft.gif",
      alt: "beamsoft",
    },
    categories: ["Next.js", "Tailwind", "Prismic"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <div className="rb-12 md:mb-18 mb-12 w-full max-w-lg lg:mb-20">
          <FadeIn delay={0.2} direction="none">
            <h2 className="mb-3 scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors first:mt-0">
              Projects
            </h2>
            <p className="prose prose-stone dark:prose-invert">
              A selection of relevant projects that I&apos;ve worked on.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2 lg:gap-x-12">
          {projects.map((project, index) => (
            <FadeIn
              key={index}
              className="flex size-full flex-col items-center justify-start"
              delay={0.1 + index * 0.1}
              amount={0.1}
              direction="up"
            >
              <Link
                href={project.url}
                target="_blank"
                className="mb-6 w-full transition-opacity duration-300 hover:opacity-80"
              >
                <Image
                  unoptimized
                  src={project.image.src}
                  alt={project.image.alt}
                  className="aspect-video size-full rounded-lg bg-foreground object-cover"
                  width={1440}
                  height={872}
                  placeholder="blur"
                  blurDataURL={project.image.src}
                />
              </Link>
              <div className="rb-4 mb-4 flex w-full items-center justify-start gap-1.5">
                {project.categories.map((category, index) => (
                  <Badge variant="outline" key={index}>
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <Link
                  href={project.url}
                  target="_blank"
                  className="transition-colors duration-300 hover:text-muted-foreground"
                >
                  <h3 className="mb-3 scroll-m-20 text-2xl tracking-tight md:mb-4">
                    {project.title}
                  </h3>
                </Link>
                <p className="prose prose-stone dark:prose-invert">
                  {project.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-6 inline-flex items-center justify-center gap-2"
                >
                  <Link href={project.url} target="_blank">
                    See live project <ExternalLinkIcon className="!size-3" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
