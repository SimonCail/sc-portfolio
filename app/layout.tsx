import type { Metadata, Viewport } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-sans/400-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { I18nProvider } from "./components/I18nProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1f20" },
    { media: "(prefers-color-scheme: light)", color: "#fbfaf6" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://simoncaillieret.vercel.app"
  ),
  title: "Simon Caillieret · Alternance DevOps à Lille",
  description:
    "Étudiant en Mastère Expert DevOps à l'EPSI de Lille (2026-2028), diplômé du BUT Informatique de l'IUT de Lens. À la recherche d'une alternance Bac+5 à Lille ou Lens.",
  keywords: [
    "Simon Caillieret",
    "portfolio",
    "alternance DevOps",
    "alternance Bac+5",
    "Mastère Expert DevOps",
    "EPSI Lille",
    "BUT Informatique",
    "IUT Lens",
    "Lille",
    "Lens"
  ],
  authors: [{ name: "Simon Caillieret" }],
  openGraph: {
    title: "Simon Caillieret · Portfolio",
    description:
      "Mastère Expert DevOps à l'EPSI de Lille. Recherche une alternance Bac+5 à Lille ou Lens.",
    type: "website",
    locale: "fr_FR",
    siteName: "Simon Caillieret"
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Caillieret · Portfolio",
    description: "Mastère Expert DevOps à l'EPSI de Lille, en recherche d'alternance Bac+5."
  }
};

// Applique le theme avant le premier rendu pour eviter un flash.
// Sans choix enregistre, on suit le reglage du systeme.
const themeInit = `
(function () {
  var t;
  try { t = localStorage.getItem("theme"); } catch (e) {}
  if (t !== "light" && t !== "dark") {
    t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.classList.add(t);
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <I18nProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}