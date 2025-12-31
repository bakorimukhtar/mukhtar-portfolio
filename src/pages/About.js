import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Code2, Sparkles } from "lucide-react";
import "./About.css";
import bakoriPhoto from "../assets/Bakori.png";

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

function About() {
  return (
    <div className="about-page">
      <motion.section
        className="about-hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT: PHOTO */}
        <motion.div className="about-photo-wrap" variants={item}>
          <div className="about-photo-card">
            <img
              src={bakoriPhoto}
              alt="Mukhtar Abdullahi portrait"
              className="about-photo"
            />
            <div className="about-photo-glow" />
          </div>
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div className="about-content" variants={item}>
          <p className="eyebrow">About Mukhtar</p>
          <h1 className="about-title">
            Developer, founder, and{" "}
            <span className="about-title-gradient">
              product‑driven problem solver.
            </span>
          </h1>
          <p className="about-lead">
            Mukhtar Abdullahi is a Computer Science student and full‑stack
            developer from Katsina, Nigeria, building event and mobility
            platforms like Rijxa and YAWO while staying active in the developer
            community.
          </p>

          <div className="about-meta">
            <div className="about-meta-item">
              <MapPin size={14} />
              <span>Katsina, Nigeria</span>
            </div>
            <div className="about-meta-item">
              <Code2 size={14} />
              <span>Frontend &amp; full‑stack development</span>
            </div>
            <div className="about-meta-item">
              <Sparkles size={14} />
              <span>Event tech • Mobility • Education platforms</span>
            </div>
          </div>

          <div className="about-body">
            <p>
              As Founder &amp; CTO of Rijxa, Mukhtar leads product and
              engineering for an event management platform that supports
              ticketing, QR badges, real‑time check‑ins, and analytics for
              organizers across Africa.
            </p>
            <p>
              Alongside Rijxa, he is designing YAWO, a Northern
              Nigeria‑focused super‑app for transport, delivery, meals,
              accommodation, and logistics, built around local context, low
              bandwidth, and long‑term electric mobility.
            </p>
            <p>
              His background includes a SIWES internship building school
              information system access layers, lyric specialization at
              Musixmatch, and campus leadership as Technical Assistant of NACOS
              UMYU Chapter, giving him a mix of product, systems, and community
              experience.
            </p>
          </div>

          <div className="about-cta-row">
            <a href="mailto:muntari.audullahi@outlook.com" className="about-cta">
              Let’s work together
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* SECOND ROW: QUICK FACTS */}
      <section className="about-grid">
        <div className="about-card">
          <h2 className="about-card-title">What Mukhtar enjoys building</h2>
          <ul className="about-list">
            <li>Platforms that start from a real user problem, not just a tutorial.</li>
            <li>Systems with clear auth, portals, and dashboards for non‑technical users.</li>
            <li>Interfaces that feel modern, fast, and trustworthy on low‑end devices.</li>
          </ul>
        </div>

        <div className="about-card">
          <h2 className="about-card-title">How he works</h2>
          <ul className="about-list">
            <li>Moves from quick sketches to working prototypes fast.</li>
            <li>Documents flows clearly so teams and stakeholders can follow.</li>
            <li>Uses data and feedback from real usage to decide the next iteration.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
