"use client";

import Image from "next/image";

import FadeIn from "@/components/fade-in";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <FadeIn
            delay={0.4}
            amount={0.1}
            duration={1}
            className="relative order-last md:order-first"
          >
            <div className="relative">
              <Image
                src="/aleksi-huusko-about.webp"
                className="aspect-square w-full rounded-lg bg-muted object-cover"
                alt="aleksi huusko"
                width={500}
                height={500}
                quality={100}
                placeholder="blur"
                blurDataURL="/aleksi-huusko-about.webp"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-background/0 via-background/5 to-background/50 dark:from-background/0 dark:via-background/20 dark:to-background/80" />
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0} direction="none" className="mb-5">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors">
                About
              </h2>
            </FadeIn>

            <article className="prose prose-stone dark:prose-invert">
              <FadeIn delay={0.1}>
                <p>
                  A detail-oriented full-stack developer with a passion for
                  blending clean, efficient code with elegant design. I create
                  seamless, pixel-perfect user experiences for everything from
                  landing pages to complex web applications.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p>
                  Each project is an opportunity to learn, refine skills and
                  collaborate with teams that inspire growth. The ultimate goal
                  is to build impactful digital solutions that operate
                  flawlessly behind the scenes while delivering intuitive user
                  experiences.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p>
                  Skilled in digital marketing, aligning design and development
                  with strategies to boost engagement, conversions and brand
                  success. Expertise in search engine optimization, performance
                  enhancement and creating designs that elevate user journeys
                  and meet business goals.
                </p>
              </FadeIn>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
