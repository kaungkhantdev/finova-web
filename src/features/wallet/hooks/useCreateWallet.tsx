import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(3, "Wallet name is required"),
  description: z.string().optional(),
});

const useCreateWallet = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    })

  const onSubmit = () => {
    // Logic to open the create wallet dialog
    console.log("Open Create Wallet Dialog");
  };

  return { onSubmit, register, handleSubmit, errors };
}

export default useCreateWallet;