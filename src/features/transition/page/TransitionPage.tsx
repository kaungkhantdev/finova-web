import { Input } from "@/components/ui/input";
import { AddExpense } from "../components/AddExpense";
import { AddIncome } from "../components/AddIncome";
import TransactionTable from "../components/TransactionTable";


const TransitionPage = () => {
  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex items-center justify-center w-full 2xl:min-h-screen">
        <div className="2xl:min-w-7xl">
            <div className="mb-4 flex justify-between items-center">
                <h1 className="text-lg font-medium ">Transactions</h1>
                <div className='gap-2 flex items-center flex-shrink-0'>
                    <Input placeholder="Search" className="rounded-full w-auto"/>
                    <AddIncome/>
                    <AddExpense/>
                </div>
            </div>
            <div>
                <TransactionTable/>
            </div>
        </div>
    </div>
  );
}

export default TransitionPage