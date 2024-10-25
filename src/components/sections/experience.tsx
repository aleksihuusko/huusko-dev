"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Badge } from "@/components/ui/badge";

const items = [
  {
    date: "2018 – 2024",
    title: "Masters of Science in Technology",
    subtitle:
      "Master of Science (MSc) in Computer Science (Software Engineering)",
    description: (
      <>
        <p>
          Earned a Master of Science in Technology with a specialization in
          Software Engineering from the University of Turku. My thesis, an
          in-depth analysis of JAMstack and LAMP-based WordPress architectures,
          highlights my expertise in building efficient, scalable web solutions.
        </p>
        <p>
          My education spans advanced software engineering, interaction design
          and digital business strategy – an ideal combination of technical and
          design skills. This diverse foundation enables me to deliver
          impactful, user-centered solutions tailored to the evolving needs of
          the digital landscape.
        </p>
      </>
    ),
  },
  {
    date: "2021 – 2024",
    title: "Founder and CEO at Alecom Oy",
    subtitle: "Entrepreneurship, Web Development and Design, Digital Marketing",
    description: (
      <>
        <p>
          As the founder and CEO of Alecom Oy, a digital marketing agency, I led
          strategic initiatives to boost clients&apos; digital presence and
          deliver measurable results, overseeing everything from campaign
          planning to creative direction and performance optimization.
        </p>
        <p>
          At Alecom Oy, I was committed to designing impactful, data-driven
          marketing strategies that aligned with each client&apos;s unique
          business goals. My focus was on delivering results that not only
          elevated brand presence but also fostered sustainable, long-term
          growth across digital channels.
        </p>
      </>
    ),
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -20% 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const ExperienceItem = ({ item }: { item: (typeof items)[0] }) => {
    const itemRef = useRef(null);
    const isItemInView = useInView(itemRef, {
      once: true,
      amount: 0.5,
    });

    return (
      <motion.div
        ref={itemRef}
        variants={itemVariants}
        initial="hidden"
        animate={isItemInView ? "visible" : "hidden"}
        className="flex flex-col items-start"
      >
        <Badge variant="outline" className="mb-5 text-muted-foreground">
          {item.date}
        </Badge>
        <h3 className="!mb-2 scroll-m-20 text-balance text-2xl tracking-tight md:mb-4">
          {item.title}
        </h3>
        <span className="mb-5 text-balance text-sm text-muted-foreground">
          {item.subtitle}
        </span>
        <article className="prose prose-sm prose-stone dark:prose-invert">
          {item.description}
        </article>
      </motion.div>
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="py-16 md:py-24 lg:py-28"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto grid grid-cols-1 items-start justify-between gap-x-12 gap-y-12 px-[5%] md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:gap-x-20">
        <motion.div
          className="static md:sticky md:top-[30%]"
          variants={itemVariants}
        >
          <h2 className="mb-5 scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors first:mt-0">
            Experience
          </h2>
          <article className="prose prose-stone text-balance dark:prose-invert">
            <p>
              Collaborated with a diverse range of companies and organizations,
              from innovative startups to established corporations, delivering
              tailored solutions that drive growth and digital transformation.
            </p>
          </article>
        </motion.div>
        <div className="grid grid-cols-1 gap-12 py-2">
          {items.map((item, index) => (
            <ExperienceItem key={index} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}