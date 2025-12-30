import React, { useState } from "react";
import "./Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, X, HelpCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    childName: "",
    purpose: "admissions",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Afkar contact form submitted:", formData);
      setIsSubmitting(false);
      setShowModal(true);
      // optional reset:
      // setFormData({ fullName: "", email: "", phone: "", childName: "", purpose: "admissions", message: "" });
    }, 1200);
  };

  const closeModal = () => setShowModal(false);

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HEADER */}
      <header className="contact-header">
        <h1>Contact Afkar Schools</h1>
        <p>
          Reach out to ask about admissions, academics, fees or any other
          questions about our Nursery, Primary and Secondary schools.
        </p>
      </header>

      <div className="contact-container">
        {/* LEFT: SCHOOL DETAILS */}
        <section className="contact-info-box">
          <h3>School contact details</h3>
          <p className="info-desc">
            Our office is open during school hours on weekdays. You can call,
            send an email, or visit the campus in person.
          </p>

          <div className="info-item">
            <div className="icon-box">
              <Mail size={20} />
            </div>
            <div>
              <span className="info-label">General enquiries</span>
              <span>contact@afkar.edu.ng</span>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <Mail size={20} />
            </div>
            <div>
              <span className="info-label">Admissions</span>
              <span>admission@afkar.edu.ng</span>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <Phone size={20} />
            </div>
            <div>
              <span className="info-label">Phone</span>
              <span>+234 801 234 5678</span>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <MapPin size={20} />
            </div>
            <div>
              <span className="info-label">Address</span>
              <span>
                UMARU MUSA YAR&apos;ADUA WAY, Adjacent New Government House,
                Modoji, Katsina, Katsina State, Nigeria.
              </span>
            </div>
          </div>

          <div className="info-note">
            <HelpCircle size={18} />
            <span>
              For admission forms and entrance examinations, please visit the
              school campus.
            </span>
          </div>
        </section>

        {/* RIGHT: FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mobile number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+234..."
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Child&apos;s name (optional)</label>
            <input
              type="text"
              name="childName"
              placeholder="Enter your child’s name"
              value={formData.childName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group radio-group">
            <label>I&apos;m contacting the school about:</label>
            <div className="radio-options">
              <label
                className={`radio-btn ${
                  formData.purpose === "admissions" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value="admissions"
                  checked={formData.purpose === "admissions"}
                  onChange={handleChange}
                />
                Admissions / enrolment
              </label>
              <label
                className={`radio-btn ${
                  formData.purpose === "academics" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value="academics"
                  checked={formData.purpose === "academics"}
                  onChange={handleChange}
                />
                Academics / results
              </label>
              <label
                className={`radio-btn ${
                  formData.purpose === "other" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value="other"
                  checked={formData.purpose === "other"}
                  onChange={handleChange}
                />
                Other enquiries
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us how we can help you."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.86, opacity: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 260 }}
            >
              <button className="close-modal-btn" onClick={closeModal}>
                <X size={20} />
              </button>
              <div className="modal-icon">
                <CheckCircle size={48} />
              </div>
              <h2>Message received</h2>
              <p>
                Thank you for contacting Afkar Schools. A member of our team
                will respond as soon as possible during office hours.
              </p>
              <button className="modal-action-btn" onClick={closeModal}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
