import { useGetAllTransactionQuery } from "../services/transitionsApi";
import { useMemo, useState } from "react";

const useGetAllTransaction = (defaultSize?: number) => {
    const [size, setSize] = useState(defaultSize || 6);

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: size,
    });

    const apiQueryParams = useMemo(() => ({
        page: pagination.pageIndex,
        size: pagination.pageSize,
    }), [pagination]);
    const { data, error, isLoading, refetch } = useGetAllTransactionQuery(apiQueryParams);

    const onSubmit = async () => {
        const result = await refetch();
        console.log(result)
    }

    return { onSubmit, data, isLoading, error, pagination, setPagination, setSize };
}

export default useGetAllTransaction;