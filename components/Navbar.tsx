"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import { triggerPageTransition } from "./PageTransition";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "STORY", href: "#story" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
];

function CharHoverLink({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent, href: string) => void;
}) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      className={`group relative inline-flex flex-col overflow-hidden font-mono text-xs tracking-[0.05em] transition-colors ${
        isActive
          ? "font-bold text-primary"
          : "text-on-surface/60 hover:text-on-surface"
      }`}
      style={{ height: "1.4em", lineHeight: "1.4em" }}
    >
      <span className="inline-flex transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {label.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="inline-flex transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {label.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
      {isActive && (
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary" />
      )}
    </a>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("work");
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      triggerPageTransition(href);
    },
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl" : "bg-background"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 md:px-10">
        {/* Brand — Logo + Text */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const lenis = (window as any).__lenis;
            if (lenis) lenis.scrollTo(0, { duration: 1.8 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
        >
          <Logo size={40} className="rounded-lg" />
          <span className="font-display text-xl tracking-tighter text-primary md:text-2xl">
            MY PORTFOLIO
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <CharHoverLink
              key={link.href}
              label={link.label}
              href={link.href}
              isActive={activeSection === link.href.replace("#", "")}
              onClick={handleNavClick}
            />
          ))}
        </div>

        {/* CTA Button + Theme Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center gap-2 border-2 border-primary bg-transparent px-5 py-2.5 font-mono text-xs tracking-[0.05em] text-primary transition-all duration-300 hover:bg-primary hover:text-black md:px-6 md:py-3"
          >
            GET IN TOUCH
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
