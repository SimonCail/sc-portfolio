"use client";

import Section from "./Section";
import { useI18n } from "./I18nProvider";

// Le parcours est presente comme un journal : une entree par annee, la plus
// recente en haut, reliees par un trait facon "git log --graph".
export default function Parcours() {
  const { t } = useI18n();

  return (
    <Section id="parcours" title={t.journey.title} intro={t.journey.intro}>
      <ol className="relative max-w-4xl pl-9">
        {/* Trait de branche facon "git log --graph" */}
        <span aria-hidden className="absolute bottom-3 left-[7px] top-3 w-0.5 bg-[var(--rule)]" />
        {t.journey.events.map((e, i) => (
          <li key={e.year} className="relative grid gap-2 pb-9 last:pb-0 sm:grid-cols-12 sm:gap-8">
            <span
              aria-hidden
              className={`absolute -left-9 top-[0.35em] h-4 w-4 rounded-full border-2 border-[var(--accent)] ${
                i === 0 ? "bg-[var(--accent)]" : "bg-page"
              }`}
            />
            <p className="font-mono text-lg font-medium text-accent sm:col-span-2">
              {e.year}
            </p>
            <ul className="space-y-1.5 sm:col-span-9">
              {e.notes.map((n) => (
                <li key={n} className="relative pl-5 text-default">
                  <span aria-hidden className="absolute left-0 font-mono text-muted">
                    +
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}