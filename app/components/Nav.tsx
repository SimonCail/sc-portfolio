"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LocaleToggle from "./LocaleToggle";
import { useI18n } from "./I18nProvider";
import Logo from "./Logo";
import { delay } from "../motion";

export default function Nav() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#projets", label: t.nav.projects },
    { href: "#experiences", label: t.nav.experience },
    { href: "#parcours", label: t.nav.journey },
    { href: "#competences", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact }
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav-in sticky top-0 z-40 border-b border-rule bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-sm">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        {t.skip}
      </a>
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="logo-link flex items-center gap-2.5 text-[1.05rem] font-bold tracking-[-0.01em] text-default"
        >
          <Logo animate className="h-8 w-8 shrink-0" />
          <span className="rise" style={delay(700)}>
            Simon Caillieret
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[0.95rem] text-muted transition-colors hover:text-default">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <LocaleToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="grid h-9 w-9 place-items-center rounded-full text-default lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-rule px-5 pb-4 pt-2 sm:px-8 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium text-default"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}