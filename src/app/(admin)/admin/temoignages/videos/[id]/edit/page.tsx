"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import TemoignageVideoForm, { TemoignageVideoFormValues } from "@/components/Admin/Formulaires/Temoignages/Videos/TemoignageVideoForm";

export default function EditTemoignageVideo() {
  const router = useRouter();
  const params = useParams();
  const [videoData, setVideoData] = useState<TemoignageVideoFormValues | null>(null);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await fetch(`/api/admin/temoignages/video/${params.id}`);
        if (!res.ok) throw new Error("Erreur API");
        const data = await res.json();
        setVideoData(data);
      } catch (err) {
        console.error("❌ Erreur lors du fetch vidéo :", err);
        setVideoData(null); // ✅ fallback
      }
    }

    try {
      fetchVideo();
    } catch (err) {
      console.error("❌ Erreur inattendue dans useEffect :", err);
    }
  }, [params.id]);

  const handleSubmit = async (values: TemoignageVideoFormValues) => {
    try {
      console.log("📤 Données envoyées :", values);

      const res = await fetch(`/api/admin/temoignages/video/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        console.log("✅ Vidéo mise à jour !");
        router.push("/admin/temoignages/video");
      } else {
        try {
          const error = await res.json();
          console.error("❌ Erreur API :", error);
        } catch (parseErr) {
          console.error("❌ Impossible de parser l’erreur API :", parseErr);
        }
        alert("Erreur lors de la modification de la vidéo");
      }
    } catch (err) {
      console.error("❌ Erreur lors de la soumission :", err);
      alert("Erreur inattendue lors de la modification");
    }
  };

  try {
    if (!videoData) return <p>Chargement...</p>;
  } catch (err) {
    console.error("❌ Erreur lors du rendu :", err);
    return <p>Erreur de chargement</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Modifier un témoignage vidéo</h1>
      <TemoignageVideoForm initialValues={videoData} onSubmit={handleSubmit} />
    </div>
  );
}
