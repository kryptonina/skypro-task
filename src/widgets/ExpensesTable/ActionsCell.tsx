import React, { FC, useState } from "react";
import Delete from "@icons/bag-gray.svg";
import Edit from "@icons/edit.svg";
import { Expense } from "../../entitites/types";

interface ActionsCellProps {
  row: Expense;
  className: string;
  buttonClassName: string;
  onDelete: (id: number | string) => void;
  onEdit: (expense: Expense | undefined) => void;
}

export const ActionsCell: FC<ActionsCellProps> = ({
  row,
  className,
  buttonClassName,
  onDelete,
  onEdit,
}) => {
  const [editingRow, setEditingRow] = useState<Expense["id"]>();

  return (
    <td className={className}>
      <button
        className={buttonClassName}
        onClick={() => {
          setEditingRow(row.id);
          onEdit(row);
        }}
      >
        <Edit />
      </button>
      <button
        className={buttonClassName}
        onClick={() => {
          if (row.id! === editingRow) {
            setEditingRow(undefined);
            onEdit(undefined);
          }
          onDelete(row.id!);
        }}
      >
        <Delete />
      </button>
    </td>
  );
};
