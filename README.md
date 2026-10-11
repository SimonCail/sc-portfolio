# Portfolio — Simon Caillieret

Site portfolio personnel. Étudiant en Mastère Expert DevOps à l'EPSI de Lille
(2026-2028), diplômé du BUT Informatique de l'IUT de Lens, à la recherche d'une
alternance Bac+5 à Lille ou Lens.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3**, thèmes clair et sombre en variables CSS (`app/globals.css`)
- Polices auto-hébergées via Fontsource : IBM Plex Sans et IBM Plex Mono
- **Lucide React** pour les quelques icônes

Pas de librairie d'animation : un seul effet au chargement (les lignes du titre),
désactivé si `prefers-reduced-motion` est actif.

## Développement

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
npm run start
```

## Structure

```
app/
├── components/
│   ├── Section.tsx      # Gabarit commun des sections (titre à gauche, contenu à droite)
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx     # Liste des projets (le premier est mis en avant)
│   ├── Experience.tsx
│   ├── Parcours.tsx     # Parcours écrit comme un changelog
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── ...
├── i18n/translations.ts # FR + EN
├── site.ts              # Email, lien du CV, GitHub, LinkedIn
├── opengraph-image.tsx  # Carte de partage social
├── not-found.tsx
├── layout.tsx
└── page.tsx
```

Pour ajouter un projet : une capture dans `public/` et une entrée dans le
tableau `projects` de `app/components/Projects.tsx`.

## Déploiement

Vercel, ou Docker (`Dockerfile` multi-étapes, sortie `standalone`).

## Contact

- **Email** : simon.caillieret@gmail.com
- **LinkedIn** : [Simon Caillieret](https://www.linkedin.com/in/simon-caillieret-a8996229a/)
- **GitHub** : [@SimonCail](https://github.com/SimonCail)