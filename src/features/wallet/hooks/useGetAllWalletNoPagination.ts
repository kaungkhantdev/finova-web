import { useGetAllWalletsNoPaginationQuery } from "../services/walletApi"

const useGetAllWalletNoPagination = () => {
    const { data, isLoading, error, refetch } = useGetAllWalletsNoPaginationQuery()

    const onSubmitWallet = async () => {
        try {
            const result = await refetch().unwrap();
            console.log(result)

        } catch(err) {
            console.log(err)
        }
    }

    return { onSubmitWallet, data, isLoading, error}
}

export default useGetAllWalletNoPagination;