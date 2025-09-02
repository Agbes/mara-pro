"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/Admin/ui/input";
import { Button } from "@/components/Admin/ui/button";
import { temoignageSchema, TemoignageType } from "@/lib/schemas/temoignagesSchema";

type Props = {
  initialValues?: TemoignageType;
  onSubmit: (values: TemoignageType) => Promise<void>;
};

export default function TemoignageForm({ initialValues, onSubmit }: Props) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TemoignageType>({
    resolver: zodResolver(temoignageSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
    },
  });

  // ✅ réinitialise le formulaire quand on reçoit de nouvelles valeurs
  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(async (values) => {
        try {
          console.log("🔹 Soumission :", values);
          await onSubmit(values);
        } catch (err) {
          console.error("❌ Erreur :", err);
          alert("Erreur lors de l'enregistrement");
        }
      })}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
      {/* Nom */}
      <div>
        <label className="block mb-1 font-medium">Nom</label>
        <Input {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Catégorie */}
      <div>
        <label className="block mb-1 font-medium">Catégorie</label>
        <Input {...register("category")} />
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Témoignage */}
      <div>
        <label className="block mb-1 font-medium">Témoignage</label>
        <textarea
          {...register("description")}
          className="w-full border p-2 rounded min-h-[100px]"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Bouton Submit */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enregistrement..." : "Enregistrer"}
      </Button>
    </form>
  );
}
