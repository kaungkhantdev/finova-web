import {
  type ColumnDef,
} from "@tanstack/react-table"
// import { Checkbox } from "@/components/ui/checkbox"
import { DragHandle } from "./DragHandle"

export const createColumns = <T extends { id: number | string }>(columns: ColumnDef<T>[]): ColumnDef<T>[] => {
  return [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={Number(row.original.id)} />,
  },
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <div className="flex items-center justify-center">
  //       <Checkbox
  //         checked={
  //           table.getIsAllPageRowsSelected() ||
  //           (table.getIsSomePageRowsSelected() && "indeterminate")
  //         }
  //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //     </div>
  //   ),
  //   cell: ({ row }) => (
  //     <div className="flex items-center justify-center">
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onCheckedChange={(value) => row.toggleSelected(!!value)}
  //         aria-label="Select row"
  //       />
  //     </div>
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  ...columns,
]
}
