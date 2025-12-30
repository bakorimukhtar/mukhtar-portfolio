import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";

import rijxaLogo from "../assets/rijxa-logo.png";
import yawoLogo from "../assets/yawo-logo.png";
import "./Projects.css";

const projects = [
  {
    id: "rijxa",
    title: "Rijxa — Event Management Platform",
    role: "Founder & CTO • Full‑stack",
    stage: "Early traction",
    logo: rijxaLogo,
    summary:
      "Event platform for African organizers with ticketing, QR badges, attendee/vendor onboarding, real‑time check‑ins, analytics, and exportable reports.",
    focus: "Event technology • SaaS",
    stack: ["React", "PHP", "REST APIs", "SQL", "QR", "Analytics"],
    notes:
      "Built to handle real on‑ground events — capacity, queues, and reporting — not just demo check‑ins.",
    live: "https://rijxa.com.ng",
    showLive: true,
  },
  {
    id: "yawo",
    title: "YAWO — Mobility, Delivery & Living Super‑App",
    role: "Product & Technical Lead",
    stage: "Ideation / Build",
    logo: yawoLogo,
    summary:
      "Super‑app for Northern Nigeria combining ride‑hailing, courier delivery, meals, hotel & apartment booking, rentals, and logistics in one platform.",
    focus: "Mobility • Logistics • Super‑app",
    stack: ["Product design", "System architecture", "Market research"],
    notes:
      "Optimized for local transport types, low‑bandwidth usage, one wallet across services, and a long‑term shift toward electric mobility.",
    live: "#",
    showLive: false,
  },
];

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

function Projects() {
  return (
    <div className="projects-page">
      {/* HEADER */}
      <section className="projects-hero">
        <div className="projects-hero-left">
          <p className="eyebrow">Startup projects</p>
          <h1 className="projects-title">
            The products Mukhtar is{" "}
            <span className="projects-title-gradient">actively building.</span>
          </h1>
          <p className="projects-subtitle">
            A focused view of founder‑led products: current stage, problem
            space, and where effort is going right now.
          </p>
        </div>
        <div className="projects-hero-right">
          <p>
            Client work, internships, and roles like Musixmatch and SIWES are
            highlighted separately on the Experience page.
          </p>
          <div className="projects-hero-meta">
            <span>Owner‑led startups only.</span>
            <span>Updated as traction grows.</span>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <motion.section
        className="projects-grid projects-grid--two"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="project-card project-card--startup"
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.01,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <header className="project-card-header">
              <div className="project-logo-wrap">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="project-logo"
                />
              </div>
              <div className="project-header-text">
                <div className="project-badge-row">
                  <span className="project-badge">{project.stage}</span>
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-role">{project.role}</p>
              </div>
            </header>

            <p className="project-about">{project.summary}</p>

            {project.id === "yawo" && (
              <p className="project-about project-about--muted">
                Built for Northern Nigeria: rides, courier & last‑mile delivery,
                meals, hotels & apartments, rentals, and logistics inside one
                lightweight app.
              </p>
            )}

            <div className="project-meta">
              <div className="project-meta-block">
                <span className="project-meta-label">Product focus</span>
                <span className="project-meta-value">{project.focus}</span>
              </div>

              <div className="project-meta-block">
                <span className="project-meta-label">Stage</span>
                <span className="project-meta-value project-impact">
                  {project.notes}
                </span>
              </div>

              <div className="project-meta-block">
                <span className="project-meta-label">Stack &amp; work</span>
                <div className="project-tags">
                  {project.stack.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <footer className="project-footer project-footer--simple">
              {project.showLive ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <Globe2 size={14} />
                  <span>Visit Rijxa</span>
                  <ArrowRight size={13} />
                </a>
              ) : (
                <span className="project-stage-pill">
                  Ideation &amp; build in progress
                </span>
              )}
            </footer>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}

export default Projects;
