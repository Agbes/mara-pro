"use client";

import { Pencil, Trash2 } from "lucide-react";
import DataTable from "./DataTable";

export type TemoignageTexte = {
  id: number;
  auteur: string;
  message: string;
  createdAt: string;
};

type TemoignageTexteTableProps = {
  data: TemoignageTexte[];
  onEdit: (item: TemoignageTexte) => void;
  onDelete: (id: number) => void;
};

export default function TemoignageTexteTable({
  data,
  onEdit,
  onDelete,
}: TemoignageTexteTableProps) {
  return (
    <DataTable
      data={data}
      pageSize={5}
      searchable
      columns={[
        { key: "id", label: "ID", sortable: true },
        { key: "auteur", label: "Auteur", sortable: true },
        { key: "message", label: "Message" },
        {
          key: "createdAt",
          label: "Créé le",
          sortable: true,
          render: (row) =>
            new Date(row.createdAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
        },
        {
          key: "actions",
          label: "Actions",
          render: (item) => (
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => onEdit(item)}
                className="p-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-600 rounded-lg"
              >
                <Pencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ),
        },
      ]}
      emptyMessage="Aucun témoignage pour le moment."
    />
  );
}
