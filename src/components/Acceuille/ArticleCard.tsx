"use client";

import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  img: string;
  alt: string;
  title: string;
  text: string;
  date: string;
};

export default function ArticleCard({ img, alt, title, text, date }: ArticleCardProps) {
  return (
    <div className="flex flex-col w-full sm:w-[48%] lg:w-[30%] bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40">
      {/* Image */}
      <Image
        src={img}
        alt={alt}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 text-sm flex-1">{text}</p>
        <div className="mt-4 text-xs text-slate-400">Publié le {date}</div>

        <Link
          href="/rituels"
          className="mt-4 inline-block px-4 py-2 text-sm rounded-lg bg-cyan-700 text-white font-medium hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-400/50 transition"
        >
          Lire plus
        </Link>
      </div>
    </div>
  );
}
