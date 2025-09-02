"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Clock, MessageCircle, X } from "lucide-react";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [shake, setShake] = useState(false);

  // Vibration toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Bouton déclencheur fixe en bas à droite */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition relative z-50 ${
          shake ? "animate-shake" : ""
        }`}
      >
        {/* Halo pulsant */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>

        {/* Badge "Nouveau" */}
        {!open && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full shadow-md animate-bounce">
            Nouveau
          </span>
        )}

        {/* Icône */}
        <span className="relative z-10">
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </span>
      </button>

      {/* Carte contact responsive */}
      {open && (
        <div className="fixed bottom-20 right-4 w-80 max-w-[90vw] bg-white rounded-2xl shadow-xl p-6 space-y-4 z-50 animate-fadeIn sm:bottom-24 sm:right-6">
          <h2 className="text-xl font-bold text-green-700">Contact</h2>

          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-green-600" />
            <a
              href="mailto:mediumali578@gmail.com"
              className="text-gray-700 hover:text-green-700 transition"
            >
              mediumali578@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-green-600" />
            <a
              href="tel:+2290198879310"
              className="text-gray-700 hover:text-green-700 transition"
            >
              +229 01 98 87 93 10
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <a
              href="https://wa.me/2290198879310?text=Bonjour%20Medium%20Ali%2C%20je%20voudrais%20plus%20d'informations..."
              target="_blank"
              className="text-gray-700 hover:text-green-600 transition"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-green-600" />
            <p className="text-gray-700 text-sm">
              Disponible 7j/7 — Réponse rapide garantie
            </p>
          </div>
        </div>
      )}

      {/* Animation shake */}
      <style jsx>{`
        .animate-shake {
          animation: shake 0.5s;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
