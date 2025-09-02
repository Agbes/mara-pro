// "use client";

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/Admin/ui/dialog";
// import PageForm from "./PageForm";
// import { contentPageSchema } from "@/lib/schemas/pageSchema";
// import { z } from "zod";
// import { PageType } from "@/components/Admin/Tables/PagesTable";

// type PageFormValues = z.infer<typeof contentPageSchema>;

// interface PageUpsertDialogProps {
//   mode: "create" | "edit";
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   initial: PageType | null;
//   onSubmit: (values: PageFormValues) => Promise<void>;
// }

// export default function PageUpsertDialog({
//   mode,
//   open,
//   onOpenChange,
//   initial,
//   onSubmit,
// }: PageUpsertDialogProps) {
//   const [loading, setLoading] = useState(false);

//   const form = useForm<PageFormValues>({
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

//   useEffect(() => {
//     if (open) {
//       form.reset({
//         h1: initial?.h1 ?? "",
//         h2: initial?.h2 ?? "",
//         description1: initial?.description1 ?? "",
//         description2: initial?.description2 ?? "",
//         pageName: initial?.pageName ?? "",
//         photo1: initial?.photo1 ?? "",
//         photo2: initial?.photo2 ?? "",
//       });
//     }
//   }, [open, initial, form]);

//   const submit = async (values: PageFormValues) => {
//     setLoading(true);
//     try {
//       await onSubmit(values);
//       onOpenChange(false);
//       form.reset();
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange} modal={false}>
//       <DialogContent
//         className="max-w-2xl max-h-[90vh] overflow-y-auto"
//         onOpenAutoFocus={(e) => e.preventDefault()}
//       >
//         <DialogHeader>
//           <DialogTitle>
//             {mode === "create" ? "Nouvelle page" : "Modifier la page"}
//           </DialogTitle>
//           <DialogDescription>
//             {mode === "create"
//               ? "Crée une nouvelle page en remplissant les champs ci-dessous."
//               : "Modifie les informations de la page."}
//           </DialogDescription>
//         </DialogHeader>

//         <PageForm
//           form={form}
//           onSubmit={submit}
//           loading={loading}
//           mode={mode}
//           onCancel={() => onOpenChange(false)}
//         />
//       </DialogContent>
//     </Dialog>
//   );
// }
