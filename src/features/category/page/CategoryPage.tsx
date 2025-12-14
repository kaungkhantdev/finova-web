import { useState } from "react";
import SearchInput from "@/components/common/SearchInput";
import CategoryTable from "../components/CategoryTable";
import { CreateCategory } from "../components/CreateCategory";

const CategoryPage = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex items-center justify-center w-full 2xl:min-h-screen">
        <div className="2xl:min-w-7xl">
            <div className="mb-4 gap-2 flex flex-col md:flex-row justify-between md:items-center">
                <h1 className="text-lg font-medium ">Categories</h1>
                <div className='gap-2 flex flex-col md:flex-row md:items-center flex-shrink-0'>
                    <SearchInput setSearch={setSearch}/>
                    <CreateCategory/>
                </div>
            </div>
            <div>
                <CategoryTable search={search}/>
            </div>
        </div>
    </div>
  );
}

export default CategoryPage