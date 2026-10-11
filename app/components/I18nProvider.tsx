"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { translations, type Locale, type Translation } from "../i18n/translations";

const I18nContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: Translation;
}>({
  locale: "fr",
  setLocale: () => {},
  toggle: () => {},
  t: translations.fr
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("locale") as Locale | null;
      const initial: Locale =
        stored === "fr" || stored === "en"
          ? stored
          : navigator.language.toLowerCase().startsWith("en")
            ? "en"
            : "fr";
      setLocaleState(initial);
      document.documentElement.lang = initial;
    } catch {
      /* noop */
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("locale", l);
    } catch {
      /* noop */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "fr" ? "en" : "fr");
  }, [locale, setLocale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, toggle, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
