"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-lg">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
            Besoin d’aide spirituelle urgente ?
          </h3>
          <p className="text-white/90">
            Retour d’affection, protection, désenvoûtement, chance, succès ou
            justice… Le Maître Ali Moussa vous accompagne avec ses puissants
            rituels.
          </p>
        </div>
        <Link
          href="/contact"
          className="btn btn-outline btn-info bold text-white"
        >
          Je contacte le Maître
        </Link>
      </div>
    </section>
  );
}
