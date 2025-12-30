import React, { useEffect } from "react";
import "./ComingSoon.css";
import { motion } from "framer-motion";
import { Hammer, ArrowLeft, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Coming Soon | Afkar Schools";
  }, []);

  return (
    <div className="coming-soon-container">
      <motion.div
        className="coming-soon-card"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="icon-wrapper">
          <motion.div
            animate={{ rotate: [0, -8, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <Hammer size={56} color="#007f5f" />
          </motion.div>
          <motion.div
            initial={{ x: -18, y: 18, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="icon-rocket"
          >
            <Rocket size={30} color="#22c55e" />
          </motion.div>
        </div>

        <h1>Page coming soon</h1>
        <p>
          This section of the Afkar Schools website is currently being prepared.
          Please check back shortly for updated information and resources.
        </p>

        <Link to="/">
          <button className="back-home-btn">
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
