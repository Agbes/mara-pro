"use client";

import { useEffect, useState } from "react";
import DataTable, { Column } from "@/components/Admin/Tables/DataTable"; // adapte le chemin !
import { Button } from "@/components/Admin/ui/button";
import Link from "next/link";

// Type de données correspondant à ton modèle Temoignages
export interface TemoignageType {
  id: number;
  name: string;
  category: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function TemoignageTextePage() {
  const [temoignages, setTemoignages] = useState<TemoignageType[]>([]);

  // ⚡ Récupération des données API
  useEffect(() => {
    async function fetchTemoignages() {
      const res = await fetch("/api/admin/temoignages/texte");
      const data = await res.json();
      setTemoignages(data);
    }
    fetchTemoignages();
  }, []);

  // Définition des colonnes pour le DataTable
  const columns: Column<TemoignageType>[] = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Nom", sortable: true },
    { key: "category", label: "Catégorie", sortable: true },
    { key: "description", label: "Témoignage" },
    {
      key: "createdAt",
      label: "Créé le",
      render: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleDateString() : "-",
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <Link href={`/admin/temoignages/${row.id}/edit`}>
            <Button size="sm" variant="outline">
              Modifier
            </Button>
          </Link>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleDelete(row.id)}
          >
            Supprimer
          </Button>
        </div>
      ),
    },
  ];

  // Gestion suppression
  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer ce témoignage ?")) return;

    try {
      const res = await fetch(`/api/admin/temoignages/texte/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setTemoignages((prev) => prev.filter((t) => t.id !== id));
      } else {
        const err = await res.json();
        alert(`Erreur: ${err.error || "suppression impossible"}`);
      }
    } catch (error) {
      console.error("Erreur suppression témoignage:", error);
      alert("Erreur réseau lors de la suppression.");
    }
  };


  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion des Témoignages</h1>
        <Link href="/admin/temoignages/textes/create">
          <Button>➕ Nouveau témoignage</Button>
        </Link>
      </div>

      <DataTable data={temoignages} columns={columns} pageSize={5} />
    </div>
  );
}
