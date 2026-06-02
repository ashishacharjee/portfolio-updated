"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  splitBy?: "words" | "chars";
  delay?: number;
  stagger?: number;
  className?: string;
  wordClassName?: string;
  once?: boolean;
  amount?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { stagger: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const childVariants: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AnimatedText({
  text,
  as: Tag = "div",
  splitBy = "words",
  delay = 0,
  stagger = 0.06,
  className = "",
  wordClassName = "",
  once = true,
  amount = 0.3,
}: AnimatedTextProps) {
  const elements =
    splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        custom={{ stagger, delay }}
      >
        {elements.map((el, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
          >
            <motion.span
              className={`inline-block ${wordClassName}`}
              variants={childVariants}
            >
              {el}
              {splitBy === "words" && i < elements.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* Fade-up variant for paragraphs */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Slide in from left */
export function SlideInLeft({
  children,
  delay = 0,
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Scale reveal for images */
export function ScaleReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
