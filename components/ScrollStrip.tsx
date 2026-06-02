"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

interface ScrollStripProps {
  text: string;
  baseVelocity?: number;
  className?: string;
}

export default function ScrollStrip({
  text,
  baseVelocity = -0.5,
  className = "",
}: ScrollStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const skewX = useTransform(smoothVelocity, [-1000, 0, 1000], [-2, 0, 2]);
  const smoothSkew = useSpring(skewX, { damping: 20, stiffness: 300 });

  const repeatedText = `${text} `.repeat(10);

  // Slower speed: 60s base duration divided by a small velocity
  const duration = 80 / Math.max(Math.abs(baseVelocity), 0.1);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap py-8 ${className}`}
    >
      <motion.div
        className="inline-block"
        style={{
          skewX: smoothSkew,
          animation: `${
            baseVelocity < 0 ? "marquee" : "marquee-reverse"
          } ${duration}s linear infinite`,
        }}
      >
        <span className="text-stroke-primary font-display text-[60px] leading-none tracking-wider opacity-[0.18] md:text-[100px]">
          {repeatedText}
        </span>
        <span className="text-stroke-primary font-display text-[60px] leading-none tracking-wider opacity-[0.18] md:text-[100px]">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
