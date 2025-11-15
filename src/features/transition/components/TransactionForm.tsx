
import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSet, FieldTitle } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { BanknoteArrowUp, Calendar, CheckCircle, PiggyBank } from "lucide-react"
import BaseInput from "@/components/common/BaseInput"
import useIncomeExpense from "../hooks/useIncomeExpense"
import { CategoryCombobox } from "@/features/category"
import { useGetAllWalletNoPagination } from "@/features/wallet/hooks"

export const TransactionForm = ({ type }:  { type: string }) => {
    const { data } = useGetAllWalletNoPagination();
    console.log('data', data)
    const {
        register,
        handleSubmit,
        formState: { errors },
        onSubmit,
        watch,
        setValue,
        // isLoading,
    } = useIncomeExpense();

    const preview = {
        transaction_type_id: watch("transaction_type_id"),
        amount: watch("amount"),
        account_id: watch("account_id"),
        category_id: watch("category_id"),
        name: watch("name"),
        description: watch("description"),
    }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-y-6">

      <div className="hidden md:block rounded-xl border">
        <div className=" p-3 flex items-center justify-center">
            <div className="w-full max-w-md">
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
                                    K Bank - {preview.transaction_type_id}
                                </h2>
                            </div>
                        </div>
                    
                    </div>
                    
                    {/* Amount */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-medium text-gray-900 text-wrap break-all">
                        {preview.amount?.length ? preview.amount : '0.0'}
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
                            <p className="text-gray-900 mb-1 text-sm text-wrap break-all">{preview.name?.length ? preview.name : 'Your title'}</p>
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
                <p className="text-gray-900 text-wrap break-all">{ preview.description ?? "Invoice #7702077"}</p>
                </div>
            </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3 w-full">
                <BaseInput
                id="name"
                register={register}
                errors={errors}
                label="Title"
                type="text"
                required
                placeholder="Enter your Title" />
            
                <BaseInput
                id="amount"
                register={register}
                errors={errors}
                label="Amount"
                type="number"
                required
                placeholder="Enter your amount" />
            </div>

            {/* Categories */}
            <div className="w-full max-w-md grid gap-3" >
                <Label htmlFor={`${type}-amount`}>Category</Label>
                <CategoryCombobox
                    value={watch('category_id')}
                    onChange={(val) => setValue('category_id', Number(val))}
                 />
                {errors.category_id && (
                    <span className="text-red-500 text-sm">{errors.category_id.message}</span>
                )}
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
                        <RadioGroup 
                            defaultValue="kubernetes" 
                            className="grid grid-cols-2 gap-3"
                            onValueChange={(val) => setValue('account_id', parseInt(val))}
                            >
                                {data?.data ? 
                                    data?.data.map((account) => (
                                        <FieldLabel key={account.id} htmlFor={account.id.toString()}>
                                            <Field orientation="horizontal">
                                                <FieldContent>
                                                    <FieldTitle>
                                                        <PiggyBank className=" size-4 " />
                                                        <h1>{account.name}</h1>
                                                    </FieldTitle>
                                                    <FieldTitle>{account.amount+ ' ' + account.currency_code}</FieldTitle>
                                                </FieldContent>
                                                <RadioGroupItem value={account.id.toString()} id={account.id.toString()} />
                                            </Field>
                                        </FieldLabel>
                                    ))
                                 : (
                                    <FieldLabel htmlFor="no-data">
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle>
                                                    <PiggyBank className=" size-4 " />
                                                    <h1>No Account</h1>
                                                </FieldTitle>
                                                <FieldTitle>0.00 </FieldTitle>
                                            </FieldContent>
                                            <RadioGroupItem value="no-data" id="no-data" />
                                        </Field>
                                    </FieldLabel>
                                )}
                                
                            </RadioGroup>
                        </FieldSet>
                    </FieldGroup>
                </div>

                <div className="grid gap-3 mt-4">
                    <Label htmlFor={`${type}-description`}>Notes</Label>
                    <Textarea 
                        id={`${type}-description`}
                        className="max-h-40"
                        placeholder="Write your note."
                        {...register('description')}
                    />
            </div>
            </ScrollArea>
            
        </div>
        
        <div className="justify-end flex gap-3 w-full col-span-2">
            <Button type="submit" size={'lg'} className="rounded-full">
                Confirm
            </Button>
            <DialogClose asChild>
                <Button type="button" variant={'outline'} size={'lg'} className="rounded-full">
                    Cancel
                </Button>
            </DialogClose>
        </div>
      </form>
    </div>
  )
}