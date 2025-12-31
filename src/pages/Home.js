import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Gauge,
  Network,
  Sparkles,
  Award,
  Cpu,
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
            Computer Science student &amp;{" "}
            <span className="hero-gradient">
              full‑stack builder for real products.
            </span>
          </h1>

          <p className="hero-subtitle">
            Mukhtar Abdullahi is a Computer Science student and full‑stack
            developer from Katsina, leading Rijxa as CTO and building African‑
            focused event, education, and AI‑powered web platforms.
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
                HTML, CSS, JavaScript, React, PHP, Python, SQL
              </span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">Focus areas</span>
              <span className="hero-meta-value">
                Event platforms • School systems • AI‑assisted workflows
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
              <span className="hero-card-status">Founder &amp; CTO</span>
            </div>
            <p className="hero-card-title">End‑to‑end event management.</p>
            <p className="hero-card-body">
              Comprehensive event SaaS with ticketing, QR badges, real‑time
              check‑ins, and dashboards for organizers across Africa.
            </p>
            <div className="hero-card-footer">
              <span>Event tech • Full‑stack • Data</span>
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
                <span>Education &amp; SIWES work</span>
              </div>
              <span className="hero-card-status hero-card-status--soft">
                School systems
              </span>
            </div>
            <p className="hero-card-title">Real school infrastructure.</p>
            <p className="hero-card-body">
              3‑month SIWES internship and demo school portals built with SQL
              authentication, multi‑role access, and student‑first pages.
            </p>
            <div className="hero-card-footer">
              <span>Education • Web platforms</span>
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
              High‑volume lyric curation, Hausa Insights framework, and
              catalog‑quality work powering Apple Music, Spotify, and global
              streaming.
            </p>
            <div className="hero-card-footer hero-card-footer--row">
              <span>Quality control</span>
              <span>Multilingual data</span>
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
          <div className="home-panel-header home-panel-header--tech">
            <Cpu size={18} />
            <h2 className="home-panel-title">Technical focus</h2>
          </div>
          <p className="home-panel-body">
            Mukhtar works beyond tutorials, shipping production‑ready products
            with auth, dashboards, portals, and clean interfaces optimized for
            real users.
          </p>
          <div className="skills-grid">
            <div className="skill-pill">
              <span className="skill-label">Frontend</span>
              <span className="skill-value">
                HTML, CSS, JavaScript, React
              </span>
            </div>
            <div className="skill-pill">
              <span className="skill-label">Backend</span>
              <span className="skill-value">PHP, Python, REST APIs</span>
            </div>
            <div className="skill-pill">
              <span className="skill-label">Database</span>
              <span className="skill-value">
                SQL authentication &amp; integration
              </span>
            </div>
            <div className="skill-pill">
              <span className="skill-label">AI workflow</span>
              <span className="skill-value">
                Prompt engineering, AI‑assisted dev, creative tooling
              </span>
            </div>
            <div className="skill-pill">
              <span className="skill-label">Tools</span>
              <span className="skill-value">
                Git, Office, slides &amp; documentation
              </span>
            </div>
            <div className="skill-pill">
              <span className="skill-label">Other</span>
              <span className="skill-value">
                Transcription &amp; lyrics metadata curation
              </span>
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
            <h2 className="home-panel-title">Highlights &amp; impact</h2>
          </div>
          <ul className="home-list">
            <li>
              Founder mindset: building Rijxa from zero to a full event platform
              with admin and organizer dashboards.
            </li>
            <li>
              Proven internship and community work through SIWES projects and
              NACOS technical support at UMYU.
            </li>
            <li>
              Certified in Python, project management, sustainable tech, and
              Generative AI, aligning engineering with business outcomes.
            </li>
            <li>
              2+ years as Musixmatch Specialist, including Hausa Insights
              guidance that improves Hausa lyric quality globally.
            </li>
            <li>
              Active in ecosystem events like Founders Friday, supporting
              registration flows and high‑volume attendee onboarding.
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
