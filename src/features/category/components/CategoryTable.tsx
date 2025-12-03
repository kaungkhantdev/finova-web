import { ReusableDataTable } from "@/components/data-table/ReusableDataTable"
import { createColumns } from "@/components/data-table/ReusableDataTableColumns" 
import { Button } from "@/components/ui/button"
import type { ColumnDef } from "@tanstack/react-table"
import { changeHumanReadAbleDate } from "@/utils/helpers/date-formater"
import Loading from "@/components/common/Loading"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CheckCircle2Icon, MoreVerticalIcon, XCircleIcon } from "lucide-react"
import useGetAllCategory from "../hooks/useGetAllCategory"
import type { Category } from "../types/category.type"
import { Badge } from "@/components/ui/badge"
import { EditCategory } from "./EditCategory"


const CategoryTable = ({search}: {search: string}) => { 
  const { data, pagination, setPagination, setSize, isLoading } = useGetAllCategory(10, search)
  const reqColumns: ColumnDef<Category>[] = [
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
          accessorKey: "is_system",
          header: "System",
          cell: ({ row }) => (
            <Badge
              variant="outline"
              className="flex gap-1 px-1.5 text-muted-foreground [&_svg]:size-3"
            >
                {row.original.is_system ? (
                <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
                ) : (
                <XCircleIcon className="text-red-500 dark:text-red-400" />
                )}
                {row.original.is_system ? "Yes" : "No"}
            </Badge>
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
        cell: ({row}) => {
            if (row.original.is_system) return null
            return (
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
            <EditCategory 
                  id={row.original.id.toString()} 
                  name={row.original.name} 
                  description={row.original.description} 
                />
            </DropdownMenuContent>
            </DropdownMenu>
            )
        },
  },
  ]

  const columns = createColumns<Category>(reqColumns)

  if (isLoading) return <Loading />

  if (!data) return <p>No data available</p>

  return (
    <div className="relative flex flex-col gap-4 overflow-auto p-5 rounded-3xl bg-white dark:bg-card">
      <ReusableDataTable<Category> 
            pagination={pagination}
            setPagination={setPagination}
            setSize={setSize}
            columns={columns} 
            data={data.data}
            metadata={data?.metadata}/>
    </div>
  )
}

export default CategoryTable
