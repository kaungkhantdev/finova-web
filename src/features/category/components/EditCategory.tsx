import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import BaseInput from "@/components/common/BaseInput";
import { RotateCw } from "lucide-react";
import useEditCategory from "../hooks/useEditCategory";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const EditCategory = ({ id, name, description }: { id: string, name: string, description: string }) => {
  const { register, handleSubmit, onSubmit, errors, isLoading } = useEditCategory(id);

  return (
    <Dialog>
      <DialogTrigger asChild>
         <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm rounded-3xl">
        <DialogHeader className="pb-4">
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Update the category name and description below.
          </DialogDescription>
        </DialogHeader>
        <div className={cn("flex flex-col gap-6")}>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <BaseInput
                  id="name"
                  label="Category Name"
                  type="text"
                  defaultValue={name}
                  placeholder="Enter category name"
                  register={register}
                  errors={errors}
                />
                <BaseInput 
                  id="description"
                  label="Description"
                  type="text"
                  defaultValue={description}
                  placeholder="Enter category description"
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
        
        