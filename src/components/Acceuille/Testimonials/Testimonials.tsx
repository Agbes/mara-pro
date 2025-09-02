"use client";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      initial: "A",
      color: "bg-rose-600",
      name: "A. Fatou",
      category: "Retour d’affection",
      text: "Mon mari était parti depuis 6 mois… Grâce au Marabout Ali Moussa, il est revenu plein d’amour en moins de 2 semaines.",
    },
    {
      initial: "K",
      color: "bg-sky-500",
      name: "K. Mamadou",
      category: "Protection",
      text: "J’étais victime de jalousies et attaques mystiques au travail. Depuis son rituel de protection, je dors enfin tranquille.",
    },
    {
      initial: "D",
      color: "bg-emerald-500",
      name: "D. Aïssata",
      category: "Justice",
      text: "J’avais un procès compliqué, mais avec son soutien spirituel, j’ai remporté l’affaire contre toute attente.",
    },
    {
      initial: "S",
      color: "bg-indigo-500",
      name: "S. Ibrahim",
      category: "Chance & Succès",
      text: "Depuis son rituel, j’ai trouvé un nouvel emploi et mes affaires prospèrent. La chance m’accompagne désormais.",
    },
    {
      initial: "R",
      color: "bg-amber-500",
      name: "R. Mariam",
      category: "Désenvoûtement",
      text: "Je me sentais bloquée dans tous les aspects de ma vie. Après le désenvoûtement, mes projets avancent enfin.",
    },
    {
      initial: "Y",
      color: "bg-purple-600",
      name: "Y. Souleymane",
      category: "Amour & Famille",
      text: "Notre couple était au bord du divorce… Aujourd’hui nous sommes plus soudés que jamais. Merci maître !",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <h2 className="text-2xl md:text-3xl font-extrabold">Témoignages</h2>

      {/* Container flex au lieu de grid */}
      <div className="mt-6 flex flex-wrap justify-center items-stretch gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="w-full sm:w-[48%] lg:w-[30%] flex">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </section>
  );
}
