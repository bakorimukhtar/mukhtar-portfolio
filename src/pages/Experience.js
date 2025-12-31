import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import "./Experience.css";

// LOGO IMPORTS (make sure filenames match your assets exactly)
import linkedinLogo from "../assets/linkedin_logo.jpeg";
import microsoftLogo from "../assets/microsoft_logo.jpeg";
import musixmatchLogo from "../assets/musixmatch_logo.jpeg";
import pythonInstituteLogo from "../assets/python_institute_logo.jpeg";

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

// CERTIFICATIONS (put your real verify URLs in `link`)
const certifications = [
  {
    id: "python-openedg",
    name: "Programming with Python Professional Certificate",
    issuer: "OpenEDG Python Institute",
    year: "2025",
    logo: pythonInstituteLogo,
    link: "https://www.linkedin.com/learning/certificates/0181539a5615e9e00947148b8440fe9b6798f1dfe31ae4d565626e0ee665e90b",
  },
  {
    id: "sustainable-tech",
    name: "Career Essentials in Sustainable Tech",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    logo: microsoftLogo,
    link: "https://www.linkedin.com/learning/certificates/4292092ff3decdf9bc63c5590a77ada5ca6180da70edbe2f22408f48ef063bd8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BH75vMEqUReCdKozA4pkbGQ%3D%3D",
  },
  {
    id: "project-management",
    name: "Career Essentials in Project Management",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    logo: microsoftLogo,
    link: "https://www.linkedin.com/learning/certificates/40ef853c61ac5fd2a1b307f4fda2674caf8e1e378c16cc05edc3f019b95ebd4b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BH75vMEqUReCdKozA4pkbGQ%3D%3D",
  },
  {
    id: "generative-ai",
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    logo: microsoftLogo,
    link: "https://www.linkedin.com/learning/certificates/601fd5e1b1c58b365dc45dfb43388c8c8f388f5d71267293d7129a1c8fc7ec26?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BH75vMEqUReCdKozA4pkbGQ%3D%3D",
  },
  {
    id: "musixmatch-track",
    name: "Graduate, Curator & Specialist Track",
    issuer: "Musixmatch",
    year: "Since Jul 2023",
    logo: musixmatchLogo,
    link: "#",
  },
];

function Experience() {
  return (
    <div className="experience-page">
      {/* HEADER */}
      <section className="experience-hero">
        <div className="experience-hero-left">
          <p className="eyebrow">Experience &amp; background</p>
          <h1 className="experience-title">
            Blending founder work,{" "}
            <span className="experience-title-gradient">
              internships, and leadership.
            </span>
          </h1>
          <p className="experience-subtitle">
            From building Rijxa as Founder &amp; CTO to SIWES and Musixmatch,
            this page focuses on roles, responsibilities, and how Mukhtar works
            with teams.
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
            Roles &amp; experience
          </h2>

          <div className="timeline">
            {/* Founder & CTO — Rijxa */}
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-heading">
                  <h3>Founder &amp; CTO</h3>
                  <span className="timeline-org">
                    Rijxa — Event Management Platform
                  </span>
                  <span className="timeline-meta">
                    2024 — Present • Product &amp; engineering
                  </span>
                </div>
                <ul className="timeline-list">
                  <li>
                    Leads product direction and full‑stack development for a
                    platform handling ticketing, QR badges, and real‑time
                    check‑ins.
                  </li>
                  <li>
                    Designs data models, dashboards, and reporting flows for
                    organizers across Africa.
                  </li>
                  <li>
                    Works end‑to‑end: scoping, UX, implementation, and ongoing
                    iteration based on real event needs.
                  </li>
                </ul>
              </div>
            </div>

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
        <motion.div
          className="experience-column experience-column-right"
          variants={item}
        >
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

          {/* Certifications as cards */}
          <div className="experience-card">
            <div className="experience-card-header">
              <Award size={16} />
              <h2>Certifications</h2>
            </div>
            <div className="experience-card-body certs-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-main">
                    <div className="cert-logo-wrap">
                      {cert.logo ? (
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="cert-logo"
                        />
                      ) : (
                        <span className="cert-logo-placeholder">
                          {cert.issuer[0]}
                        </span>
                      )}
                    </div>
                    <div className="cert-text">
                      <p className="cert-name">{cert.name}</p>
                      <p className="cert-issuer">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                  <button
                    className="cert-verify-btn"
                    type="button"
                    onClick={() => {
                      if (cert.link && cert.link !== "#") {
                        window.open(
                          cert.link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                  >
                    Verify credential
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              ))}
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
