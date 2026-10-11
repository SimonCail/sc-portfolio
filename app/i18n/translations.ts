export const translations = {
  fr: {
    locale: "fr" as const,
    skip: "Aller au contenu",
    nav: {
      projects: "Projets",
      experience: "Expériences",
      journey: "Parcours",
      skills: "Compétences",
      contact: "Contact",
      menu: "Ouvrir le menu",
      close: "Fermer le menu",
      toLight: "Passer en thème clair",
      toDark: "Passer en thème sombre"
    },
    hero: {
      role: "Développeur Expert DevOps",
      kicker: "Recherche d'alternance Bac+5",
      photoAlt: "Photo de Simon Caillieret",
      headline: ["Je cherche une", "alternance DevOps", "à Lille ou Lens."],
      intro:
        "Je suis Simon Caillieret. Après un BUT Informatique tourné vers le développement, je suis entré en Mastère Expert DevOps à l'EPSI de Lille. Je veux travailler sur ce qui se passe après le code : l'automatisation, les conteneurs, le déploiement et la supervision.",
      facts: [
        { term: "Langues", def: "Français, anglais B2" },
        { term: "Mobilité", def: "Lille, Lens et alentours" },
        { term: "Permis", def: "Permis B" }
      ],
      pipeline: {
        label: "Mon parcours, vu comme un pipeline",
        states: { done: "Terminé", running: "En cours", waiting: "En attente" },
        stages: [
          { name: "Bac NSI", when: "2022", state: "done" },
          { name: "BUT Informatique", when: "2023 à 2026", state: "done" },
          { name: "Deux stages dev", when: "2025 et 2026", state: "done" },
          { name: "Mastère DevOps", when: "2026 à 2028", state: "running" },
          { name: "Alternance", when: "Dans votre équipe ?", state: "waiting" }
        ]
      },
      ctaCV: "Télécharger mon CV",
      ctaEmail: "M'écrire"
    },
    projects: {
      title: "Projets",
      intro:
        "Des applications que j'utilise moi-même, des projets d'équipe à l'IUT et un hackathon de 36 heures.",
      context: {
        personal: "Projet personnel",
        team: "Projet en équipe",
        hackathon: "Hackathon de 36 h",
        academic: "Projet académique"
      },
      demo: "Ouvrir le site",
      code: "Voir le code",
      api: "Code de l'API",
      privateCode: "Code privé",
      seeAll: "Tous mes dépôts sur GitHub",
      video: "Vidéo de démonstration de",
      others: "Autres projets"
    },
    experience: {
      title: "Expériences",
      intro:
        "Deux stages de développement en entreprise, en équipe et sur du code qui part en production.",
      pulp: {
        company: "Pulp Immobilier",
        role: "Stagiaire développement full-stack",
        period: "Mars à août 2026",
        description:
          "Deux applications branchées sur le CRM immobilier interne : ec-bob, l'espace client des propriétaires et acquéreurs, et bobdocs, l'espace qui génère les documents de l'agence.",
        achievements: [
          "ec-bob : espace client en React 19 et TypeScript, avec tableau de bord, biens sur carte Leaflet, affaires, recherches sauvegardées, documents et profil",
          "ec-bob : PWA installable, authentification par jeton Sanctum, front séparé qui consomme l'API du CRM",
          "bobdocs : génération en PDF des mandats, avenants, compromis et baux à partir de modèles configurables",
          "bobdocs : brouillons, historique des générations rejouable et connexion depuis le CRM par URL signée",
          "Revues de code et pair programming avec l'équipe"
        ],
        stack: "React, TypeScript, Next.js, Laravel, Tailwind"
      },
      grow: {
        company: "Grow Your Business",
        role: "Stagiaire développement web",
        period: "Mai à juin 2025",
        description:
          "Une application mobile d'audits terrain pour la société ERESE, et des sites vitrines pour des clients.",
        achievements: [
          "Application mobile en Vue.js pour les audits terrain d'ERESE",
          "Sites vitrines clients sous WordPress",
          "Travail en méthode Agile, premiers échanges directs avec des clients"
        ],
        stack: "Vue.js, WordPress, PHP"
      },
      sideJobs: {
        title: "À côté des études",
        items: [
          { label: "Infographiste chez FDB Décoration", detail: "Stage, avril à juin 2023" },
          { label: "Agent de tri chez Viapost", detail: "Job d'été, 2023" },
          { label: "Employé technique à la mairie de Souchez", detail: "Job d'été, 2024" }
        ]
      },
      cvLink: "Le détail est dans mon CV"
    },
    journey: {
      title: "Parcours",
      intro: "Année par année, du bac au Mastère.",
      events: [
        {
          year: "2026",
          notes: [
            "Entrée en Mastère Expert DevOps à l'EPSI Lille",
            "BUT Informatique obtenu à l'IUT de Lens",
            "Stage chez Pulp Immobilier : espace client et espace documents",
            "Projets perso : Vinyl Wishlist, fit-tracker, cahier-appel, heures-delegation"
          ]
        },
        {
          year: "2025",
          notes: [
            "Stage chez Grow Your Business : app Vue.js et sites WordPress",
            "Location-MaskCar en équipe : Angular et API Laravel"
          ]
        },
        {
          year: "2024",
          notes: [
            "Marathon du Web : 36 heures, équipe de 8, site en PHP et MySQL",
            "Bomberman en Java à 4, interface JavaFX"
          ]
        },
        {
          year: "2023",
          notes: [
            "Début du BUT Informatique à Lens, parcours réalisation d'applications",
            "Premier stage, en infographie"
          ]
        },
        {
          year: "2022",
          notes: ["Bac général, spécialités mathématiques et NSI, lycée Saint-Paul de Lens"]
        }
      ]
    },
    skills: {
      title: "Compétences",
      groups: [
        { name: "Back-end", items: ["Python", "Java", "JavaScript", "PHP", "API REST", "SQL", "MongoDB", "Neo4j"] },
        { name: "Front-end", items: ["React", "Next.js", "Vue.js", "TypeScript", "HTML et CSS", "Tailwind"] },
        { name: "Outils", items: ["Git, GitHub, GitLab", "Docker", "CI/CD", "Linux et Windows", "Agile et Scrum"] },
        { name: "En cours d'apprentissage", items: ["Kubernetes", "Terraform", "Observabilité"] }
      ]
    },
    contact: {
      title: "Vous recrutez un alternant ?",
      intro:
        "Le plus simple est de m'écrire. Je réponds vite et je peux passer vous rencontrer à Lille ou à Lens.",
      copy: "Copier l'adresse",
      copied: "Adresse copiée",
      other: "Ailleurs",
      cv: "CV en PDF",
      rows: { email: "E-mail", linkedin: "LinkedIn", github: "GitHub", cv: "CV", place: "Basé à" },
      cvValue: "Télécharger le PDF",
      placeValue: "Lille, Lens et alentours"
    },
    footer: {
      line: (year: number) => `© ${year} Simon Caillieret`,
      built: "Codé avec Next.js et Tailwind, hébergé sur Vercel.",
      top: "Remonter en haut"
    },
    notFound: {
      label: "Erreur 404",
      title: "Cette page n'existe pas.",
      description: "Le lien est cassé ou la page a été déplacée.",
      cta: "Retour à l'accueil"
    }
  },
  en: {
    locale: "en" as const,
    skip: "Skip to content",
    nav: {
      projects: "Projects",
      experience: "Experience",
      journey: "Journey",
      skills: "Skills",
      contact: "Contact",
      menu: "Open menu",
      close: "Close menu",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme"
    },
    hero: {
      role: "DevOps Expert developer",
      kicker: "Looking for a Master's-level apprenticeship",
      photoAlt: "Photo of Simon Caillieret",
      headline: ["I'm looking for a", "DevOps apprenticeship", "in Lille or Lens."],
      intro:
        "I'm Simon Caillieret. After a development-focused computer science degree, I started a DevOps Expert Master's at EPSI Lille. I want to work on what happens after the code: automation, containers, deployment and monitoring.",
      facts: [
        { term: "Languages", def: "French, English B2" },
        { term: "Based in", def: "Lille, Lens and around" },
        { term: "Licence", def: "Full driving licence" }
      ],
      pipeline: {
        label: "My path, seen as a pipeline",
        states: { done: "Done", running: "Running", waiting: "Waiting" },
        stages: [
          { name: "Baccalauréat", when: "2022", state: "done" },
          { name: "CS degree (BUT)", when: "2023 to 2026", state: "done" },
          { name: "Two dev internships", when: "2025 and 2026", state: "done" },
          { name: "DevOps Master's", when: "2026 to 2028", state: "running" },
          { name: "Apprenticeship", when: "On your team?", state: "waiting" }
        ]
      },
      ctaCV: "Download my résumé",
      ctaEmail: "Email me"
    },
    projects: {
      title: "Projects",
      intro:
        "Apps I use myself, team projects from university and a 36-hour hackathon.",
      context: {
        personal: "Personal project",
        team: "Team project",
        hackathon: "36-hour hackathon",
        academic: "Academic project"
      },
      demo: "Open the site",
      code: "View the code",
      api: "API code",
      privateCode: "Private code",
      seeAll: "All my repositories on GitHub",
      video: "Demo video of",
      others: "Other projects"
    },
    experience: {
      title: "Experience",
      intro: "Two development internships, working in a team on code that ships to production.",
      pulp: {
        company: "Pulp Immobilier",
        role: "Full-stack development intern",
        period: "March to August 2026",
        description:
          "Two applications plugged into the in-house real-estate CRM: ec-bob, the portal for owners and buyers, and bobdocs, the workspace that generates the agency's paperwork.",
        achievements: [
          "ec-bob: client portal in React 19 and TypeScript, with a dashboard, listings on a Leaflet map, deals, saved searches, documents and profile",
          "ec-bob: installable PWA, Sanctum token auth, separate front end consuming the CRM API",
          "bobdocs: PDF generation of mandates, amendments, sale agreements and leases from configurable templates",
          "bobdocs: drafts, replayable generation history and sign-in from the CRM through signed URLs",
          "Code reviews and pair programming with the team"
        ],
        stack: "React, TypeScript, Next.js, Laravel, Tailwind"
      },
      grow: {
        company: "Grow Your Business",
        role: "Web development intern",
        period: "May to June 2025",
        description:
          "A mobile field-audit app for the company ERESE, and showcase websites for clients.",
        achievements: [
          "Vue.js mobile app for ERESE's field audits",
          "Client showcase sites on WordPress",
          "Agile workflow, first direct contact with clients"
        ],
        stack: "Vue.js, WordPress, PHP"
      },
      sideJobs: {
        title: "Alongside my studies",
        items: [
          { label: "Graphic designer at FDB Décoration", detail: "Internship, April to June 2023" },
          { label: "Mail sorter at Viapost", detail: "Summer job, 2023" },
          { label: "Maintenance worker at Souchez town hall", detail: "Summer job, 2024" }
        ]
      },
      cvLink: "More detail in my résumé"
    },
    journey: {
      title: "Journey",
      intro: "Year by year, from high school to the Master's.",
      events: [
        {
          year: "2026",
          notes: [
            "Started the DevOps Expert Master's at EPSI Lille",
            "Graduated from the BUT in Computer Science at IUT Lens",
            "Internship at Pulp Immobilier: client portal and document workspace",
            "Side projects: Vinyl Wishlist, fit-tracker, cahier-appel, heures-delegation"
          ]
        },
        {
          year: "2025",
          notes: [
            "Internship at Grow Your Business: Vue.js app and WordPress sites",
            "Location-MaskCar as a team: Angular and a Laravel API"
          ]
        },
        {
          year: "2024",
          notes: [
            "Marathon du Web: 36 hours, team of 8, PHP and MySQL site",
            "Bomberman in Java with 3 classmates, JavaFX interface"
          ]
        },
        {
          year: "2023",
          notes: [
            "Started the BUT in Computer Science in Lens, application development track",
            "First internship, in graphic design"
          ]
        },
        {
          year: "2022",
          notes: ["French baccalauréat, maths and computer science majors, Saint-Paul high school in Lens"]
        }
      ]
    },
    skills: {
      title: "Skills",
      groups: [
        { name: "Back end", items: ["Python", "Java", "JavaScript", "PHP", "REST APIs", "SQL", "MongoDB", "Neo4j"] },
        { name: "Front end", items: ["React", "Next.js", "Vue.js", "TypeScript", "HTML and CSS", "Tailwind"] },
        { name: "Tools", items: ["Git, GitHub, GitLab", "Docker", "CI/CD", "Linux and Windows", "Agile and Scrum"] },
        { name: "Currently learning", items: ["Kubernetes", "Terraform", "Observability"] }
      ]
    },
    contact: {
      title: "Hiring an apprentice?",
      intro:
        "Email is the easiest way to reach me. I reply quickly and can come and meet you in Lille or Lens.",
      copy: "Copy address",
      copied: "Address copied",
      other: "Elsewhere",
      cv: "Résumé as PDF",
      rows: { email: "Email", linkedin: "LinkedIn", github: "GitHub", cv: "Résumé", place: "Based in" },
      cvValue: "Download the PDF",
      placeValue: "Lille, Lens and around"
    },
    footer: {
      line: (year: number) => `© ${year} Simon Caillieret`,
      built: "Built with Next.js and Tailwind, hosted on Vercel.",
      top: "Back to top"
    },
    notFound: {
      label: "Error 404",
      title: "This page doesn't exist.",
      description: "The link is broken or the page has moved.",
      cta: "Back to home"
    }
  }
} as const;

export type Locale = keyof typeof translations;
export type Translation = (typeof translations)[Locale];