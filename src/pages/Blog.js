import React, { useEffect } from "react";
import "./ComingSoon.css";
import { motion } from "framer-motion";
import { Hammer, ArrowLeft, Rocket, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Coming Soon | Mukhtar Abdullahi";
  }, []);

  return (
    <div className="coming-soon-page">
      {/* Background effects */}
      <div className="cs-grid-overlay" />
      <div className="cs-blob cs-blob--one" />
      <div className="cs-blob cs-blob--two" />
      <div className="cs-blob cs-blob--three" />

      <motion.div
        className="coming-soon-shell"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.div
          className="coming-soon-card"
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="cs-icon-stack">
            <motion.div
              animate={{ rotate: [0, -8, 8, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
              className="cs-icon-main"
            >
              <Hammer size={48} />
            </motion.div>

            <motion.div
              initial={{ x: -16, y: 16, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.45 }}
              className="cs-icon-floating"
            >
              <Rocket size={26} />
            </motion.div>

            <motion.div
              initial={{ x: 16, y: -10, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.45 }}
              className="cs-icon-floating cs-icon-floating--secondary"
            >
              <Clock size={22} />
            </motion.div>
          </div>

          <h1 className="cs-title">This page is in progress</h1>
          <p className="cs-subtitle">
            A new section of Mukhtar’s portfolio is being built — expect polished
            case studies, live previews, and more behind‑the‑scenes details soon.
          </p>

          <div className="cs-meta-row">
            <span className="cs-pill">Mukhtar Abdullahi • Portfolio</span>
            <span className="cs-pill cs-pill--outline">
              New experience coming soon
            </span>
          </div>

          <Link to="/" className="cs-back-link">
            <button className="cs-back-btn" type="button">
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
