import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Gauge,
  Network,
  Sparkles,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const containerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const cardsFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Home() {
  return (
    <div className="home">
      {/* Background blobs */}
      <div className="hero-blob hero-blob--one" />
      <div className="hero-blob hero-blob--two" />
      <div className="hero-blob hero-blob--three" />

      {/* HERO SECTION */}
      <motion.section
        className="hero"
        variants={containerStagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-left" variants={fadeUp}>
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            <span>Founder &amp; CTO — Rijxa</span>
          </div>

          <h1 className="hero-title">
            Building event &amp; school platforms{" "}
            <span className="hero-gradient">that actually ship.</span>
          </h1>

          <p className="hero-subtitle">
            Mukhtar is a product‑driven full‑stack developer and Computer
            Science student in Katsina, focused on event technology, school
            systems, and AI‑powered experiences.
          </p>

          <div className="hero-actions">
            <Link to="/projects">
              <motion.button
                className="btn-primary hero-cta-main"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={16} />
                View flagship work
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                className="hero-cta-secondary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Let’s talk
                <ArrowRight size={15} />
              </motion.button>
            </Link>
          </div>

          <motion.div
            className="hero-meta"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="hero-meta-item">
              <span className="hero-meta-label">Primary stack</span>
              <span className="hero-meta-value">
                React • PHP • SQL • Python
              </span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">Focus</span>
              <span className="hero-meta-value">
                Event tech • School systems • AI workflows
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side: animated “status cards” */}
        <motion.div
          className="hero-right"
          variants={cardsFade}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="hero-card hero-card--primary"
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="hero-card-header">
              <div className="hero-card-pill">
                <Code2 size={14} />
                <span>Rijxa Platform</span>
              </div>
              <span className="hero-card-status">Live</span>
            </div>
            <p className="hero-card-title">End‑to‑end event management.</p>
            <p className="hero-card-body">
              Ticketing, QR badges, real‑time check‑ins, analytics, and exports
              for organizers across Africa.
            </p>
            <div className="hero-card-footer">
              <span>Event tech • SaaS</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-card hero-card--secondary"
            whileHover={{ y: -6, rotateX: -2, rotateY: 4 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="hero-card-header">
              <div className="hero-card-pill">
                <Network size={14} />
                <span>Demo School Website</span>
              </div>
              <span className="hero-card-status hero-card-status--soft">
                Multi‑page
              </span>
            </div>
            <p className="hero-card-title">Student‑first school presence.</p>
            <p className="hero-card-body">
              Multi‑page website with noticeboard, admissions, portals, and
              staff sections tuned for real schools.
            </p>
            <div className="hero-card-footer">
              <span>Education • Web</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-card hero-card--tertiary"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="hero-card-header">
              <div className="hero-card-pill">
                <Gauge size={14} />
                <span>Musixmatch Specialist</span>
              </div>
              <span className="hero-card-status hero-card-status--badge">
                Since 2023
              </span>
            </div>
            <p className="hero-card-title">Lyrics &amp; metadata systems.</p>
            <p className="hero-card-body">
              Verified multilingual lyrics with strict metadata and quality
              control, powering real user experiences.
            </p>
            <div className="hero-card-footer hero-card-footer--row">
              <span>Quality systems</span>
              <span>AI‑ready data</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* SKILLS + HIGHLIGHTS */}
      <section className="home-grid">
        <motion.div
          className="home-panel"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="home-panel-title">Technical focus</h2>
          <p className="home-panel-body">
            Beyond tutorials — Mukhtar ships real products with production
            constraints: auth, portals, dashboards, and clean frontends.
          </p>
          <div className="skills-grid">
            <div className="skill-pill">
              <span className="skill-label">Frontend</span>
              <span className="skill-value">React, HTML, CSS, JS</span>
            </div>
            <div className="skill-pill">
              <span className="skill-label">Backend</span>
              <span className="skill-value">PHP, Python, REST APIs</span>
            </div>
            <div className="skill-pill">
              <span className="skill-label">Database</span>
              <span className="skill-value">SQL auth &amp; integrations</span>
            </div>
            <div className="skill-pill">
              <span className="skill-label">Tools</span>
              <span className="skill-value">Git, Office, AI tooling</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="home-panel home-panel--accent"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="home-panel-header">
            <Award size={18} />
            <h2 className="home-panel-title">What stands out</h2>
          </div>
          <ul className="home-list">
            <li>
              Founder mindset from shipping Rijxa, not just cloning portfolios.
            </li>
            <li>
              Real internship experience building school information systems and
              SQL‑based auth flows.
            </li>
            <li>
              Strong documentation and UI/UX awareness for non‑technical
              stakeholders.
            </li>
            <li>
              Proven specialist track at Musixmatch with multilingual workflows.
            </li>
          </ul>
          <Link to="/experience" className="home-link">
            Explore experience
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
