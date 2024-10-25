"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { CodeIcon, Crosshair1Icon, FrameIcon } from "@radix-ui/react-icons";

export default function Solutions() {
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
    <section id="solutions" className="overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="rb-12 md:mb-18 mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20"
        >
          <motion.div variants={itemVariants} className="flex h-full flex-col">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors first:mt-0">
              Solutions
            </h2>
          </motion.div>
          <motion.article
            variants={itemVariants}
            className="prose prose-stone dark:prose-invert"
          >
            <p>
              Crafting modern, responsive websites and web applications
              optimized for all devices and platforms, using cutting-edge
              solutions free of outdated systems.
            </p>
            <p>
              Transforming brands by designing websites, apps, social media
              assets and identities. I deliver tailored, visually compelling,
              results-driven solutions for web, mobile and digital marketing.
            </p>
          </motion.article>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid auto-cols-fr grid-cols-1 items-start gap-x-12 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-12"
        >
          <motion.div variants={itemVariants} className="w-full md:mt-[0%]">
            <CodeIcon className="mb-6 size-5 text-muted-foreground" />
            <h3 className="mb-3 scroll-m-20 text-2xl tracking-tight md:mb-4">
              Development
            </h3>
            <motion.article
              variants={itemVariants}
              className="prose prose-stone dark:prose-invert"
            >
              <p>
                I craft intuitive websites and applications that provide
                engaging and visually appealing experiences for both content
                managers and end users.
              </p>
            </motion.article>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:mt-[25%]">
            <FrameIcon className="mb-6 size-5 text-muted-foreground" />
            <h3 className="mb-3 scroll-m-20 text-2xl tracking-tight md:mb-4">
              Design
            </h3>
            <motion.article
              variants={itemVariants}
              className="prose prose-stone dark:prose-invert"
            >
              <p>
                Whether it’s a website, application, or brand design, I ensure
                that every project is results-driven and optimized for both user
                experience and visual excellence.
              </p>
            </motion.article>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:mt-[50%]">
            <Crosshair1Icon className="mb-6 size-5 text-muted-foreground" />
            <h3 className="mb-3 scroll-m-20 text-2xl tracking-tight md:mb-4">
              Marketing
            </h3>
            <motion.article
              variants={itemVariants}
              className="prose prose-stone dark:prose-invert"
            >
              <p>
                From custom software to tailored designs, I deliver
                next-generation marketing solutions that align with your
                business’s unique needs and goals.
              </p>
            </motion.article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
