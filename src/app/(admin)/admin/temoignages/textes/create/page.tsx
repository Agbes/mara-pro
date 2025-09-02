"use client";

import TemoignageForm from "@/components/Admin/Formulaires/Temoignages/Textes/TemoignageForm";
import { TemoignageType } from "@/lib/schemas/temoignagesSchema";
import { useRouter } from "next/navigation";


export default function CreateTemoignage() {
  const router = useRouter();


  const handleSubmit = async (values: TemoignageType) => {
    const res = await fetch("/api/admin/temoignages/texte", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      router.push("/admin/temoignages/textes");
    } else {
      alert("Erreur lors de la création du témoignage");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Créer un nouveau témoignage</h1>
      <TemoignageForm onSubmit={handleSubmit} />
    </div>
  );
}
