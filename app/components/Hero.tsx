"use client";

import { Download, Github, Languages, Linkedin, Mail, MapPin } from "lucide-react";
import { useI18n } from "./I18nProvider";
import Pipeline from "./Pipeline";
import { CV_URL, EMAIL, GITHUB_URL, GITHUB_USER, LINKEDIN_URL } from "../site";
import { PHOTO_SRC } from "../photo";

// Le haut de page reprend la mise en page du CV de Simon : une colonne petrole
// avec sa photo et ses coordonnees, et le contenu a droite sur fond clair.
export default function Hero() {
  const { t } = useI18n();
  const [, place, licence] = t.hero.facts;

  const lines = [
    { Icon: MapPin, text: `${place.def}, ${licence.def}` },
    { Icon: Languages, text: t.hero.facts[0].def },
    { Icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
    { Icon: Linkedin, text: "Simon Caillieret", href: LINKEDIN_URL },
    { Icon: Github, text: GITHUB_USER, href: GITHUB_URL }
  ];

  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:pb-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="hero-block fade-in rounded-2xl px-6 py-8 sm:px-8 lg:col-span-4">
          <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-[var(--hero-rule)] lg:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO_SRC}
              alt={t.hero.photoAlt}
              width={144}
              height={144}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-6 text-center text-[1.65rem] font-semibold leading-tight lg:text-left">
            Simon Caillieret
          </p>
          <p className="mt-1 text-center opacity-85 lg:text-left">{t.hero.role}</p>

          <ul className="mt-7 space-y-3 border-t border-[var(--hero-rule)] pt-6 text-[0.95rem]">
            {lines.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon aria-hidden className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                {href ? (
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="break-words underline decoration-[var(--hero-rule)] underline-offset-4 hover:decoration-current"
                  >
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex flex-col lg:col-span-8 lg:pl-4">

          <h1
            key={t.locale}
            className="fade-in mt-2 max-w-[20ch] text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-default"
          >
            {t.hero.headline.join(" ")}
          </h1>

          <p
            className="fade-in mt-6 max-w-[36em] text-lg leading-relaxed text-muted sm:text-[1.2rem]"
            style={{ animationDelay: "120ms" }}
          >
            {t.hero.intro}
          </p>

          <div className="fade-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
            <a
              href={CV_URL}
              download
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-[var(--accent)] px-5 font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              {t.hero.ctaCV}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex h-12 items-center rounded-lg border border-[var(--accent)] px-5 font-medium text-accent transition-colors hover:bg-[var(--mint)]"
            >
              {t.hero.ctaEmail}
            </a>
          </div>

          <div
            className="fade-in mt-12 border-t border-rule pt-8 [--hero-ink:var(--accent)] [--hero:var(--bg)] [--signal:var(--accent)]"
            style={{ animationDelay: "280ms" }}
          >
            <Pipeline />
          </div>
        </div>
      </div>
    </section>
  );
}