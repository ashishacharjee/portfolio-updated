"use client";

import { motion, Variants } from "framer-motion";
import { SlideInLeft, FadeUp } from "./AnimatedText";
import VantaRings from "./VantaRings";

const experiences = [
  {
    company: "CodeAlpha",
    role: "Python Developer",
    type: "Internship",
    period: "May 2026 – Jun 2026",
    duration: "2 months",
    location: "India · Remote",
    description:
      "Designed and developed three fully functional Python applications independently.",
    projects: [
      {
        name: "Hangman Game",
        desc: "Word-guessing game with 4 categories, 3 difficulty levels, hint system, ASCII visuals, and real-time score tracker.",
        github: "https://github.com/ashishacharjee/CodeAlpha_HangmanGame",
      },
      {
        name: "Stock Portfolio Tracker",
        desc: "Menu-driven CLI app to manage stock holdings, track profit/loss, update quantities, and export data to CSV.",
        github: "https://github.com/ashishacharjee/CodeAlpha_StockPortfolioTracker",
      },
      {
        name: "Python Chatbot",
        desc: "Rule-based chatbot with math solving, CS quiz engine, mood detection, conversation memory, and dynamic personalisation.",
        github: "https://github.com/ashishacharjee/CodeAlpha_BasicChatbot",
      },
    ],
    skills: [
      "Python",
      "OOP",
      "File Handling",
      "Data Structures",
      "CLI Development",
    ],
  },
  // ──────────────────────────────────────────────
  // ADD FUTURE EXPERIENCES BELOW
  // Copy the template and fill in your details:
  // ──────────────────────────────────────────────
  // {
  //   company: "Company Name",
  //   role: "Your Role",
  //   type: "Internship / Full-time / Part-time",
  //   period: "Start – End",
  //   duration: "X months",
  //   location: "City · Remote/On-site",
  //   description: "Brief overview of what you did.",
  //   projects: [
  //     { name: "Project Name", desc: "What you built.", github: "https://github.com/..." },
  //   ],
  //   skills: ["Skill1", "Skill2"],
  // },
];

const cardVariants: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background px-4 py-20 md:px-10 md:py-[96px]"
    >
      <VantaRings />
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <SlideInLeft>
          <h2 className="text-stroke-primary mb-16 font-display text-[48px] uppercase tracking-wider">
            EXPERIENCE //
          </h2>
        </SlideInLeft>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-dark overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col gap-4 border-b border-white/10 p-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <h3 className="font-display text-2xl uppercase text-white">
                      {exp.role}
                    </h3>
                    <span className="border border-primary/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                      {exp.type}
                    </span>
                  </div>
                  <p className="font-body text-lg text-on-surface-variant">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs tracking-[0.05em] text-primary">
                    {exp.period}
                  </p>
                  <p className="font-mono text-[10px] text-on-surface-variant">
                    {exp.duration} · {exp.location}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="mb-6 font-body text-base text-on-surface-variant">
                  {exp.description}
                </p>

                {/* Projects delivered */}
                <p className="mb-4 font-mono text-xs tracking-[0.05em] text-primary">
                  PROJECTS DELIVERED
                </p>
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {exp.projects.map((proj, j) => (
                    <div
                      key={j}
                      className="group border border-white/10 p-4 transition-colors hover:border-primary/30"
                    >
                      <h4 className="mb-2 font-body text-base font-bold text-on-surface">
                        {proj.name}
                      </h4>
                      <p className="mb-3 font-body text-sm text-on-surface-variant">
                        {proj.desc}
                      </p>
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary transition-colors hover:text-white"
                        >
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                          VIEW CODE
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-primary/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
