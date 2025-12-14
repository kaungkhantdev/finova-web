import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useCreateCategoryMutation } from "../services/categoryApi";

const schema = z.object({
  name: z.string().min(3, "Category name is required"),
  description: z.string().optional(),
});

const useCreateCategory = () => {
    const [ create, { isLoading }] = useCreateCategoryMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    })

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
        const result = await create(data).unwrap();

        if (result?.success) {
            toast.success('Category added successful!');
        } else {
            toast.error(result?.message || 'Category adding failed');
        }
    } catch (error) {
        console.log(error)
    } finally {
        reset()
    }
  };

  return { onSubmit, register, handleSubmit, errors, isLoading };
}

export default useCreateCategory;