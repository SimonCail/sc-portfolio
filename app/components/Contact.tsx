"use client";

import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import { useI18n } from "./I18nProvider";
import { CV_URL, EMAIL, GITHUB_URL, GITHUB_USER, LINKEDIN_URL } from "../site";

// Meme gabarit que les autres sections (titre colle a gauche). Les
// coordonnees sont presentees comme le bloc contact d'un CV : une ligne par
// moyen de contact, libelle a gauche, valeur a droite.
export default function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* le lien mailto reste disponible */
    }
  };

  const rows = [
    { label: t.contact.rows.linkedin, value: "Simon Caillieret", href: LINKEDIN_URL, external: true },
    { label: t.contact.rows.github, value: `@${GITHUB_USER}`, href: GITHUB_URL, external: true },
    { label: t.contact.rows.cv, value: t.contact.cvValue, href: CV_URL, download: true },
    { label: t.contact.rows.place, value: t.contact.placeValue }
  ];

  return (
    <Section id="contact" title={t.nav.contact}>
      <p className="max-w-[22ch] text-[clamp(1.8rem,3.6vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.015em] text-default">
        {t.contact.title}
      </p>
      <p className="mt-4 max-w-[36em] text-lg text-muted">{t.contact.intro}</p>

      {/* L'adresse e-mail est l'action principale : un grand bloc petrole. */}
      <div className="hero-block mt-10 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="min-w-0">
          <p className="text-sm opacity-80">{t.contact.rows.email}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-1 block break-all text-[clamp(1.25rem,2.6vw,1.9rem)] font-semibold underline decoration-[var(--hero-rule)] decoration-1 underline-offset-[6px] hover:decoration-current"
          >
            {EMAIL}
          </a>
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-lg bg-[var(--hero-ink)] px-4 font-medium text-[var(--hero)] transition-opacity hover:opacity-90 sm:self-auto"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
        </button>
      </div>

      <dl className="mt-8 divide-y divide-[var(--rule)] border-y border-rule">
        {rows.map((r) => (
          <div key={r.label} className="flex items-baseline justify-between gap-6 py-4">
            <dt className="text-muted">{r.label}</dt>
            <dd className="min-w-0 text-right">
              {r.href ? (
                <a
                  href={r.href}
                  {...(r.download ? { download: true } : {})}
                  {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="link inline-flex items-center gap-1.5 font-medium"
                >
                  {r.value}
                  {r.download ? (
                    <Download aria-hidden className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight aria-hidden className="h-4 w-4" />
                  )}
                </a>
              ) : (
                <span className="text-default">{r.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}