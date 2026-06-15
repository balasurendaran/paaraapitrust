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
    facebook: "https://facebook.com/paaraapitrust",
    instagram: "https://instagram.com/paaraapitrust",
    youtube: "https://youtube.com/@paaraapitrust",
    twitter: "", // leave blank to hide
    whatsapp: "https://wa.me/919876543210",
    linkedin: "", // leave blank to hide
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
