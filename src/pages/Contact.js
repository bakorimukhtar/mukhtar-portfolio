import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, X } from "lucide-react";
import "./Contact.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.08, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function Contact() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalError, setModalError] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setModalError("");

    try {
      const res = await fetch("https://formspree.io/f/xbdjnraj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setLoading(false);
      setModalOpen(true);
      setFormValues({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setLoading(false);
      setModalError(
        "Something went wrong. Please try again or email directly."
      );
      setModalOpen(true);
    }
  };

  return (
    <div className="contact-page">
      {/* Background splashes + grid */}
      <div className="contact-blob contact-blob--one" />
      <div className="contact-blob contact-blob--two" />
      <div className="contact-blob contact-blob--three" />
      <div className="contact-grid-overlay" />

      {/* MODAL */}
      {modalOpen && (
        <div className="contact-modal-backdrop">
          <motion.div
            className="contact-modal"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              className="contact-modal-close"
              onClick={() => setModalOpen(false)}
              type="button"
            >
              <X size={16} />
            </button>
            {modalError ? (
              <>
                <h2>Something went wrong</h2>
                <p>{modalError}</p>
                <p>
                  You can also reach Mukhtar directly at{" "}
                  <a href="mailto:muntari.audullahi@outlook.com">
                    muntari.audullahi@outlook.com
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <h2>Message received</h2>
                <p>
                  Mukhtar has received your message and will be in touch as soon
                  as possible.
                </p>
                <p>
                </p>
              </>
            )}
          </motion.div>
        </div>
      )}

      <motion.section
        className="contact-hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT SIDE */}
        <motion.div className="contact-copy" variants={item}>
          <p className="eyebrow">Contact</p>

          <h1 className="contact-title">
            Let&apos;s ship{" "}
            <span className="contact-rotating-wrap">
              <span className="contact-rotating-static">your next&nbsp;</span>
              <span className="contact-rotating-words">
                <span>release</span>
                <span>product</span>
                <span>project</span>
                <span>app</span>
              </span>
            </span>
          </h1>

          <p className="contact-subtitle">
            Share a brief, a link, or just an idea. Mukhtar works best where
            there&apos;s a real problem to solve: events, education systems, or
            new products.
          </p>

          <div className="contact-highlight-row">
            <div className="contact-highlight">
              <span className="contact-pulse-dot" />
              <span>Open for selective projects &amp; roles.</span>
            </div>
            <span className="contact-highlight-note">
              Replies usually within 24 hours.
            </span>
          </div>

          <div className="contact-details">
            <div className="contact-detail-item">
              <Mail size={16} />
              <a href="mailto:muntari.audullahi@outlook.com">
                muntari.audullahi@outlook.com
              </a>
            </div>
            <div className="contact-detail-item">
              <Phone size={16} />
              <a href="tel:+2347026842722">+234 702 684 2722</a>
            </div>
            <div className="contact-detail-item">
              <MapPin size={16} />
              <span>Katsina, Nigeria</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.div
          className="contact-form-shell"
          variants={item}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="contact-form-orbit contact-form-orbit--one" />
          <div className="contact-form-orbit contact-form-orbit--two" />
          <div className="contact-form-orbit contact-form-orbit--three" />

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-header">
                <span>Start with a short note</span>
                <p>
                  A few sentences about the problem, timeline, and how to reach
                  you is enough to begin.
                </p>
              </div>

              <div className="field-grid">
                <div className="field-group">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="subject">What are you thinking about?</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Event platform, school system, internship, or something else"
                  value={formValues.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share context, goals, and any useful links."
                  value={formValues.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="contact-submit"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
              >
                <Send size={16} />
                <span>{loading ? "Sending..." : "Send message"}</span>
              </motion.button>

              <p className="contact-footnote">
                Prefer email? Reach out directly at{" "}
                <a href="mailto:muntari.audullahi@outlook.com">
                  muntari.audullahi@outlook.com
                </a>
                .
              </p>
            </form>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Contact;
