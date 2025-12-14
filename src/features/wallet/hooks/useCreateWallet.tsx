import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useCreateWalletMutation } from "../services/walletApi";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(3, "Wallet name is required"),
  description: z.string().optional(),
});

const useCreateWallet = () => {
    const [ create, { isLoading }] = useCreateWalletMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    })

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
        console.log('data', data);
        const result = await create(data).unwrap();
        console.log('result', result)

        if (result?.success) {
            toast.success('Wallet added successful!');
        } else {
            toast.error(result?.message || 'Wallet adding failed');
        }
    } catch (error) {
        console.log(error)
    } finally {
        reset()
    }
  };

  return { onSubmit, register, handleSubmit, errors, isLoading };
}

export default useCreateWallet;