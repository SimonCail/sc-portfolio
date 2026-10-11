"use client";

import { Check } from "lucide-react";
import { useI18n } from "./I18nProvider";

type State = "done" | "running" | "waiting";

// Le parcours de Simon dessine comme un pipeline CI : les etapes passees sont
// cochees, le Master tourne, et la derniere etape, l'alternance, attend
// le recruteur (cercle en pointilles qui pulse). C'est l'element visuel
// memorable de la page.
function Marker({ state }: { state: State }) {
  if (state === "done") {
    return (
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--hero-ink)] text-[var(--hero)]">
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  }
  if (state === "running") {
    return (
      <span className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[var(--hero-ink)]">
        <span className="spin-slow absolute inset-[-2px] rounded-full border-2 border-transparent border-t-[var(--hero-ink)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--hero-ink)]" />
      </span>
    );
  }
  return (
    <span className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-dashed border-[var(--hero-ink)]">
      <span className="pulse-ring absolute inset-0 rounded-full bg-[var(--signal)]" />
      <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--signal)]" />
    </span>
  );
}

export default function Pipeline() {
  const { t } = useI18n();
  const p = t.hero.pipeline;

  return (
    <ol aria-label={p.label} className="grid gap-0 sm:grid-cols-5">
      {p.stages.map((s, i) => {
        const state = s.state as State;
        const last = i === p.stages.length - 1;
        return (
          <li key={s.name} className="relative flex gap-4 pb-6 sm:block sm:pb-0 sm:pr-4">
            {/* Trait vers l'etape suivante : vertical sur mobile, horizontal sinon. */}
            {!last && (
              <span
                aria-hidden
                className={`absolute left-[13px] top-7 h-[calc(100%-1.75rem)] w-0.5 sm:left-7 sm:top-[13px] sm:h-0.5 sm:w-[calc(100%-1.75rem)] ${
                  state === "done" ? "bg-[var(--hero-ink)]" : "pipeline-dash"
                }`}
              />
            )}
            <Marker state={state} />
            <div className="sm:mt-3">
              <p
                className={`text-[0.97rem] font-bold leading-snug ${
                  state === "waiting" ? "underline decoration-dashed decoration-1 underline-offset-4" : ""
                }`}
              >
                {s.name}
              </p>
              <p className="text-sm opacity-75">{s.when}</p>
              <p className="sr-only">{p.states[state]}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}