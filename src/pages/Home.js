import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PlayCircle,
  Users,
  ShieldCheck,
  MapPin,
  BookOpen,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

import heroLogo from "../assets/Main Logo.png";

// Sample hero/backgrounds – replace with real Afkar photos later
const sampleCampus =
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80";
const sampleClassroom =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80";
const sampleStudents =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80";

/* ---------- HOOKS ---------- */

// multi-word typewriter for headline
const useTypewriterWords = (words, typeSpeed = 120, deleteSpeed = 80, pause = 2000) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let speed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && display === currentWord) {
      speed = pause;
    }
    if (isDeleting && display === "") {
      speed = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && display === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && display === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else if (isDeleting) {
        setDisplay((prev) => prev.slice(0, prev.length - 1));
      } else {
        setDisplay(currentWord.slice(0, display.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [display, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return display;
};

// single-text typewriter
const useTypewriter = (text, speed = 35, inView = true) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (index >= text.length) return;

    const timer = setTimeout(() => setIndex((prev) => prev + 1), speed);
    return () => clearTimeout(timer);
  }, [index, text, speed, inView]);

  useEffect(() => {
    if (inView) setIndex(0);
  }, [inView]);

  return text.slice(0, index);
};

// count-up that restarts when inViewKey changes
const CountUp = ({ end, duration = 4000, inViewKey }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inViewKey) return;

    setValue(0);
    let frame = 0;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = (t) => t * (2 - t);

    const counter = setInterval(() => {
      frame += 1;
      const progress = easeOutQuad(frame / totalFrames);
      const current = Math.round(end * progress);
      setValue(current);
      if (frame === totalFrames) clearInterval(counter);
    }, frameDuration);

    return () => clearInterval(counter);
  }, [end, duration, inViewKey]);

  return <span>{value.toLocaleString()}</span>;
};

/* ---------- SMALL COMPONENTS ---------- */

const TestimonialCard = ({ item, inView }) => {
  const typedText = useTypewriter(item.text, 25, inView);

  return (
    <div className="le-test-card">
      <Quote className="le-test-quote-icon" size={26} />
      <p className="le-test-text">
        “{typedText}
        <span className="typing-cursor light">|</span>”
      </p>
      <div className="le-test-rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < item.rating ? "le-star filled" : "le-star empty"}
          />
        ))}
      </div>
      <div className="le-test-person">
        <span className="le-test-name">{item.name}</span>
        <span className="le-test-role">{item.role}</span>
      </div>
    </div>
  );
};

/* ---------- MAIN COMPONENT ---------- */

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const rotatingHeadlines = [
    "Curious Minds",
    "Strong Character",
    "Future Leaders",
    "Faith‑Driven Learners",
  ];

  const heroTyped = useTypewriterWords(rotatingHeadlines, 120, 80, 2200);

  const statsData = [
    {
      icon: <Users size={40} />,
      number: 800,
      suffix: "+",
      label: "Students nurtured",
    },
    {
      icon: <GraduationCap size={40} />,
      number: 10,
      suffix: "+",
      label: "Years of excellence",
    },
    {
      icon: <BookOpen size={40} />,
      number: 3,
      suffix: "",
      label: "Schools: Nursery • Primary • Secondary",
    },
  ];

  const slides = [
    {
      title: "A vibrant learning community",
      text: "From Nursery to Secondary, Afkar Schools provides a continuous, supportive journey of learning and growth.",
      img: sampleCampus,
    },
    {
      title: "Classrooms that inspire curiosity",
      text: "Engaging lessons, modern teaching tools, and dedicated teachers who bring out the best in every child.",
      img: sampleClassroom,
    },
    {
      title: "Anchored on knowledge and faith",
      text: "Strong academics blended with moral and faith‑based values for balanced character development.",
      img: sampleStudents,
    },
  ];

  const testimonials = [
    {
      name: "Mrs. Amina Yusuf",
      role: "Parent, Primary Section",
      text: "Afkar Schools has given my children confidence in both their studies and their faith. The teachers know every child by name and truly care.",
      rating: 5,
    },
    {
      name: "Ibrahim, SS3",
      role: "Student, Secondary School",
      text: "Our teachers push us to aim higher, but they also listen. I feel prepared for university and life after school.",
      rating: 5,
    },
    {
      name: "Mr. & Mrs. Abdullahi",
      role: "Parents, Nursery & Secondary",
      text: "We wanted a school that combines discipline, Islamic values, and strong academics. Afkar has met and exceeded that hope for our family.",
      rating: 5,
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { amount: 0.4 });

  const testRef = useRef(null);
  const testsInView = useInView(testRef, { amount: 0.3 });

  return (
    <div className="le-home">
      {/* HERO */}
      <section className="le-hero">
        <div className="le-hero-blobs">
          <div className="le-blob le-blob-1" />
          <div className="le-blob le-blob-2" />
        </div>

        <div className="le-hero-grid">
          <motion.div
            className="le-hero-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div className="le-hero-pill">
              <ShieldCheck size={22} />
              <span>Faith‑driven learning in Katsina</span>
            </div>

            <h1 className="le-hero-title">
              Nurturing{" "}
              <span className="le-hero-gradient">
                <span className="typing-text">
                  {heroTyped}
                  <span className="typing-cursor">|</span>
                </span>
              </span>{" "}
              grounded in knowledge and faith.
            </h1>

            <p className="le-hero-sub">
              Afkar Schools is a Nursery, Primary and Secondary institution in
              Katsina that blends strong academics with moral and faith‑based
              values, helping every child grow in character and excellence.
            </p>

            <div className="le-hero-actions">
              <Link to="/admissions">
                <button className="btn-primary">Apply for admission</button>
              </Link>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noreferrer"
              >
                <button className="le-hero-secondary">
                  <PlayCircle size={22} />
                  Talk to our team
                </button>
              </a>
            </div>

            <div className="le-hero-meta">
              <div>
                <span className="le-meta-label">Location</span>
                <span className="le-meta-value">
                  <MapPin size={14} /> Umaru Musa Yar&apos;adua Way, Modoji, Katsina
                </span>
              </div>
              <div>
                <span className="le-meta-label">School levels</span>
                <span className="le-meta-value">
                  Nursery • Primary • Secondary
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="le-hero-media"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="le-hero-card">
              <img src={heroLogo} alt="Afkar Schools" className="le-hero-logo" />
              <img
                src={slides[currentSlide].img}
                alt={slides[currentSlide].title}
                className="le-hero-mainimg"
              />
              <div className="le-hero-badge">
                <GraduationCap size={18} />
                <span>Knowledge and Faith</span>
              </div>
              <div className="le-hero-small-card">
                <h4>{slides[currentSlide].title}</h4>
                <p>{slides[currentSlide].text}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="le-stats" ref={statsRef}>
        <motion.div
          className="le-stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {statsData.map((item) => (
            <motion.div
              key={item.label}
              className="le-stat-item"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <div className="le-stat-icon">{item.icon}</div>
              <div>
                <h3>
                  <CountUp
                    end={item.number}
                    duration={3500}
                    inViewKey={statsInView}
                  />
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY AFKAR */}
      <section className="le-why">
        <motion.div
          className="le-section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="le-section-pill">
            <Sparkles size={18} />
            Why families choose Afkar
          </div>
          <h2>Balanced education for mind, character and faith.</h2>
          <p>
            Afkar Schools provides a safe, structured environment where students
            gain strong academic foundations while growing in discipline,
            responsibility and spiritual values.
          </p>
        </motion.div>

        <div className="le-why-grid">
          <div className="le-why-card">
            <GraduationCap size={24} />
            <h3>Strong academic foundation</h3>
            <p>
              A robust curriculum delivered by experienced teachers who focus on
              literacy, numeracy and critical thinking at every stage.
            </p>
          </div>
          <div className="le-why-card">
            <ShieldCheck size={24} />
            <h3>Faith & character</h3>
            <p>
              Daily routines that reinforce honesty, respect and faith‑based
              values, helping students build sound character.
            </p>
          </div>
          <div className="le-why-card">
            <Users size={24} />
            <h3>Personalised attention</h3>
            <p>
              Close teacher–student relationships and regular feedback so every
              child is seen, supported and encouraged to thrive.
            </p>
          </div>
          <div className="le-why-card">
            <BookOpen size={24} />
            <h3>Modern learning environment</h3>
            <p>
              Conducive classrooms and learning resources that make lessons
              engaging, practical and relevant to today&apos;s world.
            </p>
          </div>
          <div className="le-why-card">
            <MapPin size={24} />
            <h3>Accessible location</h3>
            <p>
              Strategically located along Umaru Musa Yar&apos;adua Way, easily
              accessible for families across Katsina.
            </p>
          </div>
          <div className="le-why-card">
            <Sparkles size={24} />
            <h3>Vibrant school life</h3>
            <p>
              Co‑curricular activities, clubs and events that help learners
              discover talents, build confidence and make lasting friendships.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / SLIDER */}
      <section className="le-projects">
        <div className="le-section-header le-projects-header">
          <div className="le-section-pill">
            <BookOpen size={18} />
            School life highlights
          </div>
          <h2>A glimpse into everyday learning at Afkar.</h2>
          <p>
            From morning assembly to after‑school clubs, students experience a
            structured, caring environment designed to help them grow.
          </p>
        </div>

        <div className="le-projects-carousel">
          <button className="le-proj-nav" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          <div className="le-project-card">
            <div className="le-project-imgwrap">
              <img src={slides[currentSlide].img} alt={slides[currentSlide].title} />
              <div className="le-proj-tag">Campus highlight</div>
            </div>
            <div className="le-project-body">
              <h3>{slides[currentSlide].title}</h3>
              <p className="le-project-location">
                <MapPin size={14} />
                Afkar Schools • Modoji, Katsina
              </p>
              <p className="le-project-desc">{slides[currentSlide].text}</p>
              <Link to="/about" className="le-proj-link">
                Learn more about Afkar
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <button className="le-proj-nav" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="le-testimonials" ref={testRef}>
        <motion.div
          className="le-section-header le-test-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="le-section-pill">
            <Sparkles size={18} />
            Parent & student stories
          </div>
          <h2>What families say about Afkar Schools.</h2>
          <p>
            Hear from parents and students who experience our blend of
            quality teaching, care and faith‑driven guidance every day.
          </p>
        </motion.div>

        <motion.div
          className="le-test-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} item={item} inView={testsInView} />
          ))}
        </motion.div>
      </section>

      {/* CTA STRIP */}
      <section className="le-cta">
        <div className="le-cta-inner">
          <div>
            <h2>Ready to enrol your child at Afkar?</h2>
            <p>
              Start the admission process online or reach out to our team for
              guidance on placing your child in Nursery, Primary or Secondary.
            </p>
          </div>
          <div className="le-cta-actions">
            <Link to="/admissions">
              <button className="btn-primary">Start admissions</button>
            </Link>
            <Link to="/contact">
              <button className="le-cta-outline">Contact the school</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
