import { Star } from "lucide-react";

type TestimonialProps = {
  initial: string;
  color: string;
  name: string;
  category: string;
  text: string;
};

export default function TestimonialCard({
  initial,
  color,
  name,
  category,
  text,
}: TestimonialProps) {
  return (
    <div className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full ring-2 ring-brand-400 ${color}`}
        >
          <span className="text-white text-xl font-bold">{initial}</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-slate-500">{category}</span>
        </div>
      </div>

      {/* Avis 5 étoiles */}
      <div className="flex mt-2 text-yellow-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400" />
        ))}
      </div>

      {/* Texte */}
      <p className="mt-3 text-slate-700 flex-1 leading-relaxed">“{text}”</p>
    </div>
  );
}
