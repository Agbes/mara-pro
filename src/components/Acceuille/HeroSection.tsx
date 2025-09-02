"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
      {/* Badge */}
      <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
        Rituels et Satisfaction
      </span>

      {/* Container texte + image */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Texte */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Ali Moussa – Maîtrise Mystique pour Retour Affectif, Chance, Prospérité et Justice
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Je suis Ali Moussa, héritier d&apos;une tradition mystique transmise par mon grand-père depuis plus de quarante ans. 
            Grâce à cette expérience unique, j&apos;accompagne des personnes du monde entier à retrouver l&apos;amour perdu, 
            lever les malédictions, attirer la chance et la prospérité, résoudre des affaires de justice ou soulager 
            les maladies spirituelles. Mon approche puissante et personnelle a permis à de nombreux clients de vivre la 
            satisfaction et la transformation qu&apos;ils recherchaient. Chaque rituel que je pratique est le fruit d&apos;un savoir 
            ancestral perfectionné par des décennies d&apos;expérience, garantissant des résultats fiables et durables. 
            Faites le choix de la sagesse et de la puissance mystique : votre bonheur et votre réussite sont entre de bonnes mains.
          </p>

          {/* Boutons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/propos"
              className="px-6 py-3 rounded-xl bg-cyan-600 text-white font-semibold shadow hover:bg-cyan-700 transition"
            >
              Qui suis-je
            </Link>
            <Link
              href="/rituels"
              className="px-6 py-3 rounded-xl border border-slate-300 font-semibold text-gray-700 hover:bg-slate-50 transition"
            >
              Mes Rituels
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            src="/images/ali-moussa.jpg"
            alt="Grand Marabout Médium Ali Moussa"
            width={450}
            height={450}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
        <div className="flex-1 min-w-[200px] max-w-[250px] p-4 rounded-2xl bg-white shadow hover:shadow-md transition text-center">
          <div className="text-3xl font-extrabold text-cyan-600">1500+</div>
          <div className="text-slate-600 text-sm">Témoignages Reçus</div>
        </div>
        <div className="flex-1 min-w-[200px] max-w-[250px] p-4 rounded-2xl bg-white shadow hover:shadow-md transition text-center">
          <div className="text-3xl font-extrabold text-cyan-600">30+</div>
          <div className="text-slate-600 text-sm">Certificats Reçus</div>
        </div>
        <div className="flex-1 min-w-[200px] max-w-[250px] p-4 rounded-2xl bg-white shadow hover:shadow-md transition text-center">
          <div className="text-3xl font-extrabold text-cyan-600">+40ans</div>
          <div className="text-slate-600 text-sm">Années d&apos;expérience</div>
        </div>
      </div>
    </section>
  );
}
