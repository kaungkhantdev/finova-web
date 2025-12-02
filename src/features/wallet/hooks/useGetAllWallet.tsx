import type { ApiQueryParams } from "@/types";
import { useMemo, useState } from "react";
import { useGetAllWalletQuery } from "../services/walletApi";

const useGetAllWallet = (queryParams?: ApiQueryParams) => {
    const [page, setPage] = useState(queryParams?.page || 0);
    const [size, setSize] = useState(queryParams?.size || 6);

    const apiQueryParams = useMemo(() => ({
        page,
        size,
    }), [page, size])

    const { data, isLoading, error, refetch } = useGetAllWalletQuery(apiQueryParams)

    const onSubmit = async () => {
        try {
            const result = await refetch().unwrap();
            console.log(result)

        } catch(err) {
            console.log(err)
        }
    }

    return { onSubmit, data, isLoading, error, setPage, setSize, page}
}

export default useGetAllWallet;