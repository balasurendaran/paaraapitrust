import logoUrl from "./assets/paaraapi-logo.png";
import { SITE_CONFIG, C } from "./siteConfig";

export default function Footer({ go, socialLinks }) {
  return (
    <footer style={{ background: C.textDark, padding: "52px 6% 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className='footer-flex'
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 36,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 14,
              }}
            >
              <img
                src={logoUrl}
                alt='logo'
                style={{
                  height: 60,
                  width: 60,
                  objectFit: "contain",
                  filter: "brightness(1.05)",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: 900,
                    fontSize: "1.05rem",
                    color: C.lightGreen,
                    lineHeight: 1.2,
                  }}
                >
                  {SITE_CONFIG.trustName}
                </div>
                <div
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 800,
                    color: "#52796F",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Charitable Trust · PRP
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.88rem",
                color: "#52796F",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              Empowering children across Tamil Nadu with education, nutrition,
              healthcare and creative opportunity since{" "}
              {SITE_CONFIG.foundedYear}.
            </p>
            {socialLinks}
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "0.82rem",
                color: C.midGreen,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Quick Links
            </div>
            {["about", "programs", "gallery", "donate", "contact"].map(
              (s) => (
                <div
                  key={s}
                  onClick={() => go(s)}
                  style={{
                    color: "#52796F",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    marginBottom: 12,
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = C.lightGreen)}
                  onMouseLeave={(e) => (e.target.style.color = "#52796F")}
                >
                  {s}
                </div>
              ),
            )}
          </div>

          {/* Trust Info */}
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "0.82rem",
                color: C.midGreen,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Trust Info
            </div>
            {[
              "Registered Trust · Tamil Nadu",
              "80G Tax Exemption Applicable",
              "FCRA Registered",
              "Transparent Financials",
            ].map((t) => (
              <div
                key={t}
                style={{
                  color: "#52796F",
                  fontSize: "0.86rem",
                  marginBottom: 10,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: C.midGreen }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(74,187,120,0.15)",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            alignItems: "center",
          }}
        >
          <p
            style={{ color: "#2D4A36", fontSize: "0.82rem", fontWeight: 600 }}
          >
            © {new Date().getFullYear()} {SITE_CONFIG.trustFullName}. All
            rights reserved. · {SITE_CONFIG.domain}
          </p>
          <p
            style={{ color: "#2D4A36", fontSize: "0.82rem", fontWeight: 600 }}
          >
            Made with <span style={{ color: C.midGreen }}>♥</span> for Tamil
            Nadu's children
          </p>
        </div>
      </div>
    </footer>
  );
}
