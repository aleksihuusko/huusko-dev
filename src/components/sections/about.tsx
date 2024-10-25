"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
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
    <section id="about" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          <motion.div
            variants={itemVariants}
            className="relative order-last md:order-first"
          >
            <Image
              src="/aleksi-huusko-about.webp"
              className="aspect-square w-full rounded-lg bg-accent object-cover"
              alt="aleksi huusko"
              width={500}
              height={500}
              quality={100}
              priority
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-background/0 via-background/5 to-background/50 dark:from-background/0 dark:via-background/20 dark:to-background/80" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="mb-5 scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors">
              About
            </h2>
            <article className="prose prose-stone dark:prose-invert">
              <motion.p variants={itemVariants}>
                A detail-oriented full-stack developer with a passion for
                blending clean, efficient code with elegant design. I create
                seamless, pixel-perfect user experiences for everything from
                landing pages to complex web applications.
              </motion.p>
              <motion.p variants={itemVariants}>
                Each project is an opportunity to learn, refine skills and
                collaborate with teams that inspire growth. The ultimate goal is
                to build impactful digital solutions that operate flawlessly
                behind the scenes while delivering intuitive user experiences.
              </motion.p>
              <motion.p variants={itemVariants}>
                Skilled in digital marketing, aligning design and development
                with strategies to boost engagement, conversions and brand
                success. Expertise in search engine optimization, performance
                enhancement and creating designs that elevate user journeys and
                meet business goals.
              </motion.p>
            </article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
