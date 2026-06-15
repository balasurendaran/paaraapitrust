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
    address: "Chennai, Tamil Nadu, India",
    phone: "+91 98765 43210",
    email: "hello@paaraapitrust.com",
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
