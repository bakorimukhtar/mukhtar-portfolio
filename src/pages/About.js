import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import directorPhoto from "../assets/School Director.JPG";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import {
  Users,
  BookOpen,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// Counter for stats
const Counter = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
};

const About = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Afkar impact stats (you can tune numbers later)
  const statsData = [
    {
      icon: <Users size={32} />,
      value: 800,
      suffix: "+",
      label: "Students nurtured",
    },
    {
      icon: <GraduationCap size={32} />,
      value: 10,
      suffix: "+",
      label: "Years of learning",
    },
    {
      icon: <BookOpen size={32} />,
      value: 3,
      suffix: "",
      label: "School levels (Nursery • Primary • Secondary)",
    },
  ];

  // Leadership cards with names and photos
  const leadership = [
    {
      name: "Muntari Abdullahi Maimaje",
      role: "School Director",
      bio: "Provides overall leadership and strategic direction, ensuring Afkar Schools remains focused on nurturing ideas, character and faith in every learner.",
      email: "director@afkar.edu.ng",
      photo: directorPhoto,
    },
    {
      name: "Muhammad Maimaje",
      role: "School Registrar",
      bio: "Oversees admissions and student records, guiding families through enrolment and safeguarding accurate academic documentation across all sections.",
      email: "registrar@afkar.edu.ng",
      photo:
        "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const faqs = [
    {
      question: "What does the name “Afkar” mean?",
      answer:
        "“Afkar” means ideas and thoughts. At Afkar Schools we aim to develop students who can think deeply, solve problems and express their ideas with confidence.",
    },
    {
      question: "Which classes does Afkar Schools offer?",
      answer:
        "We currently run Nursery, Primary and Secondary sections, providing a continuous learning journey from early years up to senior secondary school.",
    },
    {
      question: "How does the school integrate faith and learning?",
      answer:
        "Faith and values are woven into daily routines, classroom culture and co‑curricular activities, helping students grow in discipline, respect and spiritual awareness alongside academics.",
    },
    {
      question: "How can parents start the admission process?",
      answer:
        "Parents can begin via the Admissions page or visit the school on Umaru Musa Yar’adua Way, Modoji, Katsina. Our team is available to guide you through each step.",
    },
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HEADER / HERO */}
      <section className="about-header-section">
        <div className="about-header-content">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Afkar Schools
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Afkar Schools is a Nursery, Primary and Secondary institution in
            Katsina, dedicated to nurturing ideas, strong character and faith in
            every learner.
          </motion.p>
        </div>
        <div className="about-hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
            alt="Students learning in class"
            className="about-hero-img"
          />
        </div>
      </section>

      {/* STORY & VISION */}
      <section className="story-section">
        <div className="story-grid">
          <div className="story-text">
            <span className="section-pill">Who we are</span>
            <h2>An institution for human development.</h2>
            <p>
              Afkar Schools was established to give children a solid foundation
              in thinking, learning and living with purpose. Classrooms are
              designed as safe spaces where students ask questions, explore
              ideas and build habits that shape a successful life.
            </p>
            <p>
              By combining strong academics with faith‑based values, learners
              grow intellectually, morally and socially, preparing them to
              contribute positively to their communities.
            </p>
          </div>
          <div className="vision-cards">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To raise confident, thoughtful and responsible young people who
                excel in knowledge and live out their faith wherever they go.
              </p>
            </div>
            <div className="vision-card dark">
              <h3>Our Mission</h3>
              <p>
                To provide a supportive learning environment where every child
                is challenged to think, discover and grow through quality
                teaching, discipline and guided faith practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT / STATS */}
      <section className="impact-section">
        <div className="impact-content">
          <h2>Our impact in Katsina.</h2>
          <p className="impact-desc">
            Through small classroom communities, dedicated teachers and a
            culture of discipline, Afkar Schools has become a trusted home for
            families seeking balanced, faith‑driven education.
          </p>

          <div className="impact-stats-grid">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="impact-stat-item"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="impact-icon-circle">{stat.icon}</div>
                <h3>
                  <Counter from={0} to={stat.value} duration={2.5} />
                  <span>{stat.suffix}</span>
                </h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="team-section">
        <div className="team-header">
          <h2>School leadership</h2>
          <p>
            A focused team providing academic, administrative and spiritual
            guidance for the Afkar community.
          </p>
        </div>

        <div className="team-grid team-grid-2">
          {leadership.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-photo-wrapper">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo"
                />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
                <div className="team-contact">
                  <a href={`mailto:${member.email}`}>
                    <Mail size={18} />
                    Email {member.role.toLowerCase()}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Questions about Afkar?</h2>
            <p>Find quick answers or reach out to the school team.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaqIndex === index ? "open" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  {openFaqIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="faq-footer">
            <p>Still need more details?</p>
            <Link to="/contact" className="faq-cta-link">
              Contact the school <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
