
import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSet, FieldTitle } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { BanknoteArrowUp, Calendar, CheckCircle, LayoutDashboard, PiggyBank } from "lucide-react"

export const TransactionForm = ({ type }:  { type: string }) => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(`${type} submitted`)
    // Add your submission logic here
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <div className="hidden md:block">
        <div className=" p-3 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg">
                {/* Header */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all bg-green-100 dark:bg-green-900`}
                                >
                                <BanknoteArrowUp className="w-4 h-4" />
                                </div>
                                <h2 className="text-sm font-medium text-gray-600 mb-1">
                                    K Bank
                                </h2>
                            </div>
                        </div>
                    
                    </div>
                    
                    {/* Amount */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-medium text-gray-900">
                        + $43,450.50
                        </h1>
                    </div>
                    
                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-500 mb-1">Datetime</p>
                            <p className="text-gray-900 font-medium">Sep 10, 9:11 AM</p>
                        </div>
                        <div>
                            <p className="text-gray-500 mb-1">From</p>
                            <p className="text-gray-900 font-medium">K Bank Accounting</p>
                        </div>
                    </div>
                </div>
                
                {/* Timeline */}
                <div className="p-6">
                    <div className="space-y-4">
                        {/* Payment succeeded */}
                        <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 mt-0.5 w-4 h-4" />
                        <div>
                            <p className="text-gray-900 mb-1 text-sm">Adding income will succeeded at</p>
                            <p className="text-xs text-gray-500">Sep 10, 2024, 9:11 AM</p>
                        </div>
                        </div>
                        
                        {/* Payment started */}
                        <div className="flex items-start gap-3">
                        <Calendar className="text-gray-400 mt-0.5 w-4 h-4" />
                        <div>
                            <p className="text-gray-900 mb-1 text-sm">Transfer start</p>
                            <p className="text-xs text-gray-500">Sep 10, 2024, 9:11 AM</p>
                        </div>
                        </div>
                    </div>
                </div>
                
                
                {/* Notes */}
                <div className="p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Notes</h3>
                <p className="text-gray-900">Invoice #7702077</p>
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6 w-full">
            <div className="grid gap-3">
                <Label htmlFor={`${type}-title`}>Title</Label>
                <Input
                    id={`${type}-title`}
                    placeholder="Title"
                    required
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor={`${type}-amount`}>Amount</Label>
                <Input
                    id={`${type}-amount`}
                    placeholder="0.00"
                    required
                />
            </div>
        </div>
        
        <div className="grid gap-3 mt-4">
            <Label htmlFor={`${type}-description`}>Notes</Label>
            <Textarea 
            id={`${type}-description`}
            className="max-h-40"
            placeholder="Write your note."
            />
        </div>

        <ScrollArea className="sm:h-72">
            {/* Wallets */}
            <div className="w-full max-w-md">
                <FieldGroup>
                    <FieldSet>
                    <FieldLabel htmlFor="compute-environment-p8w">
                        Banks
                    </FieldLabel>
                    <FieldDescription>
                        Select your one of the bank.
                    </FieldDescription>
                    <div className=" grid gap-3">
                        <RadioGroup defaultValue="kubernetes" className="grid grid-cols-2 gap-3">
                            <FieldLabel htmlFor="kubernetes-r2h">
                            <Field orientation="horizontal">
                                <FieldContent>
                                    <FieldTitle>
                                        <PiggyBank className=" size-5 " />
                                    </FieldTitle>
                                    <FieldTitle>Kubernetes</FieldTitle>
                                </FieldContent>
                                <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
                            </Field>
                            </FieldLabel>
                            <FieldLabel htmlFor="kubernetes-r2h">
                            <Field orientation="horizontal">
                                <FieldContent>
                                    <FieldTitle>
                                        <PiggyBank className=" size-5 " />
                                    </FieldTitle>
                                    <FieldTitle>Kubernetes</FieldTitle>
                                </FieldContent>
                                <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
                            </Field>
                            </FieldLabel>
                            <FieldLabel htmlFor="vm-z4k">
                            <Field orientation="horizontal">
                                <FieldContent>
                                    <FieldTitle>
                                        <PiggyBank className=" size-5 " />
                                    </FieldTitle>
                                    <FieldTitle>Kubernetes</FieldTitle>
                                </FieldContent>
                                <RadioGroupItem value="vm" id="vm-z4k" />
                            </Field>
                            </FieldLabel>
                            <FieldLabel htmlFor="vm-z4k">
                            <Field orientation="horizontal">
                                <FieldContent>
                                    <FieldTitle>
                                        <LayoutDashboard className=" size-5 " />
                                    </FieldTitle>
                                    <FieldTitle>More</FieldTitle>
                                </FieldContent>
                                <RadioGroupItem value="vm" id="vm-z4k" />
                            </Field>
                            </FieldLabel>
                        </RadioGroup>
                    </div>
                    </FieldSet>
                </FieldGroup>
            </div>

            {/* Categories */}
            <div className="w-full mt-4 max-w-md">
                <FieldGroup>
                    <FieldSet>
                    <FieldLabel htmlFor="compute-environment-p8w">
                        Categories
                    </FieldLabel>
                    <FieldDescription>
                        Select your category.
                    </FieldDescription>
                    <div className="flex gap-3">
                    <RadioGroup defaultValue="kubernetes" className="flex gap-3">
                        <FieldLabel htmlFor="kubernetes-r2h">
                        <Field orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Kubernetes</FieldTitle>
                            </FieldContent>
                            <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
                        </Field>
                        </FieldLabel>
                        <FieldLabel htmlFor="vm-z4k">
                        <Field orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Kubernetes</FieldTitle>
                            </FieldContent>
                            <RadioGroupItem value="vm" id="vm-z4k" />
                        </Field>
                        </FieldLabel>
                    </RadioGroup>

                    <FieldLabel>
                        <Field orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>More</FieldTitle>
                            </FieldContent>
                        </Field>
                    </FieldLabel>
                </div>
                    </FieldSet>
                </FieldGroup>
            </div>
        </ScrollArea>
        
      </div>
      
      <div className="col-span-2"><hr /></div>
      <div className="justify-end flex gap-3 w-full col-span-2">
        <Button onClick={handleSubmit} size={'lg'} className="rounded-full">
          Confirm
        </Button>
        <DialogClose asChild>
          <Button type="button" variant={'outline'} size={'lg'} className="rounded-full">
            Cancel
          </Button>
        </DialogClose>
      </div>
    </div>
  )
}