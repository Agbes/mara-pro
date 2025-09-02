"use client";

import { Mail, Phone, Clock } from "lucide-react";

export default function ContactArticle() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold text-center text-cyan-700">Contact</h2>

      <div className="flex items-center space-x-3">
        <Mail className="w-5 h-5 text-cyan-600" />
        <a
          href="mailto:mediumali578@gmail.com"
          className="text-gray-700 hover:text-cyan-700 transition"
        >
          mediumali578@gmail.com
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <Phone className="w-5 h-5 text-cyan-600" />
        <a
          href="tel:+2290198879310"
          className="text-gray-700 hover:text-cyan-700 transition"
        >
          +229 01 98 87 93 10
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <Clock className="w-5 h-5 text-cyan-600" />
        <p className="text-gray-700">Disponible 7j/7 — Réponse rapide garantie</p>
      </div>
    </div>
  );
}
