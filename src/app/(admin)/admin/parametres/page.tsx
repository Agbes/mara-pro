"use client";

import { useEffect, useState } from "react";

export default function ParametrePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d’un chargement (ex: appel API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          {/* Loader */}
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Chargement en cours...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800">
        La page des paramètres sera bientôt disponible 🚀
      </h1>
    </div>
  );
}
