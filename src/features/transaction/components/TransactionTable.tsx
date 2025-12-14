import { ReusableDataTable } from "@/components/data-table/ReusableDataTable"
import { createColumns } from "@/components/data-table/ReusableDataTableColumns" 
import { Button } from "@/components/ui/button"
import type { ColumnDef } from "@tanstack/react-table"
import { changeHumanReadAbleDate } from "@/utils/helpers/date-formater"
import type { Transaction } from "../types/transaction.type"
import { useGetAllTransaction } from "../hooks"
import Loading from "@/components/common/Loading"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVerticalIcon } from "lucide-react"
import useDeleteTransaction from "../hooks/useDeleteTransaction"


const TransactionTable = ({search}: {search: string}) => { 
  const { data, pagination, setPagination, setSize, isLoading } = useGetAllTransaction(false, 10, search)
  const { onSubmit } = useDeleteTransaction()
  const reqColumns: ColumnDef<Transaction>[] = [
      {
          accessorKey: "name",
          header: "Name",
          cell: ({ row }) => {
          return <Button variant="link" className="w-fit px-0 text-left text-foreground">
                      {row.original.name}
                  </Button>
          },
          enableHiding: false,
      },
      {
          accessorKey: "description",
          header: "Description",
          cell: ({ row }) => (
          <p className="w-fit max-w-xs truncate">{row.original.description}</p>
          ),
      },
      {
          accessorKey: "amount",
          header: "Amount",
          cell: ({ row }) => (
          <p className="w-fit max-w-xs truncate">{row.original.amount}</p>
          ),
      },
      {
          accessorKey: "created_at",
          header: "Created Date",
          cell: ({ row }) => (
          <p className="w-fit max-w-xs truncate">
            {changeHumanReadAbleDate(row.original.created_at)}
          </p>
          ),
      },
      {
          accessorKey: "updated_at",
          header: "Modified Date",
          cell: ({ row }) => (
            <p className="w-fit max-w-xs truncate">
            {changeHumanReadAbleDate(row.original.updated_at)}
          </p>
          ),
      },
      {
        id: "actions",
        cell: ({row}) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
            className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
            size="icon"
          >
            <MoreVerticalIcon />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem variant="destructive" onClick={() => onSubmit(Number(row.original.id))}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  ]

  const columns = createColumns<Transaction>(reqColumns)

  if (isLoading) return <Loading />

  if (!data) return <p>No data available</p>

  return (
    <div className="relative flex flex-col gap-4 overflow-auto p-5 rounded-3xl bg-white dark:bg-card">
      <ReusableDataTable<Transaction> 
            pagination={pagination}
            setPagination={setPagination}
            setSize={setSize}
            columns={columns} 
            data={data.data}
            metadata={data?.metadata}/>
    </div>
  )
}

export default TransactionTable
