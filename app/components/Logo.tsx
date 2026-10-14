// Monogramme de Simon : un S et un C traces d'un seul trait arrondi, sur la
// tuile petrole du CV. Le C s'ouvre sur un point vert d'eau, la meme pastille
// que l'etape "alternance" du pipeline : l'etape suivante, celle qui attend.
// Avec `animate`, les lettres se dessinent au chargement puis le point apparait.
export const LOGO_S = "M23.86 24.48A5.6 5.6 0 1 0 18.6 32A5.6 5.6 0 1 1 13.34 39.52";
export const LOGO_C = "M48.92 24.51A11.2 11.2 0 1 0 48.92 39.49";

export default function Logo({
  className = "",
  animate = false,
  title
}: {
  className?: string;
  animate?: boolean;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`logo ${animate ? "logo-animate" : ""} ${className}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect className="logo-tile" width="64" height="64" rx="14" fill="var(--hero)" />
      <g fill="none" stroke="var(--hero-ink)" strokeWidth="5.4" strokeLinecap="round">
        <path className="logo-s" d={LOGO_S} pathLength={1} />
        <path className="logo-c" d={LOGO_C} pathLength={1} />
      </g>
      <circle className="logo-dot" cx="50.23" cy="32" r="3.3" fill="var(--signal)" />
    </svg>
  );
}