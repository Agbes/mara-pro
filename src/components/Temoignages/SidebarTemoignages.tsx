"use client";

import Link from "next/link";
import { Card, CardContent } from "./CardTemoignages";
import { Button } from "./ButtonTemoignages";

export default function SidebarTemoignages() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 space-y-8">
      {/* À propos */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-3">À propos de Maître Ali Moussa</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maître Ali Moussa est un grand médium reconnu pour ses dons spirituels.
            Spécialisé dans le retour d’affection, la prospérité et la protection
            contre les énergies négatives, il a aidé des milliers de personnes à
            transformer leur vie.
          </p>
          <Button className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white">
            Contactez-le
          </Button>
        </CardContent>
      </Card>

      {/* Catégories populaires */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-3">Catégories Populaires</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/categorie/amour" className="hover:text-amber-600">
                💕 Amour & Retour d’affection
              </Link>
            </li>
            <li>
              <Link href="/categorie/prosperite" className="hover:text-amber-600">
                💰 Chance & Prospérité
              </Link>
            </li>
            <li>
              <Link href="/categorie/protection" className="hover:text-amber-600">
                🛡️ Protection & Énergies
              </Link>
            </li>
            <li>
              <Link href="/categorie/sante" className="hover:text-amber-600">
                🌿 Santé & Bien-être
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Tags populaires */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-3">Tags Populaires</h3>
          <div className="flex flex-wrap gap-2">
            {["retour d’affection", "chance", "protection", "amour", "réussite", "karma"].map(
              (tag) => (
                <Link
                  key={tag}
                  href={`/tag/${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-amber-100"
                >
                  #{tag}
                </Link>
              )
            )}
          </div>
        </CardContent>
      </Card>

      {/* Appel à l’action */}
      <Card className="rounded-2xl shadow-md bg-gradient-to-r from-amber-500 to-amber-700 text-white">
        <CardContent className="p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Besoin d’aide immédiate ?</h3>
          <p className="mb-6">
            Contactez <strong>Maître Ali Moussa</strong> dès aujourd’hui pour une
            consultation personnalisée et retrouvez rapidement la paix et le bonheur.
          </p>
          <Button
            size="lg"
            className="bg-white text-amber-700 font-semibold hover:bg-gray-200"
          >
            📞 Contactez-le Maintenant
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
