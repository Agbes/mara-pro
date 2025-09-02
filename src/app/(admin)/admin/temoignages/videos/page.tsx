"use client";

import { useEffect, useState } from "react";
import DataTable, { Column } from "@/components/Admin/Tables/DataTable";
import { Button } from "@/components/Admin/ui/button";
import Link from "next/link";

// Type correspondant au modèle Prisma
export interface TemoignageVideoType {
  id: number;
  videoUrl: string; // ⚡ contient le public_id Cloudinary
  createdAt?: string;
  updatedAt?: string;
}

export default function TemoignagesVideoPage() {
  const [videos, setVideos] = useState<TemoignageVideoType[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);


  console.log(selectedVideo);
  
  // ⚡ Récupération depuis l’API
  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/admin/temoignages/video");
        if (!res.ok) throw new Error("Erreur API");
        const data: TemoignageVideoType[] = await res.json();
        setVideos(data);
      } catch (err) {
        console.error("Erreur lors du fetch :", err);
        setVideos([]); // ✅ sécurité si erreur
      }
    }

    try {
      fetchVideos();
    } catch (err) {
      console.error("Erreur inattendue dans useEffect:", err);
    }
  }, []);

  // Colonnes pour DataTable
  const columns: Column<TemoignageVideoType>[] = [
    { key: "id", label: "ID", sortable: true },
    {
      key: "videoUrl",
      label: "Vidéo",
      render: (row) => {
        try {
          return (
            <div
              className="w-48 cursor-pointer"
              onClick={() => setSelectedVideo(row.videoUrl)}
            >
              <video
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto,q_auto/${row.videoUrl}.mp4`}
                className="rounded-md border object-cover"
                style={{ width: "100%", height: "120px" }}
              />
            </div>
          );
        } catch (err) {
          console.error("Erreur lors du rendu de la vidéo:", err);
          return <span className="text-red-500">Erreur vidéo</span>;
        }
      },
    },
    {
      key: "createdAt",
      label: "Créé le",
      render: (row) => {
        try {
          return row.createdAt
            ? new Date(row.createdAt).toLocaleDateString()
            : "-";
        } catch (err) {
          console.error("Erreur lors du rendu de la date:", err);
          return "-";
        }
      },
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => {
        try {
          return (
            <div className="flex gap-2">
              <Link href={`/admin/temoignages/videos/${row.id}/edit`}>
                <Button size="sm" variant="outline">
                  Modifier
                </Button>
              </Link>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => {
                  try {
                    handleDelete(row.id);
                  } catch (err) {
                    console.error("Erreur lors du clic Supprimer:", err);
                  }
                }}
              >
                Supprimer
              </Button>
            </div>
          );
        } catch (err) {
          console.error("Erreur lors du rendu des actions:", err);
          return null;
        }
      },
    },
  ];

  // Gestion suppression
  const handleDelete = async (id: number) => {
    try {
      if (!confirm("Supprimer ce témoignage vidéo ?")) return;
      const res = await fetch(`/api/admin/temoignages/video/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Suppression échouée");
      setVideos((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      console.error("Erreur lors de la suppression:", err);
      alert("Erreur lors de la suppression");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion des Témoignages Vidéo</h1>
        <Link href="/admin/temoignages/videos/create">
          <Button>➕ Nouvelle vidéo</Button>
        </Link>
      </div>

      <DataTable data={videos} columns={columns} pageSize={5} />

      {/* ✅ Player Cloudinary si une vidéo est sélectionnée */}
      {/* {selectedVideo && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Lecture de la vidéo</h2>
            <button
              className="text-red-500 font-bold text-lg"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
          </div>

          <CldVideoPlayer
            key={selectedVideo}
            src={selectedVideo} // ⚡ public_id direct
            controls
            autoPlay
            muted
            fluid
            className="!w-full max-w-4xl mx-auto rounded-lg shadow"
          />
        </div>
      )} */}
    </div>
  );
}
