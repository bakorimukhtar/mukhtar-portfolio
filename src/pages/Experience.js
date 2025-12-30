import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import "./Experience.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.08, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Experience() {
  return (
    <div className="experience-page">
      {/* HEADER */}
      <section className="experience-hero">
        <div className="experience-hero-left">
          <p className="eyebrow">Experience & background</p>
          <h1 className="experience-title">
            Blending hands‑on platforms,{" "}
            <span className="experience-title-gradient">
              internships, and leadership.
            </span>
          </h1>
          <p className="experience-subtitle">
            From campus leadership and SIWES internship work to specialist‑level
            music metadata, this page focuses on roles, impact, and how Mukhtar
            works with teams.
          </p>
        </div>
      </section>

      {/* LAYOUT GRID */}
      <motion.section
        className="experience-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT: ROLES TIMELINE */}
        <motion.div className="experience-column" variants={item}>
          <h2 className="experience-section-title">
            <Briefcase size={16} />
            Roles & experience
          </h2>

          <div className="timeline">
            {/* Technical Assistant */}
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-heading">
                  <h3>Technical Assistant</h3>
                  <span className="timeline-org">
                    Nigerian Association of Computing Students (NACOS),
                    UMYU Chapter
                  </span>
                  <span className="timeline-meta">
                    Dec 2025 — Present • Katsina, Nigeria
                  </span>
                </div>
                <ul className="timeline-list">
                  <li>
                    Supports student‑led computing initiatives and events with
                    technical planning and on‑ground coordination.
                  </li>
                  <li>
                    Assists with tooling, platforms, and communication for the
                    association&apos;s activities.
                  </li>
                </ul>
              </div>
            </div>

            {/* Musixmatch */}
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-heading">
                  <h3>Lyric Specialist</h3>
                  <span className="timeline-org">Musixmatch</span>
                  <span className="timeline-meta">
                    Feb 2023 — Present • Specialist since Jul 2023 • Remote
                  </span>
                </div>
                <ul className="timeline-list">
                  <li>
                    Curates and verifies multilingual lyrics and metadata with
                    strict quality and compliance standards.
                  </li>
                  <li>
                    Earned platform‑recognized Specialist status for sustained
                    accuracy and reliability.
                  </li>
                </ul>
              </div>
            </div>

            {/* SIWES */}
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-heading">
                  <h3>SIWES Intern — Web &amp; Software Development</h3>
                  <span className="timeline-org">
                    Katsina State Institute of Technology and Management
                  </span>
                  <span className="timeline-meta">
                    3‑month SIWES (2025) • Katsina, Nigeria
                  </span>
                </div>
                <ul className="timeline-list">
                  <li>
                    Assisted in building a school information system web access
                    platform for students and staff.
                  </li>
                  <li>
                    Implemented SQL‑based login authentication and portal
                    redirection flows.
                  </li>
                  <li>
                    Supported debugging, UI improvements, and technical
                    documentation across the team.
                  </li>
                  <li>
                    Practiced a weekly coding cycle using HTML, Excel, Python,
                    Word, and C++.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: EDUCATION + SKILLS + CERTS + STRENGTHS */}
        <motion.div className="experience-column experience-column-right" variants={item}>
          {/* Education */}
          <div className="experience-card">
            <div className="experience-card-header">
              <GraduationCap size={16} />
              <h2>Education</h2>
            </div>
            <div className="experience-card-body">
              <h3>Umaru Musa Yar’adua University, Katsina</h3>
              <p className="experience-card-meta">
                Bachelor of Science — Computer Science
              </p>
              <p className="experience-card-meta">
                Expected graduation: Early 2026
              </p>
            </div>
          </div>

          {/* Technical skills */}
          <div className="experience-card">
            <div className="experience-card-header">
              <Sparkles size={16} />
              <h2>Technical skills</h2>
            </div>
            <div className="experience-card-body skills-grid">
              <div className="skill-block">
                <span className="skill-label">Frontend</span>
                <span className="skill-value">HTML, CSS, JavaScript</span>
              </div>
              <div className="skill-block">
                <span className="skill-label">Backend</span>
                <span className="skill-value">PHP, Python</span>
              </div>
              <div className="skill-block">
                <span className="skill-label">Web &amp; scripting</span>
                <span className="skill-value">JavaScript, PHP, Python</span>
              </div>
              <div className="skill-block">
                <span className="skill-label">Database</span>
                <span className="skill-value">
                  SQL (authentication &amp; integration)
                </span>
              </div>
              <div className="skill-block">
                <span className="skill-label">Tools</span>
                <span className="skill-value">
                  Word, Excel, PowerPoint/Slides
                </span>
              </div>
              <div className="skill-block">
                <span className="skill-label">Other</span>
                <span className="skill-value">
                  Transcription, audio &amp; lyrics metadata curation
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="experience-card">
            <div className="experience-card-header">
              <Award size={16} />
              <h2>Certifications</h2>
            </div>
            <div className="experience-card-body">
              <ul className="chip-list">
                <li>
                  Programming with Python Professional Certificate — OpenEDG
                  Python Institute
                </li>
                <li>
                  Career Essentials in Sustainable Tech — Microsoft &amp;
                  LinkedIn
                </li>
                <li>
                  Career Essentials in Project Management — Microsoft &amp;
                  LinkedIn
                </li>
                <li>
                  Career Essentials in Generative AI — Microsoft &amp; LinkedIn
                </li>
                <li>
                  Musixmatch Certificates: Graduate, Curator, Specialist (Lyric
                  Specialist since Jul 2023)
                </li>
              </ul>
            </div>
          </div>

          {/* Strengths */}
          <div className="experience-card">
            <div className="experience-card-header">
              <CheckCircle2 size={16} />
              <h2>Strengths</h2>
            </div>
            <div className="experience-card-body">
              <ul className="chip-list">
                <li>Product‑driven developer and technical leader</li>
                <li>Experienced in building real platforms from scratch</li>
                <li>Strong database authentication knowledge</li>
                <li>Excellent documentation and UI/UX awareness</li>
                <li>Specialized in lyrics and transcription systems</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Experience;
