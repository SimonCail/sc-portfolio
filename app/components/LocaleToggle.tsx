"use client";

import { useI18n } from "./I18nProvider";

export default function LocaleToggle() {
  const { locale, toggle } = useI18n();
  const next = locale === "fr" ? "en" : "fr";

  return (
    <button
      type="button"
      onClick={toggle}
      lang={next}
      aria-label={next === "en" ? "Read in English" : "Lire en français"}
      className="h-9 rounded-full px-2 text-sm font-medium text-muted transition-colors hover:text-default"
    >
      {next === "en" ? "English" : "Français"}
    </button>
  );
}
