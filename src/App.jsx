import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Apple,
  Stethoscope,
  Star,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Palette,
  Heart,
} from "lucide-react";

import logoUrl from "./assets/paaraapi-logo.png";
import { SITE_CONFIG, C } from "./siteConfig";
import Footer from "./Footer";
import SocialLinks from "./SocialLinks";

// ─── Animated Counter Hook ───────────────────────────────────
function useCounter(target, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

// ─── Wave Dividers ───────────────────────────────────────────
const WaveDown = ({ from = "#fff", to = C.bgLight }) => (
  <div style={{ lineHeight: 0, background: from }}>
    <svg
      viewBox='0 0 1440 64'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      style={{ display: "block", width: "100%", height: 64 }}
    >
      <path d='M0,0 C480,64 960,64 1440,0 L1440,64 L0,64 Z' fill={to} />
    </svg>
  </div>
);
const WaveUp = ({ from = C.bgLight, to = "#fff" }) => (
  <div style={{ lineHeight: 0, background: from }}>
    <svg
      viewBox='0 0 1440 64'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      style={{ display: "block", width: "100%", height: 64 }}
    >
      <path d='M0,64 C480,0 960,0 1440,64 L1440,0 L0,0 Z' fill={to} />
    </svg>
  </div>
);





// ─── Main Component ───────────────────────────────────────────
export default function PaarapiTrust() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [statsOn, setStatsOn] = useState(false);
  const [donationAmt, setDonation] = useState(
    SITE_CONFIG.donationTiers[1].amount,
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const statsRef = useRef(null);

  const yearsActive = new Date().getFullYear() - SITE_CONFIG.foundedYear;
  const { childrenServed, schoolsPartnered, volunteers } = SITE_CONFIG.stats;

  const children = useCounter(childrenServed, 2000, statsOn);
  const schools = useCounter(schoolsPartnered, 2000, statsOn);
  const vols = useCounter(volunteers, 2000, statsOn);
  const years = useCounter(yearsActive, 1500, statsOn);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsOn(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ── Programs ──
  const programs = [
    {
      Icon: GraduationCap,
      title: "Education Support",
      color: C.darkGreen,
      bg: "#E9F7EE",
      desc: "Books, stationery, scholarships and after-school tutoring for children from underserved communities.",
    },
    {
      Icon: Apple,
      title: "Nutrition & Meals",
      color: C.orange,
      bg: "#FEF3E7",
      desc: "Daily nutritious meals and supplements so every child grows strong and stays alert in school.",
    },
    {
      Icon: Stethoscope,
      title: "Healthcare Access",
      color: C.blue,
      bg: "#EBF2FF",
      desc: "Free medical check-ups, vaccinations, and health awareness camps for children and families.",
    },
    {
      Icon: Palette,
      title: "Skills & Arts",
      color: C.midGreen,
      bg: "#E4F5ED",
      desc: "Music, art, and vocational skill workshops to discover and nurture every child's unique talent.",
    },
  ];

  // ── Gallery ──
  const gallery = [
    { emoji: "📚", label: "Classroom Sessions", bg: "#B7E4C7", h: 210 },
    { emoji: "🍱", label: "Nutrition Drives", bg: "#D8F3DC", h: 150 },
    { emoji: "🎨", label: "Art Workshops", bg: "#95D5B2", h: 150 },
    { emoji: "🏥", label: "Medical Camps", bg: "#74C69D", h: 170 },
    { emoji: "🎵", label: "Music Classes", bg: "#52B788", h: 170 },
    { emoji: "🏆", label: "Award Ceremonies", bg: "#40916C", h: 210 },
  ];

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        background: C.bgLight,
        color: C.textDark,
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Nunito:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        @keyframes floatA { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(10px,-16px) scale(1.04)} }
        @keyframes floatB { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-8px,12px) scale(0.97)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

        .fade-up  { animation: fadeUp 0.8s ease both; }
        .fade-up1 { animation: fadeUp 0.8s 0.15s ease both; }
        .fade-up2 { animation: fadeUp 0.8s 0.30s ease both; }
        .fade-up3 { animation: fadeUp 0.8s 0.45s ease both; }

        .nav-link { cursor:pointer; font-weight:700; font-size:0.92rem; color:${C.textDark}; transition:color 0.2s; text-transform:capitalize; }
        .nav-link:hover { color:${C.midGreen}; }

        .btn-primary {
          display:inline-flex; align-items:center; gap:8px;
          background:${C.darkGreen}; color:#fff; border:none;
          padding:13px 30px; border-radius:50px;
          font-family:'Nunito',sans-serif; font-weight:800; font-size:1rem;
          cursor:pointer; transition:all 0.25s;
        }
        .btn-primary:hover { background:${C.midGreen}; transform:translateY(-3px); box-shadow:0 10px 28px rgba(11,94,40,0.35); }

        .btn-blue {
          display:inline-flex; align-items:center; gap:8px;
          background:${C.blue}; color:#fff; border:none;
          padding:13px 30px; border-radius:50px;
          font-family:'Nunito',sans-serif; font-weight:800; font-size:1rem;
          cursor:pointer; transition:all 0.25s;
        }
        .btn-blue:hover { background:#1338a0; transform:translateY(-3px); box-shadow:0 10px 28px rgba(26,79,163,0.35); }

        .btn-outline {
          display:inline-flex; align-items:center; gap:8px;
          background:transparent; color:${C.darkGreen}; border:2.5px solid ${C.darkGreen};
          padding:11px 28px; border-radius:50px;
          font-family:'Nunito',sans-serif; font-weight:800; font-size:1rem;
          cursor:pointer; transition:all 0.25s;
        }
        .btn-outline:hover { background:${C.darkGreen}; color:#fff; transform:translateY(-3px); }

        .prog-card {
          background:#fff; border-radius:22px; padding:36px 28px;
          transition:all 0.3s; border:2px solid transparent;
          box-shadow:0 4px 18px rgba(0,0,0,0.05);
        }
        .prog-card:hover { transform:translateY(-10px); border-color:${C.lightGreen}; box-shadow:0 22px 52px rgba(11,94,40,0.13); }

        .gal-item { border-radius:18px; overflow:hidden; position:relative; cursor:pointer; display:flex; align-items:center; justify-content:center; }
        .gal-overlay { position:absolute; inset:0; background:rgba(11,94,40,0.78); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s; }
        .gal-item:hover .gal-overlay { opacity:1; }

        .tier-card { border:2.5px solid #D0EDD8; border-radius:18px; padding:26px 22px; cursor:pointer; transition:all 0.25s; background:#fff; text-align:center; }
        .tier-card:hover { border-color:${C.midGreen}; transform:translateY(-4px); }
        .tier-card.active { border-color:${C.darkGreen}; background:${C.cream}; box-shadow:0 8px 32px rgba(11,94,40,0.16); }

        .form-field { width:100%; padding:14px 18px; border:2px solid #C8E6D0; border-radius:12px; font-size:1rem; font-family:'Nunito',sans-serif; background:#fff; outline:none; transition:border-color 0.2s; color:${C.textDark}; }
        .form-field:focus { border-color:${C.midGreen}; }

        .blob { position:absolute; border-radius:50%; opacity:0.10; }

        @media (max-width:900px) {
          .desktop-nav { display:none !important; }
          .hamburger   { display:block !important; }
        }
        @media (max-width:768px) {
          .hero-flex   { flex-direction:column !important; }
          .about-flex  { flex-direction:column !important; }
          .prog-grid   { grid-template-columns:1fr !important; }
          .gal-grid    { grid-template-columns:1fr 1fr !important; }
          .tiers-grid  { grid-template-columns:1fr !important; }
          .contact-flex{ flex-direction:column !important; }
          .stats-grid  { grid-template-columns:1fr 1fr !important; }
          .footer-flex { flex-direction:column !important; }
        }
      `}</style>

      {/* ══ NAVBAR ════════════════════════════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: scrolled ? "rgba(243,252,246,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.cream}` : "none",
          transition: "all 0.3s",
          padding: "0 6%",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
            onClick={() => go("hero")}
          >
            <img
              src={logoUrl}
              alt={SITE_CONFIG.trustFullName}
              style={{
                height: 56,
                width: 56,
                objectFit: "contain",
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontWeight: 900,
                  fontSize: "1rem",
                  color: C.darkGreen,
                  lineHeight: 1.15,
                }}
              >
                {SITE_CONFIG.trustName}
              </div>
              <div
                style={{
                  fontSize: "0.58rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.textLight,
                }}
              >
                Charitable Trust · PRP
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div
            className='desktop-nav'
            style={{ display: "flex", alignItems: "center", gap: 32 }}
          >
            {["about", "programs", "gallery", "contact"].map((s) => (
              <span key={s} className='nav-link' onClick={() => go(s)}>
                {s}
              </span>
            ))}
            <SocialLinks variant='nav' />
            <button
              className='btn-primary'
              style={{ padding: "10px 22px", fontSize: "0.88rem" }}
              onClick={() => go("donate")}
            >
              <Heart size={14} /> Donate
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='hamburger'
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {menuOpen ? (
              <X size={28} color={C.darkGreen} />
            ) : (
              <Menu size={28} color={C.darkGreen} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: C.bgWhite,
              padding: "20px 6% 28px",
              borderBottom: `1px solid ${C.cream}`,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {["about", "programs", "gallery", "donate", "contact"].map((s) => (
              <span
                key={s}
                className='nav-link'
                style={{ fontSize: "1.05rem" }}
                onClick={() => go(s)}
              >
                {s}
              </span>
            ))}
            <SocialLinks variant='nav' />
          </div>
        )}
      </nav>

      {/* ══ HERO ═══════════════════════════════════════════ */}
      <section
        id='hero'
        style={{
          minHeight: "100vh",
          background: `linear-gradient(150deg, #E4F5ED 0%, ${C.bgLight} 50%, #D8F3DC 100%)`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
        }}
      >
        {/* Blobs */}
        <div
          className='blob'
          style={{
            width: 380,
            height: 380,
            background: C.midGreen,
            top: -60,
            right: -40,
            animation: "floatA 7s ease-in-out infinite",
          }}
        />
        <div
          className='blob'
          style={{
            width: 240,
            height: 240,
            background: C.blue,
            bottom: 60,
            left: -50,
            animation: "floatB 9s ease-in-out infinite",
          }}
        />
        <div
          className='blob'
          style={{
            width: 140,
            height: 140,
            background: C.orange,
            top: "38%",
            right: "12%",
            animation: "floatA 11s ease-in-out infinite 3s",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "60px 6%",
            width: "100%",
          }}
        >
          <div
            className='hero-flex'
            style={{ display: "flex", alignItems: "center", gap: 60 }}
          >
            {/* Text */}
            <div style={{ flex: "1 1 520px", zIndex: 2 }}>
              <div
                className='fade-up'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#D0EDD8",
                  border: `1.5px solid ${C.midGreen}`,
                  borderRadius: 50,
                  padding: "7px 18px",
                  marginBottom: 28,
                }}
              >
                <Sparkles size={14} color={C.darkGreen} />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: C.darkGreen,
                    letterSpacing: "0.06em",
                  }}
                >
                  ENRICHING CHILDREN'S LIVES SINCE {SITE_CONFIG.foundedYear}
                </span>
              </div>
              <h1
                className='fade-up1'
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(2.5rem,5vw,3.8rem)",
                  fontWeight: 900,
                  lineHeight: 1.12,
                  color: C.textDark,
                  marginBottom: 24,
                }}
              >
                Every Child Deserves
                <br />
                <span style={{ color: C.darkGreen }}>A Brighter</span>{" "}
                <em style={{ fontStyle: "italic", color: C.blue }}>
                  Tomorrow.
                </em>
              </h1>
              <p
                className='fade-up2'
                style={{
                  fontSize: "1.08rem",
                  lineHeight: 1.85,
                  color: C.textMid,
                  maxWidth: 500,
                  marginBottom: 36,
                }}
              >
                {SITE_CONFIG.trustFullName} works tirelessly to provide
                education, nutrition, healthcare, and creative development to
                children across Tamil Nadu — one life at a time.
              </p>
              <div
                className='fade-up3'
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <button className='btn-primary' onClick={() => go("donate")}>
                  <Heart size={17} fill='#fff' /> Donate Now
                </button>
                <button className='btn-outline' onClick={() => go("about")}>
                  Our Story <ChevronRight size={17} />
                </button>
              </div>
              {/* Social links under hero CTA */}
              <div
                style={{
                  marginTop: 32,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: C.textLight,
                  }}
                >
                  Follow us:
                </span>
                <SocialLinks variant='nav' />
              </div>
            </div>

            {/* Hero Cards */}
            <div
              style={{
                flex: "1 1 360px",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  background: `linear-gradient(135deg, ${C.darkGreen}, ${C.midGreen})`,
                  borderRadius: 28,
                  padding: "36px 32px",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 120,
                    height: 120,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                  }}
                />
                <div style={{ fontSize: 52, marginBottom: 14 }}>👧🏽</div>
                <p
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    lineHeight: 1.35,
                    marginBottom: 10,
                  }}
                >
                  "School changed everything for me."
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    opacity: 0.85,
                    fontWeight: 600,
                  }}
                >
                  — Kavya, age 10, Chennai
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: "20px 16px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 30, marginBottom: 6 }}>🏫</div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontWeight: 700,
                      fontSize: "1.6rem",
                      color: C.darkGreen,
                    }}
                  >
                    {SITE_CONFIG.stats.schoolsPartnered}+
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: C.textLight,
                      marginTop: 2,
                    }}
                  >
                    Schools Reached
                  </div>
                </div>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: "20px 16px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 30, marginBottom: 6 }}>💚</div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontWeight: 700,
                      fontSize: "1.6rem",
                      color: C.midGreen,
                    }}
                  >
                    {SITE_CONFIG.stats.childrenServed.toLocaleString()}+
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: C.textLight,
                      marginTop: 2,
                    }}
                  >
                    Children Served
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveDown from='transparent' to='#fff' />
      </section>

      {/* ══ ABOUT ══════════════════════════════════════════ */}
      <section id='about' style={{ background: "#fff", padding: "80px 6%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className='about-flex'
            style={{ display: "flex", gap: 72, alignItems: "center" }}
          >
            {/* Visual */}
            <div style={{ flex: "1 1 360px" }}>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    background: `linear-gradient(145deg, ${C.cream}, #D0EDD8)`,
                    borderRadius: 28,
                    padding: "50px 40px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={logoUrl}
                    alt={SITE_CONFIG.trustFullName}
                    style={{
                      width: 180,
                      height: 180,
                      objectFit: "contain",
                      margin: "0 auto 24px",
                      display: "block",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: C.textMid,
                      fontStyle: "italic",
                      lineHeight: 1.5,
                    }}
                  >
                    "Paaraapi" — meaning{" "}
                    <span style={{ color: C.darkGreen }}>caring</span> and{" "}
                    <span style={{ color: C.blue }}>nurturing</span> in Tamil.
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: -16,
                    left: -16,
                    background: C.darkGreen,
                    borderRadius: 14,
                    padding: "10px 18px",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    boxShadow: `0 6px 20px rgba(11,94,40,0.35)`,
                  }}
                >
                  Est. {SITE_CONFIG.foundedYear}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: -16,
                    right: -16,
                    background: C.blue,
                    borderRadius: 14,
                    padding: "10px 18px",
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    color: "#fff",
                    boxShadow: `0 6px 20px rgba(26,79,163,0.3)`,
                  }}
                >
                  Tamil Nadu 🌴
                </div>
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: "1 1 460px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.cream,
                  borderRadius: 50,
                  padding: "6px 16px",
                  marginBottom: 20,
                }}
              >
                <Heart size={14} color={C.darkGreen} fill={C.darkGreen} />
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    color: C.darkGreen,
                    letterSpacing: "0.08em",
                  }}
                >
                  WHO WE ARE
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(1.9rem,3.5vw,2.7rem)",
                  fontWeight: 900,
                  color: C.textDark,
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                A Movement Built on
                <br />
                <span style={{ color: C.darkGreen }}>Love & Action</span>
              </h2>
              <p
                style={{
                  fontSize: "1.03rem",
                  lineHeight: 1.85,
                  color: C.textMid,
                  marginBottom: 18,
                }}
              >
                Founded in {SITE_CONFIG.foundedYear}, Paaraapi Viluthugal
                Charitable Trust was born from a simple belief — that every
                child, regardless of their background, deserves quality
                education, proper nutrition, and the freedom to dream big.
              </p>
              <p
                style={{
                  fontSize: "1.03rem",
                  lineHeight: 1.85,
                  color: C.textMid,
                  marginBottom: 32,
                }}
              >
                We work across underserved communities in Tamil Nadu, partnering
                with schools, local leaders, and dedicated volunteers to create
                lasting, measurable change in children's lives.
              </p>
              {[
                {
                  label: "Our Mission",
                  text: "Enrich every child's life through education, health, and creative opportunity.",
                  border: C.darkGreen,
                },
                {
                  label: "Our Vision",
                  text: "A Tamil Nadu where no child is left behind — educated, healthy, and empowered.",
                  border: C.blue,
                },
              ].map(({ label, text, border }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: 16,
                    background: C.bgLight,
                    borderRadius: 14,
                    padding: "16px 20px",
                    borderLeft: `4px solid ${border}`,
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "0.83rem",
                        color: border,
                        marginBottom: 4,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.93rem",
                        color: C.textMid,
                        lineHeight: 1.65,
                      }}
                    >
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════ */}
      <section ref={statsRef} style={{ background: "#fff" }}>
        <WaveDown from='#fff' to={C.darkGreen} />
        <div style={{ background: C.darkGreen, padding: "20px 6% 40px" }}>
          <div
            className='stats-grid'
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 24,
              maxWidth: 1200,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {[
              {
                val: children,
                suffix: "+",
                label: "Children Impacted",
                emoji: "👧",
              },
              {
                val: schools,
                suffix: "+",
                label: "Schools Partnered",
                emoji: "🏫",
              },
              { val: vols, suffix: "+", label: "Volunteers", emoji: "🤝" },
              { val: years, suffix: " Yrs", label: "Of Service", emoji: "🌱" },
            ].map(({ val, suffix, label, emoji }) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 20,
                  padding: "30px 16px",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div style={{ fontSize: 34, marginBottom: 8 }}>{emoji}</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(2rem,4vw,2.8rem)",
                    fontWeight: 900,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {val.toLocaleString()}
                  {suffix}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.78)",
                    marginTop: 8,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <WaveUp from={C.darkGreen} to={C.bgLight} />
      </section>

      {/* ══ PROGRAMS ═══════════════════════════════════════ */}
      <section
        id='programs'
        style={{ background: C.bgLight, padding: "80px 6%" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: C.cream,
                borderRadius: 50,
                padding: "6px 16px",
                marginBottom: 18,
              }}
            >
              <Star size={13} color={C.darkGreen} fill={C.darkGreen} />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: C.darkGreen,
                  letterSpacing: "0.08em",
                }}
              >
                WHAT WE DO
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.9rem,3.5vw,2.7rem)",
                fontWeight: 900,
                color: C.textDark,
                lineHeight: 1.2,
              }}
            >
              Programs That{" "}
              <span style={{ color: C.darkGreen }}>Transform Lives</span>
            </h2>
            <p
              style={{
                fontSize: "1.03rem",
                color: C.textMid,
                marginTop: 14,
                maxWidth: 500,
                margin: "14px auto 0",
              }}
            >
              Four pillars of change — addressing every critical need in a
              child's journey.
            </p>
          </div>
          <div
            className='prog-grid'
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 22,
            }}
          >
            {programs.map(({ Icon, title, color, bg, desc }) => (
              <div key={title} className='prog-card'>
                <div
                  style={{
                    width: 58,
                    height: 58,
                    background: bg,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 22,
                  }}
                >
                  <Icon size={27} color={color} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: C.textDark,
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: C.textLight,
                  }}
                >
                  {desc}
                </p>
                <div
                  style={{
                    marginTop: 18,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color,
                    fontWeight: 800,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALLERY ════════════════════════════════════════ */}
      <section id='gallery' style={{ background: "#fff", padding: "80px 6%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: C.cream,
                borderRadius: 50,
                padding: "6px 16px",
                marginBottom: 18,
              }}
            >
              <Sparkles size={13} color={C.darkGreen} />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: C.darkGreen,
                  letterSpacing: "0.08em",
                }}
              >
                GALLERY
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.9rem,3.5vw,2.7rem)",
                fontWeight: 900,
                color: C.textDark,
              }}
            >
              Moments of{" "}
              <span style={{ color: C.darkGreen }}>Joy & Change</span>
            </h2>
          </div>
          <div
            className='gal-grid'
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 18,
            }}
          >
            {gallery.map(({ emoji, label, bg, h }) => (
              <div
                key={label}
                className='gal-item'
                style={{ height: h, background: bg }}
              >
                <div style={{ fontSize: 52 }}>{emoji}</div>
                <div className='gal-overlay'>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1rem",
                      textAlign: "center",
                      padding: 16,
                    }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DONATE ═════════════════════════════════════════ */}
      <section
        id='donate'
        style={{
          background: `linear-gradient(160deg, ${C.bgLight} 0%, ${C.cream} 100%)`,
          padding: "80px 6%",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: C.cream,
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 18,
            }}
          >
            <Heart size={13} color={C.darkGreen} fill={C.darkGreen} />
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                color: C.darkGreen,
                letterSpacing: "0.08em",
              }}
            >
              MAKE A DIFFERENCE
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(1.9rem,3.5vw,2.7rem)",
              fontWeight: 900,
              color: C.textDark,
              marginBottom: 14,
            }}
          >
            Your Gift Changes a{" "}
            <span style={{ color: C.darkGreen }}>Child's World</span>
          </h2>
          <p
            style={{
              fontSize: "1.03rem",
              color: C.textMid,
              marginBottom: 38,
              lineHeight: 1.8,
            }}
          >
            Every rupee goes directly to children's programs. Choose an amount
            or enter your own.
          </p>

          {/* Tiers */}
          <div
            className='tiers-grid'
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 16,
              marginBottom: 26,
            }}
          >
            {SITE_CONFIG.donationTiers.map(
              ({ amount, label, icon, benefit }) => (
                <div
                  key={amount}
                  className={`tier-card${donationAmt === amount ? " active" : ""}`}
                  onClick={() => setDonation(amount)}
                >
                  <div style={{ fontSize: 30, marginBottom: 10 }}>{icon}</div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontWeight: 700,
                      fontSize: "1.45rem",
                      color: donationAmt === amount ? C.darkGreen : C.textDark,
                    }}
                  >
                    ₹{amount.toLocaleString()}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: C.textLight,
                      marginBottom: 8,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: C.textMid,
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit}
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Custom amount */}
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginBottom: 26,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span
              style={{ fontWeight: 700, color: C.textMid, fontSize: "0.95rem" }}
            >
              Or enter a custom amount:
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `2px solid #C8E6D0`,
                borderRadius: 50,
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <span
                style={{
                  padding: "12px 14px 12px 20px",
                  fontWeight: 800,
                  color: C.darkGreen,
                  fontSize: "1.1rem",
                }}
              >
                ₹
              </span>
              <input
                type='number'
                placeholder='Enter amount'
                onChange={(e) => setDonation(Number(e.target.value))}
                style={{
                  border: "none",
                  outline: "none",
                  padding: "12px 20px 12px 0",
                  fontSize: "1rem",
                  fontFamily: "'Nunito',sans-serif",
                  width: 150,
                  color: C.textDark,
                }}
              />
            </div>
          </div>

          <button
            className='btn-blue'
            style={{ fontSize: "1.05rem", padding: "14px 46px" }}
          >
            <Heart size={18} fill='#fff' /> Donate ₹
            {Number(donationAmt).toLocaleString()}
          </button>
          <p
            style={{
              fontSize: "0.8rem",
              color: C.textLight,
              marginTop: 14,
              fontWeight: 600,
            }}
          >
            🔒 Secure payment · All donations are 80G tax-exempt
          </p>
        </div>
      </section>

      {/* ══ CONTACT ════════════════════════════════════════ */}
      <section id='contact' style={{ background: "#fff", padding: "80px 6%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: C.cream,
                borderRadius: 50,
                padding: "6px 16px",
                marginBottom: 18,
              }}
            >
              <Mail size={13} color={C.darkGreen} />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: C.darkGreen,
                  letterSpacing: "0.08em",
                }}
              >
                CONTACT US
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.9rem,3.5vw,2.7rem)",
                fontWeight: 900,
                color: C.textDark,
              }}
            >
              Get in <span style={{ color: C.darkGreen }}>Touch</span>
            </h2>
          </div>

          <div className='contact-flex' style={{ display: "flex", gap: 56 }}>
            {/* Info panel */}
            <div style={{ flex: "1 1 280px" }}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${C.darkGreen}, ${C.midGreen})`,
                  borderRadius: 24,
                  padding: "40px 34px",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <img
                  src={logoUrl}
                  alt='logo'
                  style={{
                    width: 72,
                    height: 72,
                    objectFit: "contain",
                    marginBottom: 18,
                    filter: "brightness(1.1)",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  {SITE_CONFIG.trustFullName}
                </h3>
                <p
                  style={{
                    opacity: 0.88,
                    lineHeight: 1.75,
                    marginBottom: 28,
                    fontSize: "0.92rem",
                  }}
                >
                  Join us in enriching children's lives across Tamil Nadu. Reach
                  out to volunteer, partner, or simply learn more.
                </p>
                {[
                  { Icon: MapPin, text: SITE_CONFIG.contact.address },
                  { Icon: Phone, text: SITE_CONFIG.contact.phone },
                  { Icon: Mail, text: SITE_CONFIG.contact.email },
                ].map(({ Icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        background: "rgba(255,255,255,0.18)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={17} color='#fff' />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                      {text}
                    </span>
                  </div>
                ))}
                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 20,
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      opacity: 0.75,
                      marginBottom: 12,
                    }}
                  >
                    FOLLOW US
                  </div>
                  <SocialLinks variant='footer' />
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ flex: "2 1 440px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "60px 20px" }}>
                  <div style={{ fontSize: 60, marginBottom: 18 }}>💚</div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: C.darkGreen,
                      marginBottom: 12,
                    }}
                  >
                    Thank You!
                  </h3>
                  <p
                    style={{
                      fontSize: "1.03rem",
                      color: C.textMid,
                      lineHeight: 1.8,
                    }}
                  >
                    We've received your message and will respond within 24
                    hours. Your care means the world to our children.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  style={{ display: "flex", flexDirection: "column", gap: 18 }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 18,
                    }}
                  >
                    {[
                      {
                        key: "name",
                        label: "Full Name",
                        placeholder: "Your name",
                        type: "text",
                      },
                      {
                        key: "email",
                        label: "Email",
                        placeholder: "your@email.com",
                        type: "email",
                      },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key}>
                        <label
                          style={{
                            display: "block",
                            fontWeight: 700,
                            fontSize: "0.82rem",
                            color: C.textMid,
                            marginBottom: 8,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {label} *
                        </label>
                        <input
                          required
                          type={type}
                          className='form-field'
                          placeholder={placeholder}
                          value={form[key]}
                          onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        color: C.textMid,
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      className='form-field'
                      placeholder='+91 98765 43210'
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        color: C.textMid,
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      className='form-field'
                      rows={5}
                      placeholder="Tell us how you'd like to help or any questions you have…"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <button
                    type='submit'
                    className='btn-primary'
                    style={{
                      alignSelf: "flex-start",
                      fontSize: "1rem",
                      padding: "13px 34px",
                    }}
                  >
                    Send Message <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═════════════════════════════════════════ */}
      <Footer go={go} />
    </div>
  );
}
