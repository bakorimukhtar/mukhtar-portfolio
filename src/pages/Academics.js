import React, { useEffect, useRef } from "react";
import "./Academics.css";
import { motion } from "framer-motion";
import {
  Baby,
  PencilRuler,
  GraduationCap,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sectionFade = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.3, once: true },
  transition: { duration: 0.6, delay },
});

// Simple hook: scroll to #nursery / #primary / #secondary
const useScrollToHashSection = () => {
  const location = useLocation();
  const hasRunRef = useRef(false);

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    // small timeout so layout is ready
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el && !hasRunRef.current) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        hasRunRef.current = true;
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [location]);
};

const Academics = () => {
  useScrollToHashSection();

  return (
    <motion.div
      className="academics-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* HERO */}
      <section className="academics-hero">
        <motion.div className="academics-hero-inner" {...sectionFade(0)}>
          <span className="academics-pill">Academics</span>
          <h1>Structured learning from Nursery to Secondary.</h1>
          <p>
            Afkar Schools offers a continuous learning pathway in Katsina –
            nurturing curiosity in the early years, building strong literacy and
            numeracy in Primary, and preparing young people for life after
            Secondary school.
          </p>
          <div className="academics-hero-tags">
            <span>Nursery: Ages 3–5</span>
            <span>Primary: Basic 1–6</span>
            <span>Secondary: JSS1–SS3</span>
          </div>
        </motion.div>
      </section>

      {/* QUICK LINKS STRIP */}
      <section className="academics-strip">
        <div className="academics-strip-inner">
          <a href="#nursery" className="strip-link">
            Nursery School
          </a>
          <a href="#primary" className="strip-link">
            Primary School
          </a>
          <a href="#secondary" className="strip-link">
            Secondary School
          </a>
        </div>
      </section>

      {/* NURSERY SECTION */}
      <section id="nursery" className="academics-section">
        <motion.div className="academics-section-inner" {...sectionFade(0.05)}>
          <div className="academics-text">
            <div className="academics-chip">
              <Baby size={18} />
              Early Years (Nursery)
            </div>
            <h2>Nursery School – Building confidence through play.</h2>
            <p>
              The Nursery section introduces children to learning in a warm,
              structured and playful environment. Activities develop language,
              counting, fine motor skills and social behaviour, all rooted in
              the values of respect and faith.
            </p>
            <ul className="academics-list">
              <li>Small teacher–child ratios for close attention.</li>
              <li>
                Play‑based activities that build early literacy and numeracy.
              </li>
              <li>
                Daily routines that teach kindness, sharing and good manners.
              </li>
              <li>
                Safe, colourful classrooms designed for exploration and movement.
              </li>
            </ul>
            <div className="academics-actions">
              <Link to="/admissions">
                <button className="btn-primary academics-btn">
                  Apply to Nursery
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/contact" className="ghost-link">
                Ask a question about Nursery
              </Link>
            </div>
          </div>
          <div className="academics-card">
            <div className="academics-icon-circle">
              <Baby size={32} />
            </div>
            <h3>Focus areas</h3>
            <p className="academics-card-text">
              Foundational literacy, numeracy, social skills, and love for
              learning.
            </p>
            <div className="academics-meta">
              <div>
                <span className="meta-label">Approximate ages</span>
                <span className="meta-value">3 – 5 years</span>
              </div>
              <div>
                <span className="meta-label">Levels</span>
                <span className="meta-value">Nursery 1 • Nursery 2 • Nursery 3</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PRIMARY SECTION */}
      <section id="primary" className="academics-section alt">
        <motion.div className="academics-section-inner" {...sectionFade(0.05)}>
          <div className="academics-card">
            <div className="academics-icon-circle">
              <PencilRuler size={32} />
            </div>
            <h3>Focus areas</h3>
            <p className="academics-card-text">
              Strong reading and writing, numeracy, science thinking and
              responsible behaviour.
            </p>
            <div className="academics-meta">
              <div>
                <span className="meta-label">Approximate ages</span>
                <span className="meta-value">6 – 11 years</span>
              </div>
              <div>
                <span className="meta-label">Classes</span>
                <span className="meta-value">Primary 1 – Primary 5</span>
              </div>
            </div>
          </div>
          <div className="academics-text">
            <div className="academics-chip">
              <PencilRuler size={18} />
              Primary School
            </div>
            <h2>Primary School – Strengthening foundations.</h2>
            <p>
              The Primary section builds the core skills every child needs:
              literacy, numeracy, science, social studies and communication.
              Lessons are interactive, guided by clear discipline and faith‑
              based values.
            </p>
            <ul className="academics-list">
              <li>
                Curriculum aligned with national standards and best practices.
              </li>
              <li>
                Emphasis on reading culture, handwriting and problem‑solving.
              </li>
              <li>
                Regular assessments and feedback to parents on progress.
              </li>
              <li>
                Co‑curricular clubs that help children discover gifts and
                interests.
              </li>
            </ul>
            <div className="academics-actions">
              <Link to="/admissions">
                <button className="btn-primary academics-btn">
                  Apply to Primary
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/contact" className="ghost-link">
                Talk to the Primary team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECONDARY SECTION */}
      <section id="secondary" className="academics-section">
        <motion.div className="academics-section-inner" {...sectionFade(0.05)}>
          <div className="academics-text">
            <div className="academics-chip">
              <GraduationCap size={18} />
              Secondary School
            </div>
            <h2>
              Secondary School – Preparing young people for exams and life.
            </h2>
            <p>
              The Secondary section (JSS1–SS3) prepares learners for external
              examinations and real‑world responsibilities. Students grow in
              academic depth, discipline, leadership and faith.
            </p>
            <ul className="academics-list">
              <li>
                Broad curriculum across sciences, arts and commercial subjects.
              </li>
              <li>
                Structured preparation for internal assessments and external
                examinations.
              </li>
              <li>
                Guidance on study habits, career options and life skills.
              </li>
              <li>
                Opportunities for leadership, teamwork and service projects.
              </li>
            </ul>
            <div className="academics-actions">
              <Link to="/admissions">
                <button className="btn-primary academics-btn">
                  Apply to Secondary
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/contact" className="ghost-link">
                Ask about JSS/SS admissions
              </Link>
            </div>
          </div>
          <div className="academics-card">
            <div className="academics-icon-circle">
              <BookOpen size={32} />
            </div>
            <h3>Structure</h3>
            <p className="academics-card-text">
              Junior Secondary (JSS1–JSS3) and Senior Secondary (SS1–SS3),
              grounded in values and exam readiness.
            </p>
            <div className="academics-meta">
              <div>
                <span className="meta-label">Approximate ages</span>
                <span className="meta-value">11 – 17 years</span>
              </div>
              <div>
                <span className="meta-label">Entry classes</span>
                <span className="meta-value">JSS1 • SS1 (with entrance exam)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA STRIP */}
      <section className="academics-cta">
        <div className="academics-cta-inner">
          <div>
            <h2>Ready to place your child in the right school level?</h2>
            <p>
              Start the admission process online or visit the campus. Our team
              can guide you on age placement, class options and next steps.
            </p>
          </div>
          <div className="academics-cta-actions">
            <Link to="/admissions">
              <button className="btn-primary academics-cta-btn">
                View admissions
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/contact" className="academics-cta-outline">
              Contact academics office
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Academics;
