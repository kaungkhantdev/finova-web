import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import BaseInput from "@/components/common/BaseInput";
import { Edit3, RotateCw } from "lucide-react";
import useEditWallet from "../hooks/useEditWallet";

export const EditWallet = ({ accountId, name, description }: { accountId: number, name: string, description: string }) => {
  const { register, handleSubmit, onSubmit, errors, isLoading } = useEditWallet(accountId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'icon'} variant={'ghost'} className="rounded-full dark:bg-card">
            <Edit3 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm rounded-3xl">
        <DialogHeader className="pb-4">
          <DialogTitle>Edit Wallet</DialogTitle>
          <DialogDescription>
            Update the wallet name and description below.
          </DialogDescription>
        </DialogHeader>
        <div className={cn("flex flex-col gap-6")}>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <BaseInput
                  id="name"
                  label="Wallet Name"
                  type="text"
                  defaultValue={name}
                  placeholder="Enter wallet name"
                  register={register}
                  errors={errors}
                />
                <BaseInput 
                  id="description"
                  label="Description"
                  type="text"
                  defaultValue={description}
                  placeholder="Enter wallet description"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="flex items-center justify-end gap-2 mt-4">
                <DialogClose asChild>
                  <Button type="submit" size={'lg'} className="rounded-full">
                    {isLoading ? (
                      <>
                        <RotateCw className="h-4 animate-spin" />
                        Loading
                      </>
                      ) : (
                        "Confirm"
                      )
                    }
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button type="button" variant={'outline'} size={'lg'} className="rounded-full">
                        Cancel
                    </Button>
                </DialogClose>
              </div>
            </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
        
        