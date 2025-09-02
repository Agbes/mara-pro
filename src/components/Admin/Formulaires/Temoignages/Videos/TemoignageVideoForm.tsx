"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/Admin/ui/button";
import CloudinaryUploadVideo from "@/components/Admin/CloudinaryUpload/CloudinaryUploadVideo";
import { temoignageVideoSchema } from "@/lib/schemas/temoignagesSchema";
import { Loader2 } from "lucide-react";

export type TemoignageVideoFormValues = z.infer<typeof temoignageVideoSchema>;

type Props = {
  initialValues?: TemoignageVideoFormValues;
  onSubmit: (values: TemoignageVideoFormValues) => void;
};

export default function TemoignageVideoForm({ initialValues, onSubmit }: Props) {
  const {
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TemoignageVideoFormValues>({
    resolver: zodResolver(temoignageVideoSchema),
    defaultValues: { videoUrl: "" }, // ✅ valeur par défaut
  });

  // ✅ recharge les valeurs quand initialValues change
  useEffect(() => {
    try {
      if (initialValues) {
        reset(initialValues);
      }
    } catch (err) {
      console.error("Erreur lors du reset du formulaire:", err);
    }
  }, [initialValues, reset]);

  let videoUrl: string | undefined = "";
  try {
    videoUrl = watch("videoUrl");
  } catch (err) {
    console.error("Erreur lors du watch sur videoUrl:", err);
  }

  const safeOnSubmit = async (values: TemoignageVideoFormValues) => {
    try {
      await onSubmit(values);
    } catch (err) {
      console.error("Erreur lors de la soumission du formulaire:", err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        try {
          handleSubmit(safeOnSubmit)(e);
        } catch (err) {
          console.error("Erreur dans handleSubmit:", err);
        }
      }}
      className="space-y-6"
    >
      <div>
        <label className="block mb-2 font-medium">Vidéo</label>
        <CloudinaryUploadVideo
          value={videoUrl}
          onChange={(url) => {
            try {
              setValue("videoUrl", url ?? "", { shouldValidate: true });
            } catch (err) {
              console.error("Erreur lors du setValue(videoUrl):", err);
            }
          }}
          label="Uploader une vidéo"
        />
        {errors.videoUrl && (
          <p className="text-sm text-red-500">{errors.videoUrl.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="flex items-center">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enregistrement...
          </>
        ) : (
          <>{initialValues ? "Mettre à jour" : "Créer"}</>
        )}
      </Button>
    </form>
  );
}
