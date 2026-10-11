"use client";

import Link from "next/link";
import { useI18n } from "./components/I18nProvider";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <main className="mx-auto flex min-h-screen max-w-page flex-col justify-center px-5 sm:px-8">
      <p className="font-mono text-accent">{t.notFound.label}</p>
      <h1 className="mt-4 text-[clamp(2.6rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-default">
        {t.notFound.title}
      </h1>
      <p className="mt-5 max-w-md text-lg text-muted">{t.notFound.description}</p>
      <p className="mt-10">
        <Link href="/" className="link text-lg font-medium">
          {t.notFound.cta}
        </Link>
      </p>
    </main>
  );
}
