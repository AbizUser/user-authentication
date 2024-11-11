import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { signupFormSchema } from "@/app/features/auth/lib/FormSchema";
import { z } from "zod";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useSignupForm = () => {
  const [error, setError] = useState<string>("")

  const router = useRouter();
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signupFormSchema>> = async (
    data 
  ) => {
    const { username, email, password } = data;
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (signUpError) {
        // console.log(signUpError);
        setError(signUpError.message);
        return;
      }
      const { error: userError} = await supabase
      .from("User")
      .insert([{ id: data.user?.id, username, email }]);

    if (userError) {
      if (
        userError.message.includes(
          "duplicate key value violates unique constraint"
        )
      ) {
        setError("既に存在するユーザです");
      }
      return;
    }

      router.push("/auth/email-confirm")
    } catch (err) {
      if (err instanceof Error) {
      }
    }
  };

  return { form, onSubmit, error };
};