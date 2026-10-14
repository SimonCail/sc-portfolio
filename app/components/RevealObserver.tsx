"use client";

import { useEffect } from "react";

// Apparition au defilement : chaque element marque `data-reveal` monte en
// fondu la premiere fois qu'il entre a l'ecran. Un seul observateur pour
// toute la page. Les elements recrees plus tard (changement de langue) sont
// repris par le MutationObserver, sinon ils resteraient invisibles.
// Le masquage initial n'est actif que si le script du <head> a pose la classe
// `js-reveal` (JS present, animations autorisees) : sans elle, tout s'affiche.
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("js-reveal")) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const watch = (scope: ParentNode) =>
      scope.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    watch(document);

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches("[data-reveal]:not(.is-in)")) io.observe(n);
          watch(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}