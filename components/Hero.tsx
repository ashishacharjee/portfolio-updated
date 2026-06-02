"use client";

import { motion } from "framer-motion";
import AnimatedText, { FadeUp, ScaleReveal } from "./AnimatedText";
import ParallaxSection from "./ParallaxSection";
import { triggerPageTransition } from "./PageTransition";
import VantaGlobe from "./VantaGlobe";

export default function Hero() {
  return (
    <section className="hero-pattern relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-12 pt-32 md:px-10">
      <VantaGlobe />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-12">
        {/* Left — Text Content */}
        <div className="flex flex-col justify-center md:col-span-8">
          <AnimatedText
            text="HI! I'M"
            as="h1"
            splitBy="chars"
            className="mb-2 font-display text-[48px] uppercase leading-[0.9] text-white md:text-[84px]"
            stagger={0.04}
          />
          <AnimatedText
            text="ASHISH CHANDRA"
            as="h1"
            splitBy="words"
            delay={0.3}
            className="font-display text-[48px] uppercase leading-[0.85] text-primary md:text-[84px]"
          />
          <AnimatedText
            text="ACHARJEE"
            as="h1"
            splitBy="chars"
            delay={0.5}
            stagger={0.05}
            className="mb-6 font-display text-[48px] uppercase leading-[0.85] text-primary md:text-[84px]"
          />

          <FadeUp delay={0.7}>
            <div className="flex items-stretch gap-0">
              <motion.div
                className="w-[2px] bg-primary"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ originY: 0 }}
              />
              <p className="max-w-xl py-2 pl-6 font-body text-lg leading-relaxed text-on-surface-variant">
                Aspiring Software Developer. B.Tech IT student &amp; tech
                enthusiast focused on building high-performance systems and
                full-stack solutions. Driven by the vertical drive to innovate.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.9}>
            <div className="mt-10">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  triggerPageTransition("#work");
                }}
                className="inline-flex items-center gap-2 border-2 border-primary bg-transparent px-8 py-4 font-mono text-xs uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-black"
              >
                VIEW WORK
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Right — Image */}
        <div className="relative hidden md:col-span-4 md:block">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background to-transparent" />
          <ScaleReveal>
            <ParallaxSection speed={-0.15}>
              <img
                alt="Abstract high-tech digital background"
                //circular profile picture of Ashish Chandra with a techy background remove the below square crop and make it circular with a border
                className="aspect-square w-full rounded-full border-4 border-primary object-cover" 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGsckIQS3BOtA/profile-displayphoto-scale_400_400/B4EZfJcj64HwAg-/0/1751431398703?e=1781740800&v=beta&t=9qUDt3eUrJ2tJjEYKWw7A7KWe2mqhVxdTQ3NQALFge4"
              />
            </ParallaxSection>
          </ScaleReveal>
        </div>
      </div>

      {/* Status Text — Bottom Right */}
      <FadeUp delay={1.2} className="absolute bottom-4 right-4 z-10">
        <div className="flex flex-col items-end gap-2 font-mono text-xs tracking-[0.05em] text-on-surface-variant">
          <TypewriterText text="SYS.STATUS: ONLINE" delay={1.5} />
          <TypewriterText
            text="VERTICAL_DRIVE_ACTIVE"
            delay={2.0}
            className="text-primary"
          />
        </div>
      </FadeUp>
    </section>
  );
}

/* Typewriter effect for status text */
function TypewriterText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.01, delay }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.03, delay: delay + i * 0.04 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
