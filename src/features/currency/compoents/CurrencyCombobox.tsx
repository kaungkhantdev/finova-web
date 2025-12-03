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
import useGetAllCurrencyNoPagination from "../hooks/useGetAllCurrencyNoPagination"


export function CurrencyCombobox({
  value, 
  onChange,
}: {
  value?: string | number,
  onChange: (value: string | number) => void,
}) {
  const { data } = useGetAllCurrencyNoPagination()
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-between h-11"
        >
          {value
            ? data?.data.find((currency) => currency.id === value)?.currency
            : "Select currency..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Command>
          <CommandInput placeholder="Search currency..." className="h-9" />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {data?.data.map((currency) => (
                <CommandItem
                  key={currency.id}
                  value={`${currency.id} ${currency.currency}`}
                  onSelect={() => {
                    onChange(currency.id)
                    setOpen(false)
                  }}
                >
                  {currency.currency}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === currency.id ? "opacity-100" : "opacity-0"
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
