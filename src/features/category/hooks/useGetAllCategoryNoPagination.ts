import { useGetAllCategoriesNoPaginationQuery } from "../services/categoryApi";

const useGetAllCategoryNoPagination = () => {
    const { data, isLoading, isError, error, refetch} = useGetAllCategoriesNoPaginationQuery();

    const onSubmit = async () => {
        const result = await refetch().unwrap();
        console.log(result)
    };

    return { onSubmit, data, isLoading, isError, error };
}

export default useGetAllCategoryNoPagination;