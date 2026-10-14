"use client";

import { useEffect, useRef, useState } from "react";
import { LOGO_C, LOGO_S } from "./Logo";

// Ecran d'arrivee. Sur fond petrole, le point vert d'eau apparait seul, puis
// le S et le C se dessinent autour de lui pendant qu'un mini pipeline
// (build, test, deploy) se remplit de 0 a 100. Ensuite le rideau remonte, le
// monogramme rejoint sa place dans la barre de navigation, et le reste de la
// page enchaine ses propres animations.
//
// Les premieres etapes sont en CSS pur : elles demarrent des le premier
// affichage, avant meme que React ait pris la main. Ce composant ne gere que
// la sortie. Le script du <head> decide si l'intro est jouee (classe `intro`
// sur <html>) : une fois par visite, jamais si le visiteur a demande de
// reduire les animations ou arrive sur une ancre (#contact...).
const EXIT_AT = 2100; // ms apres le debut du chargement
const FLIGHT = 900;

export default function Intro() {
  const [gone, setGone] = useState(false);
  const mark = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("intro")) {
      setGone(true);
      return;
    }

    const exit = () => {
      if (started.current) return;
      started.current = true;
      const el = mark.current;
      const target = document.querySelector(".logo-link .logo");
      // La nav doit etre a sa place definitive avant qu'on mesure la cible.
      root.classList.add("intro-landed");

      // Le monogramme part vers le logo de la nav (technique FLIP).
      if (el && target) {
        const a = el.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        const dx = b.left + b.width / 2 - (a.left + a.width / 2);
        const dy = b.top + b.height / 2 - (a.top + a.height / 2);
        el.style.transform = `translate(${dx}px, ${dy}px) scale(${b.width / a.width})`;
      }

      root.classList.remove("intro");
      root.classList.add("intro-exit");

      window.setTimeout(() => {
        root.classList.remove("intro-exit");
        setGone(true);
      }, FLIGHT + 60);
    };

    const wait = Math.max(EXIT_AT - performance.now(), 250);
    const timer = window.setTimeout(exit, wait);
    // Un clic ou une touche passe l'intro.
    window.addEventListener("pointerdown", exit, { once: true });
    window.addEventListener("keydown", exit, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", exit);
      window.removeEventListener("keydown", exit);
    };
  }, []);

  if (gone) return null;

  return (
    <div className="intro-overlay" aria-hidden>
      <div className="intro-curtain" />
      <div className="intro-stage">
        <div ref={mark} className="intro-mark">
          <svg viewBox="0 0 64 64">
            <rect className="intro-tile" width="64" height="64" rx="14" fill="var(--hero)" />
            <g fill="none" stroke="var(--hero-ink)" strokeWidth="5.4" strokeLinecap="round">
              <path className="intro-s" d={LOGO_S} pathLength={1} />
              <path className="intro-c" d={LOGO_C} pathLength={1} />
            </g>
            <circle className="intro-ring" cx="50.23" cy="32" r="3.3" fill="none" stroke="var(--signal)" strokeWidth="1" />
            <circle className="intro-dot" cx="50.23" cy="32" r="3.3" fill="var(--signal)" />
          </svg>
        </div>
      </div>
    </div>
  );
}