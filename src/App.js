// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
} from "lucide-react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

// Components
import Chatbot from "./components/Chatbot";

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    // Do not force scroll if the URL has a hash (e.g. #section)
    if (window.location.hash) return;
  
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  
    setMobileMenuOpen(false);
  
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);
  

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Notes" },
    { to: "/contact", label: "Contact" },
  ];

  const pageTransition = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -18 },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/" className="logo-area" onClick={closeMenu}>
          <div className="logo-mark">
            <span className="logo-initial">M</span>
          </div>
          <div className="logo-text">
            <span className="logo-title">Mukhtar Abdullahi</span>
            <span className="logo-subtitle">
              Founder &amp; CTO — Rijxa • Full‑Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="nav-center">
          {navLinks.map((item) => (
            <NavLinkItem key={item.to} to={item.to} label={item.label} />
          ))}
        </div>

        {/* Right actions */}
        <div className="nav-actions">
          <button className="nav-link lang-pill" type="button">
            <Globe size={16} />
            EN
          </button>
          <Link to="/projects">
            <button className="btn-primary" type="button">
              <Sparkles size={16} />
              View work
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          type="button"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="mobile-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/resume" onClick={closeMenu} style={{ width: "100%" }}>
                <button className="btn-primary mobile-cta-btn" type="button">
                  Download CV
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ROUTES WITH PAGE TRANSITIONS */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="logo-area-footer">
              <span className="footer-name">Mukhtar Abdullahi</span>
              <span>
                Computer Science student and full‑stack developer, building
                African‑focused event, education, and AI‑assisted platforms.
              </span>
            </div>
            <div className="newsletter-box">
              <p>Open to software roles, internships, and product collaborations.</p>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your best email for opportunities"
                />
                <button type="button">Notify me</button>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-grid">
            <div className="footer-col">
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/resume">Resume</Link>
            </div>

            <div className="footer-col footer-col-contact">
              <h4>Contact</h4>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>Katsina, Nigeria</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} />
                <a href="tel:+2347026842722">+234 702 684 2722</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <a href="mailto:muntari.audullahi@outlook.com">
                  muntari.audullahi@outlook.com
                </a>
              </div>
            </div>

            <div className="footer-col footer-col-contact">
              <h4>Profiles</h4>
              <div className="footer-contact-item">
                <Github size={16} />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="footer-contact-item">
                <Linkedin size={16} />
                <a
                  href="https://www.linkedin.com/in/bakorimukhtar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="footer-contact-item">
                <Twitter size={16} />
                <a href="https://x.com" target="_blank" rel="noreferrer">
                  X (Twitter)
                </a>
              </div>
            </div>

            <div className="footer-col footer-col-affiliate">
              <h4>Focus areas</h4>
              <div className="footer-contact-item">
                <span>Event technology (Rijxa)</span>
              </div>
              <div className="footer-contact-item">
                <span>School &amp; education platforms</span>
              </div>
              <div className="footer-contact-item">
                <span>AI‑assisted products &amp; workflows</span>
              </div>
              <div className="footer-contact-item">
                <span>Lyrics &amp; metadata systems (Musixmatch)</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Mukhtar Abdullahi. Built as a
              living portfolio and learning log.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING CHATBOT */}
      <Chatbot />
    </div>
  );
}

function NavLinkItem({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? "active" : ""}`}>
      {label}
    </Link>
  );
}

export default App;
