"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import ContactDialog from "@/components/contact-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Cta() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="cta"
      className="relative py-16 md:py-24 lg:py-28"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-[5%]">
        <motion.div className="w-full max-w-lg" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-5">
              Project in mind?
            </Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="mb-5 scroll-m-20 text-balance text-4xl tracking-tight lg:text-5xl"
          >
            Take your digital presence to the next level
          </motion.h2>
          <motion.article
            variants={itemVariants}
            className="prose prose-stone text-balance dark:prose-invert"
          >
            <p>
              Whether it&apos;s web development, design or digital marketing,
              I&apos;m here to help create solutions that deliver real results.
            </p>
          </motion.article>
          <motion.div
            variants={itemVariants}
            className="mt-6 flex gap-x-4 md:mt-8"
          >
            <ContactDialog>
              <Button variant="default">Contact</Button>
            </ContactDialog>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={itemVariants}
        className="absolute inset-0 -z-10 overflow-hidden bg-accent"
      >
        <Image
          src="/cta-background.webp"
          className="size-full object-cover invert filter dark:invert-0"
          alt="cta background"
          width={1024}
          height={1024}
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
      </motion.div>
    </motion.section>
  );
}
