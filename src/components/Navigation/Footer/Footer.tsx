import React from "react";
import Link from "next/link";
import { navLinks } from "@/lib/navLinks";

export default function Footer() {
  return (
    <footer className="mt-24 bg-slate-50 border-t border-slate-200">
      {/* Bouton WhatsApp flottant avec texte et ondes */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-3">
        <span className="animate-bounce bg-slate-900/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl shadow-md text-center leading-snug">
          Contacter le médium Ali
        </span>

        <Link
          href="https://wa.me/2290198879310"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ouvrir WhatsApp"
          className="group relative block"
        >
          {/* Ondes (ripple) */}
          <span
            className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-green-500/30 animate-ping"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute inset-0 -m-4 rounded-full bg-green-500/20 animate-ping"
            style={{ animationDelay: "0.9s" }}
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute inset-0 -m-6 rounded-full ring-2 ring-green-400/30 animate-ping"
            style={{ animationDelay: "1.8s" }}
            aria-hidden="true"
          />

          {/* Bouton principal */}
          <span className="relative inline-flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 2.121.552 4.184 1.6 6.016L.05 24l6.154-1.6A11.94 11.94 0 0 0 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 22a9.94 9.94 0 0 1-5.229-1.5l-.373-.223-3.652.951.974-3.555-.243-.382A9.946 9.946 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.166-7.084c-.283-.141-1.676-.828-1.937-.922-.26-.095-.449-.141-.639.142-.19.283-.732.922-.896 1.111-.165.19-.33.213-.613.071-.283-.142-1.196-.441-2.278-1.405-.842-.75-1.41-1.677-1.574-1.96-.165-.283-.017-.437.124-.578.127-.126.283-.33.425-.495.142-.165.189-.283.283-.472.095-.19.047-.355-.024-.496-.071-.142-.639-1.54-.875-2.111-.23-.554-.465-.479-.639-.487l-.546-.01c-.19 0-.497.071-.758.355s-.995.971-.995 2.368c0 1.397 1.019 2.743 1.16 2.932.142.189 2.003 3.058 4.858 4.29.679.293 1.209.469 1.623.599.682.217 1.302.186 1.792.113.547-.081 1.676-.684 1.911-1.345.236-.661.236-1.228.165-1.345-.07-.117-.26-.188-.543-.329z" />
            </svg>
            <span className="sr-only">Contacter sur WhatsApp</span>
          </span>
        </Link>
      </div>

      {/* Contenu du footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        {/* Bloc présentation */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-8 h-8 rounded-xl bg-cyan-600"></span>
            <span className="font-extrabold text-lg">Maître Ali</span>
          </div>
          <p className="text-slate-600">
            Grand maître spirituel et voyant traditionnel, spécialiste des rituels
            d’amour, de protection, de chance et de prospérité.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-cyan-600" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Infos légales */}
        <div>
          <h4 className="font-semibold mb-3">Informations</h4>
          <ul className="space-y-2 text-slate-700">
            <li>
              <Link href="/" className="hover:text-cyan-600">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-cyan-600">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-cyan-600">
                Conditions d’utilisation
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-slate-700">
            <Link href="mailto:mediumali578@gmail.com" className="hover:text-cyan-600">
              mediumali578@gmail.com
            </Link>
          </p>
          <p className="text-slate-700">
            <Link href="tel:+2290198879310" className="hover:text-cyan-600">
              +229 01 98 87 93 10
            </Link>
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Disponible 7j/7 — Réponse rapide garantie.
          </p>
        </div>
      </div>

      <div className="text-center text-slate-500 text-sm pb-8">
        © 2025 Maître Ali — Rituels traditionnels et accompagnement spirituel.
      </div>
    </footer>
  );
}
