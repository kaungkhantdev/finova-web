import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import useGetAllCategoryNoPagination from "../hooks/useGetAllCategoryNoPagination"


export function CategoryCombobox({
  value, 
  onChange,
}: {
  value?: string | number,
  onChange: (value: string | number) => void,
}) {
  const { data } = useGetAllCategoryNoPagination()
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min:w-[390px] justify-between h-11"
        >
          {value
            ? data?.data.find((category) => category.id === value)?.name
            : "Select category..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min:w-[390px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {data?.data.map((category) => (
                <CommandItem
                  key={category.id}
                  value={`${category.id} ${category.name}`}
                  // onSelect={(currentValue) => {
                  //   onChange(currentValue === value ? "" : currentValue)
                  //   setOpen(false)
                  // }}
                  onSelect={() => {
                    onChange(category.id)
                    setOpen(false)
                  }}
                >
                  {category.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === category.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
