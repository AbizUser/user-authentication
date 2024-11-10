import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSignupFormSchema } from "@/app/features/auth/lib/FormSchema";
import { z } from "zod";

export const useSignupForm = () => {
  const form = useForm<z.infer<typeof useSignupFormSchema>>({
    resolver: zodResolver(useSignupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<z.infer<typeof useSignupFormSchema>> = (data) => {
    const { username, email, password } = data;
    console.log(username, email, password)
  }

  return { form, onSubmit };
};