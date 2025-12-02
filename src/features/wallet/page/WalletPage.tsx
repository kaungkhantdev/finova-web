import { Button } from "@/components/ui/button";
import { WalletCard } from "../components/WalletCard";
import { WalletHeader } from "../components/WalletHeader";
import useGetAllWallet from "../hooks/useGetAllWallet";
import Loading from "@/components/common/Loading";


const Wallet = () => {
  const { data, isLoading, setPage, page } = useGetAllWallet()

  if (isLoading) return <Loading />;

  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex items-center justify-center w-full 2xl:min-h-screen">
      <div>
        <WalletHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.data.map((wallet, index) => (
            <WalletCard key={index} wallet={wallet} />
          ))}
        </div>
        {data?.metadata?.total_pages && (data?.metadata?.total_pages > (page + 1)) && (
          <div className="flex items-center justify-center">
            <Button size={'lg'} className="mt-6 rounded-full" onClick={() => setPage(page + 1)}>Load More</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
