"use client";

import { ArrowUp } from "lucide-react";
import { useI18n } from "./I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="hero-block mt-8">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-lg font-semibold">Simon Caillieret</p>
          <p className="mt-1 text-sm opacity-80">{t.footer.built}</p>
          <p className="mt-1 text-sm opacity-80">{t.footer.line(new Date().getFullYear())}</p>
        </div>
        <a
          href="#top"
          className="inline-flex items-center gap-2 self-start text-sm font-medium underline decoration-[var(--hero-rule)] underline-offset-4 hover:decoration-current sm:self-auto"
        >
          <ArrowUp aria-hidden className="h-4 w-4" />
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}