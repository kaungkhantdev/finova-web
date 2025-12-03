import { useGetAllTransactionQuery } from "../services/transactionsApi";
import { useMemo, useState } from "react";

const useGetAllTransaction = (recent: boolean = false, defaultSize?: number, search?: string) => {
    const [size, setSize] = useState(defaultSize || 6);

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: size,
    });

    const apiQueryParams = useMemo(() => ({
        page: pagination.pageIndex,
        size: pagination.pageSize,
        s: search,
    }), [pagination, search]);
    const { data, error, isLoading, refetch } = useGetAllTransactionQuery({
        ...apiQueryParams,
        recent
    });

    const onSubmit = async () => {
        const result = await refetch();
        console.log(result)
    }

    return { onSubmit, data, isLoading, error, pagination, setPagination, setSize };
}

export default useGetAllTransaction;