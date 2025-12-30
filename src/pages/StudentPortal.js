import React from "react";
import "./StudentPortal.css";
import { motion } from "framer-motion";
import { ArrowRight, Lock, FileText, CreditCard, Megaphone } from "lucide-react";

const StudentPortal = () => {
  const PORTAL_URL = "https://portal.afkar.edu.ng"; // replace with real login URL

  return (
    <motion.div
      className="portal-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}
      <section className="portal-hero">
        <div className="portal-hero-inner">
          <span className="portal-pill">Student & Parent Portal</span>
          <h1>Secure access to results, fees and school updates.</h1>
          <p>
            The Afkar Schools portal gives students, parents and guardians a
            central place to view academic results, monitor school fees and stay
            informed about important announcements.
          </p>

          <div className="portal-hero-cta">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="portal-login-btn"
            >
              <Lock size={20} />
              Go to portal login
              <ArrowRight size={18} />
            </a>
            <span className="portal-hero-note">
              Use the login credentials provided by the school to sign in.
            </span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="portal-features">
        <div className="portal-features-inner">
          <div className="portal-features-header">
            <h2>What you can do on the portal.</h2>
            <p>
              Once logged in, each student or parent sees information that is
              specific to their child&apos;s class and academic record.
            </p>
          </div>

          <div className="portal-grid">
            <div className="portal-card">
              <div className="portal-icon">
                <FileText size={24} />
              </div>
              <h3>View results</h3>
              <p>
                Access termly and session results, continuous assessment scores
                and performance history for each child.
              </p>
            </div>

            <div className="portal-card">
              <div className="portal-icon">
                <CreditCard size={24} />
              </div>
              <h3>Track school fees</h3>
              <p>
                See fee breakdowns, payment status and upcoming bills so you can
                plan and avoid missing deadlines.
              </p>
            </div>

            <div className="portal-card">
              <div className="portal-icon">
                <Megaphone size={24} />
              </div>
              <h3>Receive announcements</h3>
              <p>
                Stay up to date with school notices, calendar changes and exam
                information in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO LOGIN */}
      <section className="portal-how">
        <div className="portal-how-inner">
          <div className="portal-how-text">
            <h2>How to log in.</h2>
            <ol className="portal-steps">
              <li>
                Click the <span className="step-highlight">“Go to portal login”</span>{" "}
                button above. This opens the Afkar Schools student portal in a new tab.
              </li>
              <li>
                Enter the username and password given to you by the school
                (students/parents/guardians each receive their own credentials).
              </li>
              <li>
                After logging in, navigate to the <strong>Results</strong>,{" "}
                <strong>Fees</strong> or <strong>Announcements</strong> sections to
                see your information.
              </li>
            </ol>
          </div>
          <div className="portal-how-card">
            <h3>Need help with your login?</h3>
            <p>
              If you have forgotten your credentials or cannot access the
              portal, please contact the school office so your details can be
              checked and reset where necessary.
            </p>
            <a href="/contact" className="portal-contact-link">
              Contact Afkar Schools
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default StudentPortal;
