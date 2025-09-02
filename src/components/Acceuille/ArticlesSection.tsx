"use client";

import Link from "next/link";
import ArticleCard from "./ArticleCard";

export default function ArticlesSection() {
  const articles = [
    {
      img: "/images/rituel-amour.jpg",
      alt: "Rituel retour d’affection",
      title: "Rituel de retour d’affection",
      text: "Découvrez comment le Maître Ali Moussa aide à rétablir l’harmonie dans les couples et ramener l’être aimé.",
      date: "12 août 2025",
    },
    {
      img: "/images/protection.jpg",
      alt: "Rituel de protection",
      title: "Rituel de protection",
      text: "Se protéger contre les énergies négatives, la jalousie et les attaques mystiques grâce aux anciens savoirs.",
      date: "3 août 2025",
    },
    {
      img: "/images/desenvoutement.jpg",
      alt: "Désenvoûtement",
      title: "Rituel de désenvoûtement",
      text: "Libérez-vous des blocages spirituels, malédictions et influences occultes qui freinent votre vie.",
      date: "28 juillet 2025",
    },
    {
      img: "/images/chance.jpg",
      alt: "Chance et prospérité",
      title: "Chance & Prospérité",
      text: "Attirez la réussite et ouvrez les portes de l’abondance avec un rituel de chance sur mesure.",
      date: "20 juillet 2025",
    },
    {
      img: "/images/justice.jpg",
      alt: "Rituel de justice",
      title: "Rituel de justice",
      text: "Favoriser la vérité et obtenir gain de cause lors des procès ou litiges importants.",
      date: "10 juillet 2025",
    },
    {
      img: "/images/famille.jpg",
      alt: "Amour et harmonie familiale",
      title: "Amour & Harmonie familiale",
      text: "Réconcilier les couples, apaiser les tensions familiales et ramener la paix dans le foyer.",
      date: "1 juillet 2025",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
        Quelques articles sur mes rituels
      </h2>

      {/* Container flex avec items-stretch */}
      <div className="flex flex-wrap justify-center items-stretch gap-8">
        {articles.map((article, i) => (
          <ArticleCard key={i} {...article} />
        ))}
      </div>

      {/* Bouton consulter plus */}
      <div className="mt-12 text-center">
        <Link
          href="/rituels"
          className="px-6 py-3 text-base rounded-xl bg-cyan-700 text-white font-semibold hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-400/50 transition"
        >
          Consulter les autres articles →
        </Link>
      </div>
    </section>
  );
}
