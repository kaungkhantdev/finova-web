import type { ApiPaginationQueryParams } from "@/types/apiPagination.types";
import { useGetAllTransactionQuery } from "../services/transitionsApi";
import { useMemo, useState } from "react";

const useGetAllTransaction = (queryParams?: ApiPaginationQueryParams ) => {
    const [page, setPage] = useState(queryParams?.page || 0);
    const [size, setSize] = useState(queryParams?.size || 6);

    const apiQueryParams = useMemo(() => ({
        page,
        size,
    }), [page, size]);
    console.log("apiQueryParams", apiQueryParams);
    const { data, error, isLoading, refetch } = useGetAllTransactionQuery(apiQueryParams);

    const onSubmit = async () => {
        const result = await refetch();
        console.log(result)
    }

    return { onSubmit, data, isLoading, error, page, setPage, size, setSize  };
}

export default useGetAllTransaction;