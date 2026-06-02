"use client";

import { motion, Variants } from "framer-motion";
import { SlideInLeft } from "./AnimatedText";

const projects = [
  {
    num: "01",
    title: "AI Doctor\nAssistance",
    tags: ["Python", "Flask", "JS"],
    desc: "Intelligent medical diagnostic support system leveraging machine learning to assist healthcare professionals.",
    link: "https://github.com/ashishacharjee/AI-Doctor-Assistance",
    image:
      "https://i.pinimg.com/736x/d5/ce/f9/d5cef98272a7b332452f875a7cf816b9.jpg",
  },
  {
    num: "02",
    title: "Food Ordering\nSystem",
    tags: ["Python", "MySQL"],
    desc: "Robust backend architecture for seamless restaurant order processing and database management.",
    link: "https://github.com/ashishacharjee/Food-Ordering-System",
    image:
      "https://i.pinimg.com/originals/ab/be/71/abbe719f6bd49f7012672cbae8209894.jpg",
  },
  {
    num: "03",
    title: "E-Commerce\nWebsite",
    tags: ["Django", "SQLite", "Bootstrap"],
    desc: "Full-stack digital storefront with secure cart management and responsive UI.",
    link: "https://github.com/ashishacharjee/Velvetry-ECommerce-Website",
    image:
      "https://i.pinimg.com/736x/66/35/09/663509c136d014be48eeb54785e1f2ce.jpg",
  },
  {
    num: "04",
    title: "Library Mgmt\nSystem",
    tags: ["Python", "MySQL"],
    desc: "Efficient inventory control and user tracking system for modern library operations.",
    link: "https://github.com/ashishacharjee/Library-Management",
    image:
      "https://i.pinimg.com/1200x/a3/eb/1e/a3eb1e5d87229ecdea29bfcd04453123.jpg",
  },
  // ──────────────────────────────────────────────
  // ADD FUTURE PROJECTS BELOW
  // Copy this template and uncomment to add a new project:
  // ──────────────────────────────────────────────
  // {
  //   num: "05",
  //   title: "Project\nName",
  //   tags: ["Tech1", "Tech2"],
  //   desc: "Brief description of what this project does.",
  //   link: "https://github.com/ashishacharjee/your-repo",
  //   image: "https://example.com/your-image.jpg",
  // },
  // {
  //   num: "06",
  //   title: "Another\nProject",
  //   tags: ["Tech1", "Tech2", "Tech3"],
  //   desc: "Brief description of what this project does.",
  //   link: "https://github.com/ashishacharjee/your-repo",
  //   image: "https://example.com/your-image.jpg",
  // },
];

const cardVariants: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="work"
      className="relative bg-surface-container-lowest px-4 py-12 md:px-10 md:py-[48px]"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <SlideInLeft>
          <h2 className="text-stroke-primary mb-16 font-display text-[48px] uppercase tracking-wider">
            PROJECTS //
          </h2>
        </SlideInLeft>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.num}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className={`glass-dark group relative flex min-h-[480px] flex-col overflow-hidden transition-all duration-300 ${
                i % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title.replace("\n", " ")}
                  className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.95)] via-[rgba(10,10,10,0.5)] to-transparent" />
              </div>

              {/* Project Number */}
              <div className="absolute right-0 top-0 p-4 font-body text-xl font-bold text-white/10 transition-colors group-hover:text-primary/20">
                {project.num}
              </div>

              {/* Content at bottom */}
              <div className="z-10 mt-auto p-8">
                {/* Tech Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.05em] text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-display text-[32px] uppercase leading-none text-white">
                  {project.title.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < project.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>

                {/* Animated underline */}
                <div className="mb-4 h-1 w-12 bg-primary transition-all duration-500 group-hover:w-full" />

                {/* Description */}
                <p className="mb-6 font-body text-base text-on-surface-variant">
                  {project.desc}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.05em] text-primary transition-colors hover:text-white">
                  VIEW DETAILS
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
