"use client";

import AnimatedText, { FadeUp } from "./AnimatedText";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "EMAIL",
    value: "ashishchandraacharjee@gmail.com",
    href: "mailto:ashishchandraacharjee@gmail.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "LINKEDIN",
    value: "ashish-chandra-acharjee",
    href: "https://www.linkedin.com/in/ashish-chandra-acharjee/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GITHUB",
    value: "ashishacharjee",
    href: "https://github.com/ashishacharjee",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-background px-4 py-20 md:px-10 md:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Massive display text */}
        <div className="mb-16">
          <AnimatedText
            text="LET'S"
            as="h2"
            splitBy="chars"
            className="text-stroke-primary font-display text-[60px] uppercase leading-none md:text-[120px]"
            stagger={0.04}
          />
          <AnimatedText
            text="CONNECT"
            as="h2"
            splitBy="chars"
            delay={0.3}
            className="font-display text-[60px] uppercase leading-none text-primary md:text-[120px]"
            stagger={0.04}
          />
        </div>

        <FadeUp delay={0.4}>
          <p className="mb-16 max-w-2xl border-l-2 border-primary py-2 pl-6 font-body text-lg leading-relaxed text-on-surface-variant">
            I&apos;m always open to internships, collaboration, or meaningful
            tech projects that challenge me to grow. Whether it&apos;s building
            real-world applications, solving problems through code, or
            contributing to something impactful — I&apos;m ready to give it my
            best. Let&apos;s build something great together.
          </p>
        </FadeUp>

        {/* Contact Links */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="glass-dark group flex items-center gap-6 p-8 transition-all duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/30 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
                {link.icon}
              </div>
              <div>
                <p className="mb-1 font-mono text-xs tracking-[0.05em] text-on-surface-variant">
                  {link.label}
                </p>
                <p className="font-body text-lg text-on-surface transition-colors group-hover:text-primary">
                  {link.value}
                </p>
              </div>
              <svg
                className="ml-auto h-5 w-5 text-on-surface-variant transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
