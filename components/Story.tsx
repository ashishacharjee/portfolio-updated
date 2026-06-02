"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FadeUp, SlideInLeft } from "./AnimatedText";
import VantaNet from "./VantaNet";

/* Animated counter for stat numbers */
function Counter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 4, suffix: "+", label: "PROJECTS BUILT" },
  { value: 4, suffix: "+", label: "CERTIFICATIONS" },
  { value: 10, suffix: "+", label: "TECH LANGUAGES" },
  { value: 4, suffix: "+", label: "YEARS CODING" },
];

const certifications = [
  {
    issuer: "CISCO",
    title: "Introduction to Data Science",
    date: "Feb 2026",
    credentialId: "a23752b0-9ece-4e53-a435-4141906785de",
    desc: "Verified ability to explain data analytics challenges and the role of data in AI and Machine Learning.",
    skills: ["Data Analytics", "AI", "Machine Learning", "Data Collection", "Data Validation"],
  },
  {
    issuer: "WADHWANI",
    title: "Ignite Bootcamp – Idea to Plan",
    date: "Dec 2025",
    credentialId: null,
    desc: "Completed all 7 milestones. Final score: 4.7/5. Gained exposure to startup planning, business modeling, financial projections, and venture validation.",
    skills: ["Entrepreneurship", "Business Planning", "Startup Development", "Finance", "Lean Canvas", "Design Thinking"],
  },
  {
    issuer: "AWS",
    title: "AWS Technical Essentials",
    date: "Jun 2025",
    credentialId: null,
    desc: "Foundational knowledge of cloud computing, EC2, RDS, DynamoDB, IAM, security, storage, and networking on AWS.",
    skills: ["AWS", "Cloud Computing", "EC2", "RDS", "DynamoDB", "IAM"],
  },
  {
    issuer: "HP",
    title: "Data Science & Analytics",
    date: "Jun 2025",
    credentialId: "5e83e13a-ee96-4f1b-befd-2460fc26973f",
    desc: "Foundational knowledge in data analysis, statistical concepts, and data-driven decision making. Practical understanding of analytics workflows.",
    skills: ["Data Analysis", "Statistical Analysis", "Data Science"],
  },
  // ──────────────────────────────────────────────
  // ADD FUTURE CERTIFICATIONS BELOW
  // ──────────────────────────────────────────────
  // {
  //   issuer: "ISSUER",
  //   title: "Certification Title",
  //   date: "Month Year",
  //   credentialId: "optional-id-or-null",
  //   desc: "Brief description of what you learned.",
  //   skills: ["Skill1", "Skill2"],
  // },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-background px-4 py-20 md:px-10 md:py-[96px]">
      <VantaNet />
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <SlideInLeft>
          <h2 className="text-stroke-primary mb-16 font-display text-[48px] uppercase tracking-wider">
            MY STORY //
          </h2>
        </SlideInLeft>

        {/* Stats Row */}
        <motion.div
          className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="glass-dark p-6 text-center md:p-8"
            >
              <div className="mb-2 font-display text-[48px] leading-none text-primary md:text-[64px]">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs tracking-[0.05em] text-on-surface-variant">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Education */}
          <FadeUp>
            <div className="glass-dark p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-primary/30 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl uppercase text-white">EDUCATION</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="font-mono text-xs text-primary">CURRENT</p>
                  <p className="font-body text-lg text-on-surface">B.Tech in Information Technology</p>
                  <p className="font-body text-sm text-on-surface-variant">GuruNanak Institute of Technology, Kolkata</p>
                </div>
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="font-mono text-xs text-on-surface-variant">CLASS 9–12 · SCIENCE</p>
                  <p className="font-body text-lg text-on-surface">Dooars International Public School</p>
                  <p className="font-body text-sm text-on-surface-variant">West Bengal</p>
                </div>
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="font-mono text-xs text-on-surface-variant">CLASS 7–8</p>
                  <p className="font-body text-lg text-on-surface">Don Bosco School</p>
                  <p className="font-body text-sm text-on-surface-variant">Mizoram</p>
                </div>
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="font-mono text-xs text-on-surface-variant">LKG–CLASS 7</p>
                  <p className="font-body text-lg text-on-surface">Little Diamond English School</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Achievements */}
          <FadeUp delay={0.15}>
            <div className="glass-dark p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-primary/30 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl uppercase text-white">ACHIEVEMENTS</h3>
              </div>
              <ul className="space-y-3 font-body text-base text-on-surface-variant">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />2nd place in school quiz competition</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />1st rank in school — Class 12 IMO</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />Anchored major school functions</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />1st in district-level group dance event</li>
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <FadeUp>
            <p className="mb-8 font-mono text-xs tracking-[0.05em] text-primary">
              CERTIFICATIONS
            </p>
          </FadeUp>
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="glass-dark group p-6 transition-all duration-300"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="border border-primary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10px] text-on-surface-variant">
                    {cert.date}
                  </span>
                </div>
                <h4 className="mb-2 font-body text-lg font-bold text-on-surface">
                  {cert.title}
                </h4>
                <p className="mb-4 font-body text-sm text-on-surface-variant">
                  {cert.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-on-surface-variant transition-colors group-hover:border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
