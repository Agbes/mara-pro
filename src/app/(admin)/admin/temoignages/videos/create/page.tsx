"use client";

import TemoignageVideoForm, { TemoignageVideoFormValues } from "@/components/Admin/Formulaires/Temoignages/Videos/TemoignageVideoForm";
import { useRouter } from "next/navigation";

export default function CreateTemoignageVideo() {
  const router = useRouter();

  const handleSubmit = async (values: TemoignageVideoFormValues) => {
    const res = await fetch("/api/admin/temoignages/video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      router.push("/admin/temoignages/videos");
    } else {
      alert("Erreur lors de la création de la vidéo");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Ajouter un témoignage vidéo</h1>
      <TemoignageVideoForm onSubmit={handleSubmit} />
    </div>
  );
}
