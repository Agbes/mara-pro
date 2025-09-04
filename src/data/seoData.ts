export type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  other?: Record<string, string>;
  tags?: string[];
  section?: string;
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
  type?: "WebSite" | "Article";
};

export const seoAccueil: SEOProps = {
  title: "Accueil Ali",
  description:
    "Découvrez l’univers des rituels puissants : amour, justice, protection et prospérité. Des solutions spirituelles authentiques pour transformer votre vie.",
  keywords: [
    "rituels spirituels",
    "rituels d’amour",
    "rituels de justice",
    "rituels de protection",
    "rituels de prospérité",
    "solutions spirituelles",
    "rituel puissant",
  ],
  path: "/",
  tags: ["rituels", "amour", "justice", "protection", "prospérité"],
  section: "Accueil",
  authorName: "Medium Ali Moussa",
  type: "WebSite",
  other: { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE || "" },
};

export const seoRetourAffectif: SEOProps = {
  title: "Rituels Mystiques pour le Retour Affectif et la Réconciliation Amoureuse",
  description:
    "Découvrez nos rituels puissants pour réunir les couples, raviver les sentiments et attirer l'amour perdu. Une tradition mystique transmise depuis plus de 40 ans.",
  keywords: [
    "retour affectif",
    "rituel retour affectif",
    "rituel retour affectif avec photo",
    "medium retour affectif",
  ],
  path: "/rituels/retour-affectif",
  tags: ["retour affectif", "amour", "réconciliation", "couple"],
  section: "Retour Affectif",
  authorName: "Medium Ali Moussa",
  type: "Article",
  other: { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE || "" },
};

export const seoEnvoutement: SEOProps = {
  title: "Rituels Mystiques d'Envoutement et d'Attraction Puissante",
  description:
    "Rituels d'envoutement pour attirer l'amour, la chance, la réussite et l'harmonie. Des pratiques ancestrales puissantes et efficaces pour transformer votre vie.",
  keywords: [
    "envoutement",
    "rituel attraction",
    "rituel amour puissant",
    "envoutement chance",
    "envoutement réussite",
  ],
  path: "/rituels/envoutement",
  tags: ["envoutement", "amour", "chance", "réussite", "attraction"],
  section: "Envoutement",
  authorName: "Medium Ali Moussa",
  type: "Article",
};

export const seoJustice: SEOProps = {
  title: "Rituels Mystiques pour Affaires de Justice et Protection Juridique",
  description:
    "Découvrez nos rituels mystiques pour résoudre vos affaires de justice, protéger vos droits et réussir vos démarches juridiques grâce à un savoir ancestral.",
  keywords: [
    "rituel pour gagner une affaire de justice",
    "gagner une affaire de justice rapidement",
    "rituel pour gagner un procès",
    "marabout Ali Moussa",
  ],
  path: "/rituels/affaires-justice",
  tags: ["justice", "procès", "protection juridique", "rituel puissant"],
  section: "Justice",
  authorName: "Medium Ali Moussa",
  type: "Article",
};

export const seoGalerie: SEOProps = {
  title: "Galerie Mystique : Rituels, Cérémonies et Transformations",
  description:
    "Parcourez notre galerie mystique illustrant les rituels et cérémonies spirituelles qui ont transformé la vie de milliers de personnes à travers le monde.",
  keywords: [
    "galerie rituels",
    "photos mystiques",
    "rituels spirituels",
    "cérémonies mystiques",
    "tradition ancestrale",
  ],
  path: "/galerie",
  tags: ["galerie", "rituels", "cérémonies", "transformation"],
  section: "Galerie",
  authorName: "Medium Ali Moussa",
  type: "WebSite",
};

export const seoTemoignages: SEOProps = {
  title: "Témoignages de Clients : Rituels Mystiques et Résultats Réels",
  description:
    "Découvrez les témoignages authentiques de clients ayant expérimenté nos rituels mystiques : retour affectif, envoutement, chance, prospérité et justice.",
  keywords: [
    "témoignages rituels",
    "avis retour affectif",
    "succès envoutement",
    "témoignages chance",
    "rituels prospérité",
  ],
  path: "/temoignages",
  tags: ["témoignages", "clients", "retour affectif", "envoutement"],
  section: "Témoignages",
  authorName: "Medium Ali Moussa",
  type: "WebSite",
};

export const seoRituels: SEOProps = {
  title: "Tous les Rituels Mystiques : Amour, Chance, Prospérité et Protection",
  description:
    "Explorez notre collection complète de rituels mystiques : retour affectif, envoutement, désenvoutement, prospérité, travail, protection et affaires de justice. Découvrez la puissance d'une tradition ancestrale transmise depuis plus de 40 ans.",
  keywords: [
    "tous les rituels",
    "rituels mystiques",
    "retour affectif",
    "envoutement",
    "désenvoutement",
    "rituel prospérité",
    "rituel protection",
  ],
  path: "/rituels",
  tags: ["rituels", "amour", "chance", "prospérité", "protection"],
  section: "Rituels",
  authorName: "Medium Ali Moussa",
  type: "WebSite",
};

export const seoContact: SEOProps = {
  title: "Contactez-nous pour vos Rituels Mystiques et Consultations",
  description:
    "Prenez contact avec nous pour toute demande de rituel mystique : retour affectif, chance, prospérité, affaires de justice et protection. Réponse rapide et discrète.",
  keywords: [
    "contact rituels",
    "contact retour affectif",
    "contact envoutement",
    "consultation mystique",
    "aide spirituelle",
  ],
  path: "/contact",
  tags: ["contact", "consultation", "rituels", "aide spirituelle"],
  section: "Contact",
  authorName: "Medium Ali Moussa",
  type: "WebSite",
};

export const seoPropos: SEOProps = {
  title: "À propos d’Ali Moussa – Héritier d’un Savoir Mystique Ancestral",
  description:
    "Découvrez le parcours d’Ali Moussa, maître mystique héritier d’un savoir ancestral transmis par son grand-père depuis plus de 40 ans. Une expertise reconnue dans le retour affectif, l’envoutement, la prospérité et la protection.",
  keywords: [
    "à propos Ali Moussa",
    "héritier savoir mystique",
    "tradition ancestrale",
    "rituels retour affectif",
    "rituels prospérité",
    "rituels protection",
  ],
  path: "/a-propos",
  tags: ["Ali Moussa", "maître mystique", "tradition ancestrale"],
  section: "À propos",
  authorName: "Medium Ali Moussa",
  type: "WebSite",
};
