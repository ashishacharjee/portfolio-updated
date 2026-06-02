"use client";

import { FadeUp } from "./AnimatedText";

export default function Footer() {
  const handleSmoothScroll = (
    e: React.MouseEvent,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(href, { duration: 1.8 });
      }
    }
  };

  return (
    <footer className="border-t border-surface-container-high bg-surface-container-lowest py-12">
      <FadeUp>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-10">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const lenis = (window as any).__lenis;
              if (lenis) lenis.scrollTo(0, { duration: 1.8 });
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl text-on-surface transition-colors hover:text-primary"
          >
            MY PORTFOLIO
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 font-mono text-xs tracking-[0.05em] text-on-surface-variant opacity-80 transition-opacity hover:opacity-100">
            <a
              href="https://www.linkedin.com/in/ashish-chandra-acharjee/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/ashishacharjee"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              GITHUB
            </a>
            <a
              href="https://docs.google.com/document/d/1MPLV4hgc2RDCN1TzRoLnRGZX_FZ46lH_dhdpkHZBbBY/edit?usp=sharing"
              className="transition-colors duration-200 hover:text-white"
            >
              RESUME
            </a>
            <a
              href="mailto:ashishchandraacharjee@gmail.com"
              className="transition-colors duration-200 hover:text-white"
            >
              EMAIL
            </a>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs tracking-[0.05em] text-on-surface-variant">
            ©2026 ASHISH CHANDRA ACHARJEE — BUILT FOR PERFORMANCE
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
