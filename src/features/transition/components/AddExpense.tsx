import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { TransactionForm } from "../../transition/components/TransactionForm"
import { TRANSACTION_TYPES } from "@/utils/constants"

export const AddExpense = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary" className="rounded-full w-auto">
            Add Expense
          </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl rounded-3xl">
        <DialogHeader className="pb-4">
          <DialogTitle>Add Expense</DialogTitle>
        </DialogHeader>
        <div className={cn("flex flex-col gap-6")}>
          <TransactionForm transactionType={TRANSACTION_TYPES.EXPENSE} />
        </div>
      </DialogContent>
    </Dialog>
  )
}