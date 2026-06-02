"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [isMobile, setIsMobile] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 50, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 300);
      cursorY.set(e.clientY - 300);
    };

    if (!window.matchMedia("(max-width: 768px)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ x: springX, y: springY }}
    >
      <div
        className="h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(221,183,255,0.07) 0%, rgba(183,109,255,0.03) 30%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
