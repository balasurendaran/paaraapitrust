import { SITE_CONFIG, C } from "./siteConfig";

// ─── Inline SVG Social Icons (no external dependency) ────────
const SvgFacebook = () => (
  <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
  </svg>
);
const SvgInstagram = () => (
  <svg
    viewBox='0 0 24 24'
    width='18'
    height='18'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
  </svg>
);
const SvgYoutube = () => (
  <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
    <path d='M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z' />
    <polygon fill='#fff' points='9.75 15.02 15.5 12 9.75 8.98 9.75 15.02' />
  </svg>
);
const SvgTwitter = () => (
  <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);
const SvgWhatsApp = () => (
  <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z' />
    <path d='M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.849L.073 23.927l6.244-1.637A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.52-5.17-1.424l-.371-.22-3.703.971.988-3.607-.242-.383A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z' />
  </svg>
);
const SvgLinkedin = () => (
  <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
    <rect x='2' y='9' width='4' height='12' />
    <circle cx='4' cy='4' r='2' />
  </svg>
);
const SvgSharechat = () => (
  <svg
    viewBox='0 0 24 24'
    width='18'
    height='18'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
    <circle cx='10' cy='12' r='2' />
    <circle cx='15' cy='9' r='1.5' />
    <circle cx='15' cy='15' r='1.5' />
    <line x1='11.7' y1='11.1' x2='13.8' y2='9.9' />
    <line x1='11.7' y1='12.9' x2='13.8' y2='14.1' />
  </svg>
);

// ─── Social Icon Map ─────────────────────────────────────────
const SOCIAL_ICONS = {
  facebook: { Icon: SvgFacebook, label: "Facebook", color: "#1877F2" },
  instagram: { Icon: SvgInstagram, label: "Instagram", color: "#E1306C" },
  youtube: { Icon: SvgYoutube, label: "YouTube", color: "#FF0000" },
  twitter: { Icon: SvgTwitter, label: "Twitter/X", color: "#1DA1F2" },
  whatsapp: { Icon: SvgWhatsApp, label: "WhatsApp", color: "#25D366" },
  linkedin: { Icon: SvgLinkedin, label: "LinkedIn", color: "#0A66C2" },
  sharechat: { Icon: SvgSharechat, label: "ShareChat", color: "#9661BA" },
};

// ─── Social Links Component ───────────────────────────────────
export default function SocialLinks({ variant = "footer" }) {
  const links = Object.entries(SITE_CONFIG.social).filter(
    ([, url]) => url !== "",
  );
  if (links.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {links.map(([key, url]) => {
        const { Icon, label, color } = SOCIAL_ICONS[key] || {};
        if (!Icon) return null;
        const isFooter = variant === "footer";
        return (
          <a
            key={key}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            title={label}
            style={{
              width: isFooter ? 38 : 42,
              height: isFooter ? 38 : 42,
              borderRadius: "50%",
              background: isFooter ? "rgba(255,255,255,0.1)" : C.cream,
              border: isFooter
                ? "1px solid rgba(255,255,255,0.18)"
                : `1.5px solid ${C.cream}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isFooter ? "#fff" : C.darkGreen,
              transition: "all 0.22s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = color;
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isFooter
                ? "rgba(255,255,255,0.1)"
                : C.cream;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = isFooter
                ? "rgba(255,255,255,0.18)"
                : C.cream;
            }}
          >
            <Icon size={isFooter ? 17 : 19} />
          </a>
        );
      })}
    </div>
  );
}
