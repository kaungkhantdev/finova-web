import { useGetAllWalletNoPaginationQuery } from "../services/walletApi"

const useGetAllWallet = () => {
    const { data, isLoading, error, refetch } = useGetAllWalletNoPaginationQuery()

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

export default useGetAllWallet;