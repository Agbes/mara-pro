
"use client";

import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent } from "@/components/Admin/ui/card";
import { Input } from "@/components/Admin/ui/input";
import { Textarea } from "@/components/Admin/ui/textarea";
import { Button } from "@/components/Admin/ui/button";

import { contentPageSchema } from "@/lib/schemas/pageSchema";
import { z } from "zod";
import CloudinaryUploadButton from "../CloudinaryUpload/CloudinaryUploadButton";


// --------- Types ---------
export type PageFormValues = z.infer<typeof contentPageSchema>;


export interface PageType {
  id: number;
  h1: string;
  h2: string;
  description1?: string;
  description2?: string;
  pageName: string;
  photo1?: string;
  photo2?: string;
}

type Props = {
  initialData?: PageType;
  onSubmit: (data: PageFormValues) => Promise<void> | void;
};

// --------- Composant ---------
export default function PageForm({ initialData, onSubmit }: Props) {
  // --------- Defaults ---------
  // const defaultValues: PageFormValues = {
  //   id: initialData?.id,
  //   pageName: initialData?.pageName ?? "",
  //   h1: initialData?.h1 ?? "",
  //   h2: initialData?.h2 ?? "",
  //   description1: initialData?.description1 ?? "",
  //   description2: initialData?.description2 ?? "",
  //   photo1: initialData?.photo1 ?? "",
  //   photo2: initialData?.photo2 ?? "",
  // };


  const defaultValues = useMemo<PageFormValues>(() => ({
    id: initialData?.id,
    pageName: initialData?.pageName ?? "",
    h1: initialData?.h1 ?? "",
    h2: initialData?.h2 ?? "",
    description1: initialData?.description1 ?? "",
    description2: initialData?.description2 ?? "",
    photo1: initialData?.photo1 ?? "",
    photo2: initialData?.photo2 ?? "",
  }), [initialData]);


  const {
    handleSubmit,
    register,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PageFormValues>({
    resolver: zodResolver(contentPageSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const values = watch();

  // ✅ synchroniser si initialData change
  // useEffect(() => {
  //   if (initialData) {
  //     reset({
  //       id: initialData.id,
  //       pageName: initialData.pageName ?? "",
  //       h1: initialData.h1 ?? "",
  //       h2: initialData.h2 ?? "",
  //       description1: initialData.description1 ?? "",
  //       description2: initialData.description2 ?? "",
  //       photo1: initialData.photo1 ?? "",
  //       photo2: initialData.photo2 ?? "",
  //     });
  //   } else {
  //     reset(defaultValues);
  //   }
  // }, [defaultValues,initialData, reset]);

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  // --------- Submit handler ---------
  const onSubmitForm = async (data: PageFormValues) => {
    console.log("✅ Données envoyées PageForm :", data);
    try {
      await onSubmit(data);
    } catch (err) {
      console.error("Erreur soumission PageForm:", err);
      alert("Erreur lors de l’enregistrement : " + (err as Error).message);
    }
  };

  // --------- UI ---------
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-8">
      {/* Infos générales */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <Input placeholder="Nom de la page" {...register("pageName")} />
          {errors.pageName && (
            <p className="text-red-500 text-sm">{errors.pageName.message}</p>
          )}

          <Input placeholder="H1" {...register("h1")} />
          {errors.h1 && (
            <p className="text-red-500 text-sm">{errors.h1.message}</p>
          )}

          <Input placeholder="H2" {...register("h2")} />
          {errors.h2 && (
            <p className="text-red-500 text-sm">{errors.h2.message}</p>
          )}

          <Textarea placeholder="Description 1" {...register("description1")} />
          {errors.description1 && (
            <p className="text-red-500 text-sm">{errors.description1.message}</p>
          )}

          <Textarea placeholder="Description 2" {...register("description2")} />
          {errors.description2 && (
            <p className="text-red-500 text-sm">{errors.description2.message}</p>
          )}
        </CardContent>
      </Card>

      {/* Images */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="font-semibold">Images</h2>

          <CloudinaryUploadButton
            value={values.photo1 ?? null}
            onChange={(url) => setValue("photo1", url, { shouldValidate: true })}
            label="Image 1"
          />
          {errors.photo1 && (
            <p className="text-red-500 text-sm">{errors.photo1.message}</p>
          )}

          <CloudinaryUploadButton
            value={values.photo2 ?? null}
            onChange={(url) => setValue("photo2", url, { shouldValidate: true })}
            label="Image 2"
          />
          {errors.photo2 && (
            <p className="text-red-500 text-sm">{errors.photo2.message}</p>
          )}
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-right">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Enregistrement..." : "Sauvegarder la page"}
        </Button>
      </div>
    </form>
  );
}
