import { useState } from "react";
import { AddExpense } from "../components/AddExpense";
import { AddIncome } from "../components/AddIncome";
import TransactionTable from "../components/TransactionTable";
import SearchInput from "@/components/common/SearchInput";


const TransactionPage = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex items-center justify-center w-full 2xl:min-h-screen">
        <div className="2xl:min-w-7xl">
            <div className="mb-4 gap-2 flex flex-col md:flex-row justify-between md:items-center">
                <h1 className="text-lg font-medium ">Transactions</h1>
                <div className='gap-2 flex flex-col md:flex-row md:items-center flex-shrink-0'>
                    <SearchInput setSearch={setSearch}/>
                    <div className="flex gap-2">
                        <AddIncome/>
                        <AddExpense/>
                    </div>
                </div>
            </div>
            <div>
                <TransactionTable search={search}/>
            </div>
        </div>
    </div>
  );
}

export default TransactionPage