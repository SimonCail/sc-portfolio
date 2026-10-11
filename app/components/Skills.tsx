"use client";

import Section from "./Section";
import { useI18n } from "./I18nProvider";

export default function Skills() {
  const { t } = useI18n();

  return (
    <Section id="competences" title={t.skills.title}>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {t.skills.groups.map((g, gi) => {
          // Le dernier groupe ("en cours d'apprentissage") a un contour en
          // pointilles : ce n'est pas encore acquis.
          const learning = gi === t.skills.groups.length - 1;
          return (
            <div key={g.name}>
              <h3 className="font-bold text-default">{g.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className={`rounded-full px-3 py-1 text-[0.95rem] ${
                      learning
                        ? "border border-dashed border-[var(--accent)] text-accent"
                        : "bg-surface border border-rule text-default"
                    }`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}