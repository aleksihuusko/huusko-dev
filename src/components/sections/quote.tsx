"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

import { Badge } from "@/components/ui/badge";

export const Quote = () => {
  const heading = `"Luck is what happens when preparation meets opportunity."`;

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -20% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "end center"],
  });

  const words = heading.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="quote"
      className="relative overflow-hidden bg-muted/50 py-16 md:py-24 lg:py-28"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container relative mx-auto max-w-4xl px-[5%]">
        <motion.div variants={itemVariants}>
          <Badge
            variant="secondary"
            className="mx-auto mb-4 flex w-fit items-center justify-center text-muted-foreground md:mb-6"
          >
            Favorite quote
          </Badge>
        </motion.div>
        <h2
          ref={headingRef}
          className="relative scroll-m-20 text-balance text-center text-4xl tracking-tight lg:text-5xl"
        >
          {words.map((word, index) => {
            const start = index * 0.01;
            const end = start + 0.2;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.25, 1],
            );
            return (
              <React.Fragment key={index}>
                <motion.span
                  className="relative inline-block"
                  style={{ opacity }}
                >
                  {word}
                </motion.span>
                {index < words.length - 1 && " "}
              </React.Fragment>
            );
          })}
        </h2>
        <motion.p
          variants={itemVariants}
          className="mt-6 flex items-center justify-center text-lg text-foreground/60 dark:text-muted-foreground/60"
        >
          – Seneca
        </motion.p>
      </div>
      <motion.div variants={imageVariants} className="absolute inset-0 -z-10">
        <Image
          src="/aleksi-huusko-seneca.webp"
          className="absolute top-0 h-full object-cover md:object-[center_5%]"
          alt="seneca"
          width={1632}
          height={2912}
        />
        <div className="absolute inset-0 bg-background/80" />
      </motion.div>
    </motion.section>
  );
};
