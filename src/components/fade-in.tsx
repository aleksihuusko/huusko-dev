"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * The amount (0-1) that the element should be in view before triggering
   * @default 0.5
   */
  amount?: number;
  /**
   * The duration of the animation in seconds
   * @default 0.5
   */
  duration?: number;
  /**
   * The delay before the animation starts in seconds
   * @default 0
   */
  delay?: number;
  /**
   * The direction the element should fade in from
   * @default "bottom"
   */
  direction?: "up" | "down" | "left" | "right" | "none";
  /**
   * The distance the element should travel in pixels
   * @default 24
   */
  distance?: number;
  /**
   * Whether the animation should only play once
   * @default true
   */
  once?: boolean;
}

export default function FadeIn({
  children,
  amount = 0.5,
  duration = 0.5,
  delay = 0,
  direction = "up",
  distance = 24,
  once = true,
  className,
  ...props
}: FadeInProps & React.ComponentPropsWithoutRef<typeof motion.div>) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount, once });

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialOffset }}
      animate={
        isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialOffset }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
