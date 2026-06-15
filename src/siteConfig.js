// ═══════════════════════════════════════════════════════════
//  PAARAAPI VILUTHUGAL CHARITABLE TRUST — Site Configuration
//  Update this file to change social links, contact info, etc.
// ═══════════════════════════════════════════════════════════

export const SITE_CONFIG = {
  // ── Trust Info ──────────────────────────────────────────
  trustName: "Paaraapi Viluthugal",
  trustFullName: "Paaraapi Viluthugal Charitable Trust",
  trustShort: "PRP Trust",
  tagline: "Enriching Children's Lives Since 2013",
  foundedYear: 2013,
  domain: "paaraapitrust.com",

  // ── Contact ─────────────────────────────────────────────
  contact: {
    regnNo: "181/2023",
    address: "Patteeshwarar Temple, Ok Backery Back Side, Perur, Coimbatore - 641010",
    phone: ["7449072348", "7305572348"],
    email: "Prptrust21@gmail.com",
  },

  // ── Social Media Links ───────────────────────────────────
  // Leave the URL as "" to hide that icon from the website
  social: {
    facebook: "", // leave blank to hide
    instagram: "https://www.instagram.com/paaraapiviluthugal?utm_source=qr&igsh=MWw3YWwxNG5pdm1ncw==",
    youtube: "https://youtube.com/@paaraapiviluthugal?si=NMfmGfXBU5fyto5-",
    twitter: "https://x.com/paaraapi6802",
    whatsapp: "", // leave blank to hide
    linkedin: "", // leave blank to hide
    sharechat: "https://sharechat.com/profile/1959575888?d=n",
  },

  // ── Impact Numbers (Hero + Stats section) ───────────────
  stats: {
    childrenServed: 2500,
    schoolsPartnered: 52,
    volunteers: 340,
    yearsOfService: 12, // auto-calculated from 2013 but you can override
  },

  // ── Donation Tiers ──────────────────────────────────────
  donationTiers: [
    {
      amount: 500,
      label: "Friend",
      icon: "☀️",
      benefit: "Feeds a child nutritious meals for one week",
    },
    {
      amount: 1500,
      label: "Champion",
      icon: "⭐",
      benefit: "Sponsors a complete stationery kit for a term",
    },
    {
      amount: 5000,
      label: "Guardian",
      icon: "🌟",
      benefit: "Funds a child's education for an entire month",
    },
  ],
};

// ─── Color Palette (derived from logo) ───────────────────────
export const C = {
  darkGreen: "#0B5E28", // deep ring border
  midGreen: "#1A9A50", // main logo green
  lightGreen: "#4DC87A", // bright leaf green
  blue: "#1A4FA3", // PRP badge blue
  orange: "#E07820", // orange figure
  bgLight: "#F3FCF6", // very pale green background
  bgWhite: "#FDFFFE",
  textDark: "#052B14",
  textMid: "#2D6A4F",
  textLight: "#52796F",
  cream: "#E9F7EE",
};

