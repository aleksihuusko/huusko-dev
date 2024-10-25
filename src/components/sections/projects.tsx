"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -20% 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="rb-12 md:mb-18 mb-12 w-full max-w-lg lg:mb-20"
          >
            <h2 className="mb-3 scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors first:mt-0">
              Projects
            </h2>
            <p className="prose prose-stone dark:prose-invert">
              A selection of relevant projects that I&apos;ve worked on.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2 lg:gap-x-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex size-full flex-col items-center justify-start"
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
                    className="aspect-video size-full rounded-lg bg-accent object-cover"
                    width={1440}
                    height={872}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
