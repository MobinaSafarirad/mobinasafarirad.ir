"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger index — each step adds ~60ms of delay. */
  index?: number;
  delay?: number;
  /** Element tag to render — use "li" inside lists so markup stays valid. */
  as?: "div" | "li";
};

const MotionLi = motion.li;
const MotionDiv = motion.div;

export function Reveal({ children, className, index = 0, delay = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Comp = as === "li" ? MotionLi : MotionDiv;

  if (reduce) {
    const Static = as === "li" ? "li" : "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: delay + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Comp>
  );
}
