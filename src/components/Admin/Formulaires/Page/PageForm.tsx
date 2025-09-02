// "use client";

// import { useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { contentPageSchema, PageFormValues } from "@/lib/schemas/pageSchema";
// import { Input } from "@/components/Admin/ui/input";
// import { Button } from "@/components/Admin/ui/button";
// import CloudinaryUploadButton from "../../CloudinaryUpload/CloudinaryUploadButton";

// type Props = {
//   initialValues?: PageFormValues;
//   onSubmit: (values: PageFormValues) => Promise<void>;
// };

// export default function PageForm({ initialValues, onSubmit }: Props) {
//   const {
//     handleSubmit,
//     control,
//     register,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<PageFormValues>({
//     resolver: zodResolver(contentPageSchema),
//     defaultValues: {
//       h1: "",
//       h2: "",
//       description1: "",
//       description2: "",
//       pageName: "",
//       photo1: "",
//       photo2: "",
//     },
//   });

//   // ✅ réinitialise le formulaire quand on reçoit de nouvelles valeurs
//   useEffect(() => {
//     if (initialValues) {
//       reset(initialValues);
//     }
//   }, [initialValues, reset]);

//   return (
//     <form
//       onSubmit={handleSubmit(async (values) => {
//         try {
//           console.log("🔹 Soumission :", values);
//           await onSubmit(values);
//         } catch (err) {
//           console.error("❌ Erreur :", err);
//           alert("Erreur lors de l'enregistrement");
//         }
//       })}
//       className="space-y-4 bg-white p-6 rounded-xl shadow-md"
//     >
//       {/* Champ H1 */}
//       <div>
//         <label className="block mb-1 font-medium">Titre H1</label>
//         <Input {...register("h1")} />
//         {errors.h1 && <p className="text-red-500 text-sm">{errors.h1.message}</p>}
//       </div>

//       {/* Champ H2 */}
//       <div>
//         <label className="block mb-1 font-medium">Sous-titre H2</label>
//         <Input {...register("h2")} />
//       </div>

//       {/* Description 1 */}
//       <div>
//         <label className="block mb-1 font-medium">Description 1</label>
//         <Input {...register("description1")} />
//       </div>

//       {/* Description 2 */}
//       <div>
//         <label className="block mb-1 font-medium">Description 2</label>
//         <Input {...register("description2")} />
//       </div>

//       {/* Nom de la page */}
//       <div>
//         <label className="block mb-1 font-medium">Nom de la page</label>
//         <Input {...register("pageName")} />
//         {errors.pageName && <p className="text-red-500 text-sm">{errors.pageName.message}</p>}
//       </div>

//       {/* Photo 1 */}
//       <div>
//         <label className="block mb-1 font-medium">Photo 1</label>
//         <Controller
//           name="photo1"
//           control={control}
//           render={({ field }) => (
//             <CloudinaryUploadButton
//               value={field.value}
//               onChange={field.onChange}
//               label="Uploader une image"
//             />
//           )}
//         />
//         {errors.photo1 && <p className="text-red-500 text-sm">{errors.photo1.message}</p>}
//       </div>

//       {/* Photo 2 */}
//       <div>
//         <label className="block mb-1 font-medium">Photo 2</label>
//         <Controller
//           name="photo2"
//           control={control}
//           render={({ field }) => (
//             <CloudinaryUploadButton
//               value={field.value}
//               onChange={field.onChange}
//               label="Uploader une image"
//             />
//           )}
//         />
//       </div>

//       {/* Bouton Submit */}
//       <Button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? "Enregistrement..." : "Enregistrer"}
//       </Button>
//     </form>
//   );
// }
