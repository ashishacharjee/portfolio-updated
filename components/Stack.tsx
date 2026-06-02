"use client";

import { motion, Variants } from "framer-motion";
import { SlideInLeft } from "./AnimatedText";

// ──────────────────────────────────────────────
// ADD NEW LANGUAGES by adding to this array:
// ──────────────────────────────────────────────
const languages = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C", icon: "⚙️" },
  { name: "C++", icon: "🔧" },
  { name: "JavaScript", icon: "⚡" },
  { name: "SQL", icon: "🗄️" },
  { name: "Prolog", icon: "🧠" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "MySQL", icon: "💾" },
  // { name: "NewLang", icon: "🆕" }, // ← Add more here
];

// ──────────────────────────────────────────────
// ADD NEW FRAMEWORKS/TOOLS by adding to this array:
// ──────────────────────────────────────────────
const frameworks = [
  { name: "Django", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "SQLite", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "AWS", category: "Cloud" },
  // { name: "NewTool", category: "Category" }, // ← Add more here
];

// ──────────────────────────────────────────────
// SKILLS organized by category from LinkedIn
// ADD NEW SKILLS by adding to the relevant category:
// ──────────────────────────────────────────────
const skillCategories = [
  {
    title: "SOFTWARE & ENGINEERING",
    skills: [
      "Software Development",
      "OOP",
      "Data Structures",
      "Project Management",
      "Engineering",
    ],
  },
  {
    title: "DATA & AI",
    skills: [
      "Data Science",
      "Data Analytics",
      "Machine Learning",
      "AI",
      "Statistical Analysis",
      "Data Validation",
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    skills: [
      "Cloud Computing",
      "Amazon EC2",
      "Amazon RDS",
      "DynamoDB",
      "AWS IAM",
    ],
  },
  {
    title: "BUSINESS & INNOVATION",
    skills: [
      "Entrepreneurship",
      "Business Planning",
      "Startup Development",
      "Design Thinking",
      "Market Research",
      "Lean Canvas",
    ],
  },
  {
    title: "ACADEMIC & SOFT SKILLS",
    skills: [
      "Problem Solving",
      "Public Speaking",
      "Team Collaboration",
      "Logical Reasoning",
      "Creativity & Innovation",
      "Computer Science",
      "Mathematics",
    ],
  },
  // ──────────────────────────────────────────────
  // ADD MORE SKILL CATEGORIES:
  // {
  //   title: "CATEGORY NAME",
  //   skills: ["Skill1", "Skill2"],
  // },
];

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative bg-surface-container-lowest px-4 py-20 md:px-10 md:py-[96px]"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <SlideInLeft>
          <h2 className="text-stroke-primary mb-16 font-display text-[48px] uppercase tracking-wider">
            TECH STACK //
          </h2>
        </SlideInLeft>

        {/* Languages */}
        <div className="mb-12">
          <p className="mb-6 font-mono text-xs tracking-[0.05em] text-primary">
            LANGUAGES ({languages.length})
          </p>
          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {languages.map((lang) => (
              <motion.div
                key={lang.name}
                variants={itemVariants}
                className="glass-dark group flex items-center gap-3 p-4 transition-all duration-300"
              >
                <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                  {lang.icon}
                </span>
                <span className="font-mono text-xs tracking-[0.05em] text-on-surface">
                  {lang.name.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Frameworks & Tools */}
        <div className="mb-12">
          <p className="mb-6 font-mono text-xs tracking-[0.05em] text-primary">
            FRAMEWORKS & TOOLS
          </p>
          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {frameworks.map((fw) => (
              <motion.div
                key={fw.name}
                variants={itemVariants}
                className="group border border-white/10 p-4 text-center transition-all duration-300 hover:border-primary/50"
              >
                <p className="mb-1 font-body text-base text-on-surface">
                  {fw.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">
                  {fw.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills by Category */}
        <div className="mb-12">
          <p className="mb-6 font-mono text-xs tracking-[0.05em] text-primary">
            SKILLS & EXPERTISE
          </p>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="glass-dark p-6"
              >
                <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-primary">
                  {cat.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 px-2.5 py-1 font-mono text-[10px] text-on-surface-variant transition-colors hover:border-primary/30 hover:text-on-surface"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Present Focus */}
        <motion.div
          className="border-l-2 border-primary pl-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-2 font-mono text-xs tracking-[0.05em] text-primary">
            PRESENT FOCUS
          </p>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
            Started coding during school and built my first real project before
            graduation. Now working on full-stack development using Python,
            HTML/CSS, SQL, and Django. Passionate about automation, AI tools, and
            solving real-world problems. Open to internships and team
            collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
