"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      id="theme-toggle"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      onClick={toggleTheme}
      className="theme-toggle-btn"
    >
      {/* Track — dark sky / light sky */}
      <motion.div
        className="theme-toggle-track"
        animate={{
          backgroundColor: isLight ? "#6ba4d4" : "#2d3548",
        }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Stars (visible in dark mode) */}
        <motion.div
          className="theme-toggle-stars"
          animate={{ opacity: isLight ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="star star-1" />
          <span className="star star-2" />
          <span className="star star-3" />
          <span className="star star-4" />
          <span className="star star-5" />
        </motion.div>

        {/* Clouds */}
        <motion.div
          className="theme-toggle-cloud cloud-1"
          animate={{
            x: isLight ? 20 : -4,
            opacity: isLight ? 1 : 0.85,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.div
          className="theme-toggle-cloud cloud-2"
          animate={{
            x: isLight ? 24 : -2,
            opacity: isLight ? 1 : 0.85,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.05 }}
        />
        <motion.div
          className="theme-toggle-cloud cloud-3"
          animate={{
            x: isLight ? 16 : -6,
            opacity: isLight ? 0.9 : 0.6,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        />

        {/* Knob — sun / moon */}
        <motion.div
          className="theme-toggle-knob"
          animate={{
            x: isLight ? 1 : 27,
            backgroundColor: isLight ? "#f5c842" : "#c4c9d1",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          {/* Moon craters (dark mode) */}
          <motion.span
            className="crater crater-1"
            animate={{ opacity: isLight ? 0 : 0.4, scale: isLight ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="crater crater-2"
            animate={{ opacity: isLight ? 0 : 0.4, scale: isLight ? 0 : 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          />
          <motion.span
            className="crater crater-3"
            animate={{ opacity: isLight ? 0 : 0.4, scale: isLight ? 0 : 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />

          {/* Sun rays (light mode) */}
          <motion.div
            className="sun-rays"
            animate={{
              opacity: isLight ? 1 : 0,
              scale: isLight ? 1 : 0.3,
              rotate: isLight ? 0 : -45,
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="sun-ray"
                style={{ transform: `rotate(${i * 45}deg) translateY(-15px)` }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </button>
  );
}
