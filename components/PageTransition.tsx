"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Logo from "./Logo";

interface TransitionEvent extends CustomEvent {
  detail: { target: string };
}

export function triggerPageTransition(target: string) {
  window.dispatchEvent(
    new CustomEvent("page-transition", { detail: { target } })
  );
}

export default function PageTransition() {
  const [active, setActive] = useState(false);

  const handleTransition = useCallback((e: Event) => {
    const { target } = (e as TransitionEvent).detail;
    setActive(true);

    // After overlay appears, start the smooth scroll
    setTimeout(() => {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(target, {
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }, 350);

    // Dismiss overlay after scroll finishes
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.addEventListener("page-transition", handleTransition);
    return () =>
      window.removeEventListener("page-transition", handleTransition);
  }, [handleTransition]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Semi-transparent purple wash — user can see scroll behind */}
          <motion.div
            className="absolute inset-0 bg-[#490080]/25 backdrop-blur-[2px]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
          />

          {/* Top and bottom purple bars for depth */}
          <motion.div
            className="absolute left-0 right-0 top-0 h-1 bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "right" }}
          />

          {/* Center logo */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
          >
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-2 border-primary/40 shadow-[0_0_60px_rgba(183,109,255,0.4)]">
              <Logo size={80} className="h-full w-full" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
