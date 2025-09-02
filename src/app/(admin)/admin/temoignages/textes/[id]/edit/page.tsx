"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { TemoignageType } from "@/lib/schemas/temoignagesSchema";
import TemoignageForm from "@/components/Admin/Formulaires/Temoignages/Textes/TemoignageForm";


export default function EditTemoignage() {
  const router = useRouter();
  const params = useParams();
  const [temoignageData, setTemoignageData] = useState<TemoignageType | null>(null);

  useEffect(() => {
    async function fetchTemoignage() {
      const res = await fetch(`/api/admin/temoignages/${params.id}`);
      if (res.ok) {
        const data = await res.json();
        setTemoignageData(data);
      }
    }
    fetchTemoignage();
  }, [params.id]);

  const handleSubmit = async (values: TemoignageType) => {
    const res = await fetch(`/api/admin/temoignages/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      router.push("/admin/temoignages");
    } else {
      alert("Erreur lors de la modification du témoignage");
    }
  };

  if (!temoignageData) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Modifier un témoignage</h1>
      <TemoignageForm initialValues={temoignageData} onSubmit={handleSubmit} />
    </div>
  );
}
