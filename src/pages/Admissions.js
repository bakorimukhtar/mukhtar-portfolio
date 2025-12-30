import React from "react";
import "./Admissions.css";
import { motion } from "framer-motion";
import {
  BookOpen,
  School,
  ArrowRight,
  FileText,
  UserPlus,
  HelpCircle,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.3, once: true },
  transition: { duration: 0.6, delay },
});

const Admissions = () => {
  return (
    <motion.div
      className="admissions-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* HERO / INTRO */}
      <section className="admissions-hero">
        <motion.div
          className="admissions-hero-inner"
          {...fadeInUp(0)}
        >
          <span className="admissions-pill">Admissions at Afkar</span>
          <h1>Begin your child&apos;s journey of knowledge and faith.</h1>
          <p>
            Afkar Schools welcomes families who desire solid academics,
            disciplined character formation and a faith‑driven learning
            environment in Katsina.
          </p>
          <div className="admissions-badges">
            <span>Nursery • Primary • Secondary</span>
            <span>Faith‑driven &amp; value‑based</span>
            <span>Day school community</span>
          </div>
          <div className="admissions-hero-note">
            <HelpCircle size={18} />
            <span>
              Online application is currently under development. All
              applications are completed in person at the school campus.
            </span>
          </div>
        </motion.div>
      </section>

      {/* HIGH LEVEL PROCESS STRIP */}
      <section className="admissions-overview">
        <motion.div className="admissions-overview-inner" {...fadeInUp(0.1)}>
          <div className="step-chip">
            <span className="step-number">1</span>
            <div>
              <h3>Visit campus</h3>
              <p>Meet our admissions team and obtain the relevant form.</p>
            </div>
          </div>
          <div className="step-divider" />
          <div className="step-chip">
            <span className="step-number">2</span>
            <div>
              <h3>Submit documents</h3>
              <p>Provide previous records and required identification.</p>
            </div>
          </div>
          <div className="step-divider" />
          <div className="step-chip">
            <span className="step-number">3</span>
            <div>
              <h3>Assessment &amp; decision</h3>
              <p>
                Where applicable, sit for entrance exam and receive
                admission decision.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ADMISSION PATHS */}
      <section className="admissions-paths">
        <div className="admissions-section-header">
          <motion.h2 {...fadeInUp(0)}>Admission pathways</motion.h2>
          <motion.p {...fadeInUp(0.05)}>
            Choose the pathway that best describes your child&apos;s entry
            into Afkar Schools. Requirements vary slightly depending on whether
            they are beginning from Nursery, transferring, or joining JSS1/SS1.
          </motion.p>
        </div>

        <div className="admissions-grid">
          {/* Nursery start */}
          <motion.article
            className="admission-card"
            {...fadeInUp(0.1)}
          >
            <div className="admission-card-header">
              <div className="admission-icon primary">
                <School size={26} />
              </div>
              <span className="admission-tag">Early years</span>
            </div>
            <h3>New pupils – Nursery entry</h3>
            <p className="admission-summary">
              For children beginning their schooling journey with Afkar in the
              Nursery classes.
            </p>
            <div className="admission-timeline">
              <div className="timeline-item">
                <div className="timeline-bullet" />
                <div className="timeline-body">
                  <h4>Step 1 – Visit the school</h4>
                  <p>
                    Come to Afkar Schools on Umaru Musa Yar&apos;adua Way,
                    Modoji, Katsina. Request to see the admissions office.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-bullet" />
                <div className="timeline-body">
                  <h4>Step 2 – Purchase application form</h4>
                  <p>
                    Obtain and pay for the Afkar Nursery admission form at the
                    school office.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-bullet" />
                <div className="timeline-body">
                  <h4>Step 3 – Complete documentation</h4>
                  <p>
                    Fill in the form and attach all requested documents such as
                    birth certificate and passport photographs.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-bullet" />
                <div className="timeline-body">
                  <h4>Step 4 – Submit &amp; confirm</h4>
                  <p>
                    Submit the completed pack to the admissions office and wait
                    for confirmation on placement and resumption.
                  </p>
                </div>
              </div>
            </div>
            <div className="admission-footer">
              <FileText size={16} />
              <span>Forms are presently available only at the school office.</span>
            </div>
          </motion.article>

          {/* Transfer students */}
          <motion.article
            className="admission-card"
            {...fadeInUp(0.15)}
          >
            <div className="admission-card-header">
              <div className="admission-icon">
                <UserPlus size={26} />
              </div>
              <span className="admission-tag neutral">Transfer</span>
            </div>
            <h3>Students on transfer</h3>
            <p className="admission-summary">
              For pupils or students moving from another school into Afkar at
              any level (Nursery, Primary or Secondary).
            </p>
            <div className="admission-checklist">
              <div className="check-item">
                <CheckCircle2 size={18} />
                <span>Purchase Afkar transfer admission form at the school.</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} />
                <span>
                  Provide past school records – recent result slips, transfer
                  letter/testimonial and any available academic reports.
                </span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} />
                <span>
                  Attach required identification documents (birth certificate,
                  photographs, etc.).
                </span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} />
                <span>
                  Submit to the admissions office for review; a brief academic
                  assessment or interview may be scheduled where needed.
                </span>
              </div>
            </div>
            <div className="admission-footer">
              <ClipboardList size={16} />
              <span>
                Complete records help us place your child at the right class
                level.
              </span>
            </div>
          </motion.article>

          {/* JSS1 / SS1 */}
          <motion.article
            className="admission-card"
            {...fadeInUp(0.2)}
          >
            <div className="admission-card-header">
              <div className="admission-icon">
                <BookOpen size={26} />
              </div>
              <span className="admission-tag accent">Entrance exam</span>
            </div>
            <h3>Admission into JSS1 or SS1</h3>
            <p className="admission-summary">
              For students seeking fresh admission into Junior Secondary 1
              (JSS1) or Senior Secondary 1 (SS1).
            </p>
            <div className="admission-timeline">
              <div className="timeline-item">
                <div className="timeline-bullet" />
                <div className="timeline-body">
                  <h4>Step 1 – Obtain entrance form</h4>
                  <p>
                    Visit the school to purchase the JSS1/SS1 admission and
                    entrance examination form.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-bullet" />
                <div className="timeline-body">
                  <h4>Step 2 – Submit with records</h4>
                  <p>
                    Fill the form and submit it together with recent academic
                    results and supporting documents.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-bullet" />
                <div className="timeline-body">
                  <h4>Step 3 – Write entrance examination</h4>
                  <p>
                    Sit for the entrance exam on the date communicated by the
                    school. Candidates may also be invited for an interview.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-bullet" />
                <div className="timeline-body">
                  <h4>Step 4 – Admission offer</h4>
                  <p>
                    Successful candidates receive an admission letter and
                    details on fees, uniforms and resumption.
                  </p>
                </div>
              </div>
            </div>
            <div className="admission-footer">
              <FileText size={16} />
              <span>
                Entrance exams ensure each learner is placed where they can
                thrive.
              </span>
            </div>
          </motion.article>
        </div>
      </section>

      {/* FAQ / CONTACT STRIP */}
      <section className="admissions-cta">
        <div className="admissions-cta-inner">
          <div className="admissions-cta-text">
            <h2>Need clarity on fees, age brackets or start dates?</h2>
            <p>
              Our admissions office is available during school hours to answer
              questions and walk you through the process step by step.
            </p>
          </div>
          <div className="admissions-cta-actions">
            <Link to="/contact">
              <button className="btn-primary admissions-cta-btn">
                Contact admissions
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Admissions;
