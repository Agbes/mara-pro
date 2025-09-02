"use client";

import Link from "next/link";
import { Heart, Shield, Sparkles, Cross, Baby, Coins, Sun, Moon, Gem, Crown } from "lucide-react";

export default function DomainsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <h2 className="text-2xl md:text-3xl font-extrabold">Par où commencer ?</h2>
      <p className="mt-2 text-slate-600">
        Découvrez les principaux domaines dans lesquels le Grand Marabout Médium Ali Moussa peut intervenir.
      </p>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Retour affectif */}
        <Card icon={<Heart className="w-6 h-6 text-red-500" />} title="Retour d’affection" href="#amour" color="red">
          Rituels puissants pour retrouver l’amour perdu, rétablir la confiance, favoriser la fidélité et renforcer durablement les liens amoureux.
        </Card>

        {/* Protection & Justice */}
        <Card icon={<Shield className="w-6 h-6 text-green-600" />} title="Justice & Protection" href="#justice" color="green">
          Aide dans les affaires judiciaires, protection contre les ennemis visibles et invisibles, victoire et triomphe face aux injustices de la vie.
        </Card>

        {/* Envoûtement */}
        <Card icon={<Sparkles className="w-6 h-6 text-purple-600" />} title="Envoûtement & Désenvoûtement" href="#rituels" color="purple">
          Suppression des sorts, purification spirituelle complète, ouverture des chemins vers la réussite et amélioration continue de la chance.
        </Card>

        {/* Santé */}
        <Card icon={<Cross className="w-6 h-6 text-rose-600" />} title="Guérir les maladies" href="#sante" color="rose">
          Aide spirituelle et rituels pour soulager les douleurs, accélérer la guérison, renforcer les défenses naturelles et retrouver la vitalité.
        </Card>

        {/* Fertilité */}
        <Card icon={<Baby className="w-6 h-6 text-pink-600" />} title="Fertilité & grossesse" href="#fertilite" color="pink">
          Prières et bénédictions pour favoriser la conception, protéger la future maman et assurer une grossesse paisible et harmonieuse.
        </Card>

        {/* Chance & Argent */}
        <Card icon={<Coins className="w-6 h-6 text-yellow-600" />} title="Chance & argent" href="#chance" color="yellow">
          Rituels de prospérité pour débloquer les finances, attirer l’abondance, multiplier les opportunités et améliorer la stabilité matérielle.
        </Card>

        {/* Succès & Gloire */}
        <Card icon={<Crown className="w-6 h-6 text-amber-600" />} title="Succès & Gloire" href="#succes" color="amber">
          Accompagnement vers la réussite personnelle et professionnelle, reconnaissance sociale et victoire dans tous vos projets.
        </Card>

        {/* Spiritualité */}
        <Card icon={<Moon className="w-6 h-6 text-indigo-600" />} title="Spiritualité" href="#spiritualite" color="indigo">
          Rituels de connexion aux guides spirituels, ouverture de la clairvoyance, paix intérieure et renforcement des énergies positives.
        </Card>

        {/* Prospérité familiale */}
        <Card icon={<Sun className="w-6 h-6 text-orange-600" />} title="Prospérité familiale" href="#famille" color="gray">
          Promouvoir l’harmonie, l’union et la stabilité dans la famille, attirer bonheur, abondance et équilibre au foyer.
        </Card>

        {/* Protection mystique */}
        <Card icon={<Gem className="w-6 h-6 text-teal-600" />} title="Protection mystique" href="#protection" color="sky">
          Création de puissants boucliers spirituels pour repousser les mauvais sorts, neutraliser les jalousies et écarter les énergies négatives.
        </Card>
      </div>
    </section>
  );
}

function Card({ icon, title, href, color, children }: { icon: React.ReactNode; title: string; href: string; color: string; children: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className={`w-12 h-12 rounded-xl bg-${color}-100 flex items-center justify-center mb-4 group-hover:bg-${color}-200 transition-colors duration-300`}>
        {icon}
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-slate-600 mt-2 text-sm leading-relaxed">{children}</p>
      <div className="mt-4 flex justify-end">
        <Link href={href} className={`px-4 py-2 rounded-lg bg-${color}-600 text-white font-medium hover:bg-${color}-700 transition-colors duration-300`}>
          En savoir plus →
        </Link>
      </div>
    </div>
  );
}
