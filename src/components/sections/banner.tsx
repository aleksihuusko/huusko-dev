"use client";

import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useInView,
} from "framer-motion";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DotFilledIcon } from "@radix-ui/react-icons";

type Heading = {
  title: string;
};

type Props = {
  headingsTop: Heading[];
  headingsBottom: Heading[];
};

export type BannerProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Banner = (props: BannerProps) => {
  const { headingsTop, headingsBottom } = {
    ...BannerDefaults,
    ...props,
  } as Props;

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -20% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 991px)");

  const headingTopTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["5%", "0%"] : ["25%", "0%"],
  );
  const headingBottomTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-5%", "0%"] : ["-25%", "0%"],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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

  const renderHeadings = (
    headings: Heading[],
    translate: MotionValue<string>,
  ) => (
    <motion.div
      className="relative grid auto-cols-max grid-flow-col grid-cols-[max-content] items-center justify-around py-2 md:py-3"
      style={{ x: translate }}
      variants={itemVariants}
    >
      {headings.map((heading, index) => (
        <Heading key={index} title={heading.title} />
      ))}
    </motion.div>
  );

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex w-screen max-w-full flex-col justify-end overflow-hidden py-4 md:py-8 lg:py-12"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="relative flex justify-end" variants={itemVariants}>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {renderHeadings(headingsTop, headingTopTranslate)}
            </React.Fragment>
          ))}
      </motion.div>
      <motion.div
        className="relative flex justify-start"
        variants={itemVariants}
      >
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {renderHeadings(headingsBottom, headingBottomTranslate)}
            </React.Fragment>
          ))}
      </motion.div>
    </motion.section>
  );
};

const Heading = ({ title }: Heading) => {
  return (
    <React.Fragment>
      <div className="relative flex items-center justify-center whitespace-nowrap px-2 text-center md:px-4 lg:text-left">
        <span className="relative inline-block text-xs text-muted-foreground/60 md:text-lg lg:text-3xl">
          {title}
        </span>
      </div>
      <div className="relative w-full overflow-hidden">
        <DotFilledIcon className="size-full text-muted-foreground/60" />
      </div>
    </React.Fragment>
  );
};

export const BannerDefaults: BannerProps = {
  headingsTop: [
    {
      title: "UX/UI Design",
    },
    {
      title: "Search Engine Optimization",
    },
    {
      title: "Software Engineering",
    },
    {
      title: "Digital Marketing",
    },
  ],

  headingsBottom: [
    {
      title: "Web Development",
    },
    {
      title: "Digital Consulting",
    },
    {
      title: "Conversion Optimization",
    },
    {
      title: "Data Analytics",
    },
  ],
};
