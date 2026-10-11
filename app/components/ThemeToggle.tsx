"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useI18n } from "./I18nProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t.nav.toLight : t.nav.toDark}
      title={isDark ? t.nav.toLight : t.nav.toDark}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:text-default"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
