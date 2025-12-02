import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useUpdateWalletMutation } from "../services/walletApi";

const schema = z.object({
  name: z.string().min(3, "Wallet name is required"),
  description: z.string().optional(),
});

const useEditWallet = (accountId: number) => {
    const [ update, { isLoading }] = useUpdateWalletMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    })

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
        console.log('data', data);
        const payload = { ...data, accountId };
        const result = await update(payload).unwrap();
        console.log('result', result)

        if (result?.success) {
            toast.success('Wallet updated successful!');
        } else {
            toast.error(result?.message || 'Wallet updating failed');
        }
    } catch (error) {
        console.log(error)
    } finally {
        reset()
    }
  };

  return { onSubmit, register, handleSubmit, errors, isLoading };
}

export default useEditWallet;