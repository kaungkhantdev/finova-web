import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useUpdateCategoryMutation } from "../services/categoryApi";

const schema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

const useEditCategory = (id: string) => {
    const [ update, { isLoading }] = useUpdateCategoryMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    })

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
        const payload = { ...data };
        const result = await update({id, body: payload}).unwrap();

        if (result?.success) {
            toast.success('Category updated successful!');
        } else {
            toast.error(result?.message || 'Category updating failed');
        }
    } catch (error) {
        console.log(error)
    } finally {
        reset()
    }
  };

  return { onSubmit, register, handleSubmit, errors, isLoading };
}

export default useEditCategory;