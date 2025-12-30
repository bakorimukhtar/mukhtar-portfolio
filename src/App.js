// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  MapPin,
  Phone,
  FileText,
  Users,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

// --- IMPORT PAGES ---
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Contact from "./pages/Contact";
import StudentPortal from "./pages/StudentPortal";
import ComingSoon from "./pages/ComingSoon";

// --- IMPORT COMPONENTS ---
import Chatbot from "./components/Chatbot";

// --- ASSET IMPORTS ---
import logo from "./assets/Main Logo.png";

function App() {
  const [isAcademicsOpen, setAcademicsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleAcademics = () => {
    setAcademicsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setAcademicsOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setAcademicsOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-area">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Afkar Schools" className="logo-img" />
          </Link>
          <div className="logo-text">
            <span className="logo-title">Afkar Schools</span>
            <span className="logo-subtitle">Knowledge and Faith</span>
            <span className="logo-rc">Nursery • Primary • Secondary</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="nav-center">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          <Link to="/admissions" className="nav-link">
            Admissions
          </Link>

          <div style={{ position: "relative" }}>
            <button
              className={`nav-link ${isAcademicsOpen ? "active" : ""}`}
              onClick={toggleAcademics}
            >
              Academics{" "}
              <ChevronDown
                size={16}
                style={{
                  transform: isAcademicsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.2s",
                }}
              />
            </button>
            <AnimatePresence>
              {isAcademicsOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                >
                  <Link
                    to="/academics#nursery"
                    className="dropdown-item"
                    onClick={() => setAcademicsOpen(false)}
                  >
                    Nursery School
                  </Link>
                  <Link
                    to="/academics#primary"
                    className="dropdown-item"
                    onClick={() => setAcademicsOpen(false)}
                  >
                    Primary School
                  </Link>
                  <Link
                    to="/academics#secondary"
                    className="dropdown-item"
                    onClick={() => setAcademicsOpen(false)}
                  >
                    Secondary School
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className="nav-link">
            Contact
          </Link>

          <Link to="/student-portal" className="nav-link">
            Student Portal
          </Link>
        </div>

        {/* Right actions */}
        <div className="nav-actions">
          <button className="nav-link lang-pill">
            <Globe size={18} /> EN
          </button>
          <Link to="/admissions">
            <button className="btn-primary">Apply for Admission</button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <Link to="/" className="mobile-link" onClick={closeMenu}>
                Home
              </Link>

              <Link
                to="/about"
                className="mobile-link"
                onClick={closeMenu}
              >
                About
              </Link>

              <Link
                to="/admissions"
                className="mobile-link"
                onClick={closeMenu}
              >
                Admissions
              </Link>

              <button
                className="mobile-link"
                onClick={toggleAcademics}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                Academics
                <ChevronDown
                  size={18}
                  style={{
                    transform: isAcademicsOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.2s",
                  }}
                />
              </button>

              <AnimatePresence>
                {isAcademicsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Link
                      to="/academics#nursery"
                      className="mobile-sub-link"
                      onClick={closeMenu}
                    >
                      Nursery School
                    </Link>
                    <Link
                      to="/academics#primary"
                      className="mobile-sub-link"
                      onClick={closeMenu}
                    >
                      Primary School
                    </Link>
                    <Link
                      to="/academics#secondary"
                      className="mobile-sub-link"
                      onClick={closeMenu}
                    >
                      Secondary School
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/contact"
                className="mobile-link"
                onClick={closeMenu}
              >
                Contact
              </Link>

              <Link
                to="/student-portal"
                className="mobile-link"
                onClick={closeMenu}
              >
                Student Portal
              </Link>

              <Link to="/admissions" onClick={closeMenu} style={{ width: "100%" }}>
                <button className="btn-primary mobile-cta-btn">
                  Apply for Admission
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ROUTES */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="logo-area-footer">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src={logo}
                  alt="Afkar Schools"
                  className="logo-img footer-logo-img"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
              <span>Inspiring excellence in knowledge and faith.</span>
            </div>
            <div className="newsletter-box">
              <p>Stay informed about admissions and school news.</p>
              <div className="input-group">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-grid">
            <div className="footer-col">
              <h4>School</h4>
              <Link to="/about">About Afkar Schools</Link>
              <Link to="/admissions">Admissions</Link>
              <Link to="/academics">Academics</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/coming-soon">News & Events</Link>
              <Link to="/coming-soon">Calendar</Link>
              <Link to="/coming-soon">Careers</Link>
              <Link to="/student-portal">Student Portal</Link>
            </div>
            <div className="footer-col footer-col-contact">
              <h4>Contact</h4>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>
                  UMARU MUSA YAR&apos;ADUA WAY, Adjacent New Government House,
                  Modoji, Katsina, Katsina State, Nigeria.
                </span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:+2348012345678">+234 801 234 5678</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:contact@afkar.edu.ng">contact@afkar.edu.ng</a>
              </div>
            </div>
            <div className="footer-col footer-col-affiliate">
              <h4>Community</h4>
              <div className="footer-contact-item">
                <Users size={14} />
                <span>Parents, students, and alumni network.</span>
              </div>
              <div className="social-icons">
                <a
                  href="https://web.facebook.com/afkarschool/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="FaceBook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://x.com/afkarschools"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://www.instagram.com/afkarschools/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Afkar Schools. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING CHATBOT */}
      <Chatbot />
    </div>
  );
}

export default App;
