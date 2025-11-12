import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { TransactionForm } from "./TransactionForm"

export const AddIncome = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-full mt-4">
            Add Income
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl rounded-3xl">
        <DialogHeader className="pb-4 border-b">
          <DialogTitle>Add Income</DialogTitle>
        </DialogHeader>
        <div className={cn("flex flex-col gap-6")}>
          <TransactionForm type="income" />
        </div>
      </DialogContent>
    </Dialog>
  )
}