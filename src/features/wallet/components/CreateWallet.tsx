import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import useCreateWallet from "../hooks/useCreateWallet";
import BaseInput from "@/components/common/BaseInput";

export const CreateWallet = () => {
  const { register } = useCreateWallet();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-full mt-4">
            Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm rounded-3xl">
        <DialogHeader className="pb-4">
          <DialogTitle>Create Wallet</DialogTitle>
        </DialogHeader>
        <div className={cn("flex flex-col gap-6")}>
            <form className="w-full">
              <div className="flex flex-col gap-6">
                <BaseInput
                  id="name"
                  label="Wallet Name"
                  type="text"
                  placeholder="Enter wallet name"
                  register={register}
                />
                <BaseInput 
                  id="description"
                  label="Description"
                  type="text"
                  placeholder="Enter wallet description"
                  register={register}
                />
              </div>
              <Button type="submit" size={'lg'} className="mt-4 w-full rounded-full">Submit</Button>
            </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}