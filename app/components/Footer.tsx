"use client";

import { ArrowUp } from "lucide-react";
import { useI18n } from "./I18nProvider";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="hero-block mt-8">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div className="flex items-start gap-4">
          {/* Sur le bloc petrole, la tuile passe en clair pour rester visible. */}
          <Logo className="h-11 w-11 shrink-0 [--hero-ink:#0f5052] [--hero:#fffdfa] [--signal:#5fb8ae]" />
          <div>
            <p className="text-lg font-semibold">Simon Caillieret</p>
            <p className="mt-1 text-sm opacity-80">{t.footer.built}</p>
            <p className="mt-1 text-sm opacity-80">{t.footer.line(new Date().getFullYear())}</p>
          </div>
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