"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Section from "./Section";
import { useI18n } from "./I18nProvider";
import { delay } from "../motion";
import { GITHUB_URL } from "../site";

type ContextKey = "personal" | "team" | "hackathon" | "academic";

type Project = {
  title: string;
  repo: string;
  apiRepo?: string;
  privateRepo?: boolean;
  liveUrl?: string;
  image: string;
  /** Video de demo (16:9) dans public/ : remplace la capture, qui sert d'affiche. */
  video?: string;
  /** Image affichee avant lecture (premiere image de la video, en 16:9). */
  poster?: string;
  year: string;
  context: ContextKey;
  stack: string;
  fr: { tagline: string; description: string };
  en: { tagline: string; description: string };
};

// Le premier projet est mis en avant (grande capture, pleine largeur).
const projects: Project[] = [
  {
    title: "Vinyl Wishlist",
    repo: "vinyl-wishlist",
    image: "/vinyl-wishlist.png",
    video: "/vinyl-wishlist.mp4",
    poster: "/vinyl-wishlist-poster.jpg",
    year: "2026",
    context: "personal",
    stack: "React 19, Vite, Supabase, Tailwind, API Discogs, PWA",
    fr: {
      tagline: "Une liste de vinyles à partager entre amis",
      description:
        "On cherche un disque dans la base Discogs ou on scanne son code-barres, puis on le range dans ses souhaits ou dans sa collection. La liste suit dans les salons qu'on rejoint avec ses amis, avec une messagerie, l'import d'une collection Discogs et des liens vers les disquaires. Synchronisation en temps réel avec Supabase, et l'app reste utilisable hors ligne."
    },
    en: {
      tagline: "A vinyl wishlist to share with friends",
      description:
        "Search a record in the Discogs database or scan its barcode, then file it under wishlist or collection. Your list follows you into the rooms you join with friends, with direct messages, Discogs collection import and links to record shops. Real-time sync through Supabase, and the app keeps working offline."
    }
  },
  {
    title: "fit-tracker",
    repo: "fit-tracker",
    privateRepo: true,
    liveUrl: "https://fit-tracker-orpin.vercel.app/",
    image: "/fit-tracker.png",
    video: "/fit-tracker.mp4",
    poster: "/fit-tracker-poster.jpg",
    year: "2026",
    context: "personal",
    stack: "React, TypeScript, Vite, PWA",
    fr: {
      tagline: "Mes séances de musculation",
      description:
        "Répétitions et charges par exercice, suivi du poids de corps avec sa courbe. Installable sur téléphone pour noter entre deux séries."
    },
    en: {
      tagline: "My strength training log",
      description:
        "Reps and loads per exercise, body weight with its trend line. Installable on a phone to log between sets."
    }
  },
  {
    title: "cahier-appel",
    repo: "cahier-appel",
    privateRepo: true,
    liveUrl: "https://cahier-appel.vercel.app/",
    image: "/cahier-appel.png",
    year: "2026",
    context: "personal",
    stack: "Next.js, TypeScript, Firebase, PWA",
    fr: {
      tagline: "Un cahier d'appel pour enseignants",
      description:
        "Présences par classe, statistiques du mois, connexion Google ou e-mail avec Firebase. L'année scolaire est gardée dans l'URL."
    },
    en: {
      tagline: "An attendance book for teachers",
      description:
        "Attendance per class, monthly stats, Google or email sign-in through Firebase. The school year is kept in the URL."
    }
  },
  {
    title: "heures-delegation",
    repo: "heures-delegation",
    liveUrl: "https://heures-delegations.vercel.app/",
    image: "/heures-delegation.png",
    year: "2026",
    context: "personal",
    stack: "Next.js, TypeScript, Tailwind, PWA",
    fr: {
      tagline: "Les heures de délégation des élus CSE",
      description:
        "Quota annuel, heures prises, report calculé d'un mois sur l'autre et export par année, en vue mois ou année."
    },
    en: {
      tagline: "Delegation hours for works council members",
      description:
        "Yearly quota, hours used, automatic month-to-month carry-over and yearly export, in month or year view."
    }
  },
  {
    title: "Location-MaskCar",
    repo: "Location-MaskCar",
    apiRepo: "Location-MaskCar-API",
    image: "/location-maskcar.png",
    year: "2025",
    context: "team",
    stack: "Angular, TypeScript, Laravel, API REST",
    fr: {
      tagline: "Une plateforme de location de voitures",
      description:
        "Trois rôles (admin, agent, client), agences, réservations, contrats et PDF. Le front Angular et l'API Laravel sont séparés pour évoluer chacun de leur côté."
    },
    en: {
      tagline: "A car rental platform",
      description:
        "Three roles (admin, agent, customer), agencies, bookings, contracts and PDFs. The Angular front end and Laravel API are separate so each can evolve on its own."
    }
  },
  {
    title: "Bomberman",
    repo: "Bomberman",
    image: "/bomberman.png",
    year: "2024",
    context: "team",
    stack: "Java, JavaFX",
    fr: {
      tagline: "Le jeu classique, refait en Java",
      description:
        "À quatre : architecture objet, gestion des événements, interface JavaFX, logique de jeu séparée de l'affichage."
    },
    en: {
      tagline: "The classic game, rebuilt in Java",
      description:
        "Four of us: object-oriented architecture, event handling, JavaFX interface, game logic kept apart from rendering."
    }
  },
  {
    title: "MarathonWeb",
    repo: "MarathonWeb",
    image: "/marathon-web.png",
    year: "2024",
    context: "hackathon",
    stack: "PHP, MySQL",
    fr: {
      tagline: "Un carnet de voyages collaboratif",
      description:
        "36 heures à huit, quatre au front et quatre au back, avec un workflow Git strict et une démo finale devant le jury."
    },
    en: {
      tagline: "A collaborative travel journal",
      description:
        "36 hours, eight of us, four on the front end and four on the back end, a strict Git workflow and a final demo for the jury."
    }
  }
];

function ProjectLinks({ p }: { p: Project }) {
  const { t } = useI18n();
  return (
    <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-base">
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="link font-medium">
          {t.projects.demo}
        </a>
      )}
      {p.privateRepo ? (
        <span className="text-muted">{t.projects.privateCode}</span>
      ) : (
        <a href={`${GITHUB_URL}/${p.repo}`} target="_blank" rel="noopener noreferrer" className="link">
          {t.projects.code}
        </a>
      )}
      {p.apiRepo && (
        <a href={`${GITHUB_URL}/${p.apiRepo}`} target="_blank" rel="noopener noreferrer" className="link">
          {t.projects.api}
        </a>
      )}
    </p>
  );
}

function Shot({
  p,
  sizes,
  priority,
  fit = "cover"
}: {
  p: Project;
  sizes: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <Image
      src={p.image}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      className={
        fit === "cover"
          ? "object-cover object-top"
          : "object-contain object-center drop-shadow-[0_14px_22px_rgb(0_0_0/0.22)]"
      }
    />
  );
}

// Video de demo en lecture automatique : muette (condition des navigateurs
// pour l'autoplay) et en boucle. Elle ne tourne que lorsqu'elle est a
// l'ecran, pour ne pas consommer de bande passante ni de batterie ailleurs.
// Le visiteur garde les controles pour remettre le son ou mettre en pause.
function Demo({ p, label, className = "" }: { p: Project; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Respecte le reglage "reduire les animations" : pas de lecture auto.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={p.video}
      poster={p.poster ?? p.image}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label={label}
      className={`absolute inset-0 h-full w-full bg-black object-contain ${className}`}
    />
  );
}

// Grand panneau pour les projets qui ont une video de demo : la video prend
// toute la largeur, le texte se range en deux colonnes en dessous. Les
// panneaux alternent entre petrole fonce et vert d'eau, les couleurs du CV.
function FeaturedPanel({ p, tone }: { p: Project; tone: "dark" | "light" }) {
  const { t, locale } = useI18n();
  const c = p[locale];
  const dark = tone === "dark";

  return (
    <article
      data-reveal
      className={`overflow-hidden rounded-xl ${
        dark ? "featured-panel bg-[#0f5052] text-[#fffdfa]" : "bg-[var(--mint)] text-default"
      }`}
    >
      <div className="px-4 pt-4 sm:px-10 sm:pt-10">
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55)]">
          {p.video ? (
            <Demo p={p} label={`${t.projects.video} ${p.title}`} />
          ) : (
            <Shot p={p} sizes="(min-width: 1024px) 860px, 100vw" />
          )}
        </div>
      </div>
      <div className="grid gap-6 px-5 pb-8 pt-7 sm:px-10 sm:pb-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
              dark ? "bg-[#dde9e5] text-[#0f5052]" : "bg-[var(--accent)] text-[var(--bg)]"
            }`}
          >
            {t.projects.context[p.context]}, {p.year}
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">{p.title}</h3>
          <p className={`mt-2 text-lg ${dark ? "opacity-85" : "text-muted"}`}>{c.tagline}</p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="max-w-[38em]">{c.description}</p>
          <p className={`mt-3 text-sm ${dark ? "opacity-75" : "text-muted"}`}>{p.stack}</p>
          <ProjectLinks p={p} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t, locale } = useI18n();
  // Les projets avec video passent en grand, les autres restent en grille.
  const featured = projects.filter((p) => p.video);
  const rest = projects.filter((p) => !p.video);

  return (
    <Section id="projets" title={t.projects.title} intro={t.projects.intro}>
      <div className="space-y-8">
        {featured.map((p, i) => (
          <FeaturedPanel key={p.repo} p={p} tone={i % 2 === 0 ? "dark" : "light"} />
        ))}
      </div>

      <h3 data-reveal className="mt-20 text-2xl font-semibold tracking-[-0.01em] text-default">
        {t.projects.others}
      </h3>
      <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {rest.map((p, i) => {
          const c = p[locale];
          return (
            <article key={p.repo} data-reveal style={delay((i % 2) * 140)} className="group">
              {/* Capture entiere, centree sur un support vert d'eau (celui du CV). */}
              <div
                className="relative overflow-hidden rounded-xl bg-[var(--mint)] px-5 pb-5 pt-5 sm:px-7 sm:pb-7 sm:pt-7"
              >
                <div className="relative aspect-[16/10]">
                  <Shot p={p} fit="contain" sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw" />
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-[-0.01em] text-default">{p.title}</h3>
                <span className="shrink-0 font-mono text-sm text-muted">{p.year}</span>
              </div>
              <p className="text-muted">{c.tagline}</p>
              <p className="mt-3 text-[0.97rem] text-default">{c.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
                {p.stack.split(", ").map((tech) => (
                  <li key={tech} className="rounded-full border border-rule px-2.5 py-0.5 text-sm text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-muted">{t.projects.context[p.context]}</p>
              <ProjectLinks p={p} />
            </article>
          );
        })}
      </div>

      <p className="mt-14">
        <a
          href={`${GITHUB_URL}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="link text-lg font-medium"
        >
          {t.projects.seeAll}
        </a>
      </p>
    </Section>
  );
}