"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/Admin/ui/button";
import { Video as VideoIcon, X } from "lucide-react";

type Props = {
  value?: string | null;
  onChange: (url: string | null) => void;
  label?: string;
};

// 👇 Type custom uniquement pour onQueuesStart
type LocalQueueResult = {
  files?: { file: File }[];
};

export default function CloudinaryUploadVideo({ value, onChange, label }: Props) {
  const [localPreview, setLocalPreview] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      <CldUploadWidget
        uploadPreset="unsigned_upload"
        options={{
          folder: "articles",
          sources: ["local", "url", "camera"],
          multiple: false,
          resourceType: "video",
          clientAllowedFormats: ["mp4", "webm", "ogg", "mov", "avi"],
          maxFileSize: 100_000_000, // 100MB
        }}
        // ✅ Preview locale avant upload
        onQueuesStart={(result) => {
          try {
            const info = result as unknown as LocalQueueResult;
            const file = info?.files?.[0]?.file;
            if (file) {
              const previewUrl = URL.createObjectURL(file);
              setLocalPreview(previewUrl);
            }
          } catch (err) {
            console.error("Erreur lors de la génération de la preview locale:", err);
          }
        }}
        // ✅ Récupération du public_id après upload
        onSuccess={(result: unknown) => {
          try {
            const res = result as { info?: { public_id?: string } };
            const publicId = res?.info?.public_id;
            if (publicId) {
              onChange(publicId);
              if (localPreview) {
                URL.revokeObjectURL(localPreview);
                setLocalPreview(null);
              }
            } else {
              console.error("⚠️ Aucun public_id renvoyé par Cloudinary");
            }
          } catch (err) {
            console.error("Erreur lors du traitement de la réponse Cloudinary:", err);
          }
        }}
        // ✅ Gestion des erreurs upload
        onError={(error) => {
          console.error("Erreur upload Cloudinary:", error);
        }}
      >
        {({ open }) => (
          <div className="flex gap-2">
            <Button
              type="button"
              onClick={() => {
                try {
                  open?.();
                } catch (err) {
                  console.error("Erreur lors de l'ouverture du widget Cloudinary:", err);
                }
              }}
              variant={value ? "secondary" : "default"}
            >
              <VideoIcon className="mr-2 h-4 w-4" />
              {value ? "Changer la vidéo" : label ?? "Choisir une vidéo"}
            </Button>

            {(localPreview || value) && (
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => {
                  try {
                    if (localPreview) {
                      URL.revokeObjectURL(localPreview);
                      setLocalPreview(null);
                    }
                    onChange(null);
                  } catch (err) {
                    console.error("Erreur lors de la suppression de la vidéo:", err);
                  }
                }}
              >
                <X className="h-4 w-4 mr-1" /> Supprimer
              </Button>
            )}
          </div>
        )}
      </CldUploadWidget>

      {/* ✅ Preview locale avant upload */}
      {localPreview && (
        <video
          src={localPreview}
          controls
          className="mt-2 w-full h-48 rounded-lg border object-cover"
          onError={(e) =>
            console.error("Erreur lors de l'affichage de la preview locale", e)
          }
        />
      )}

      {/* ✅ Player Cloudinary après upload */}
      {value && !localPreview && (
        <video
          controls
          className="mt-2 w-full rounded-lg border"
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_mp4,q_auto/${value}.mp4`}
          onError={(e) =>
            console.error("Erreur lors du chargement de la vidéo Cloudinary", e)
          }
        />
      )}
    </div>
  );
}
