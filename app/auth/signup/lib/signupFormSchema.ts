import { z } from "zod";

export const useSignupFormSchema = z.object({
  username: z
  .string()
  .min(2, { message: "ユーザ名は2文字以上で入力してください。"}),
  email: z.string().email({ message: "メールアドレスが正しくありません。"}),
  password: z
  .string()
  .min(2, { message: "ユーザ名は2文字以上で入力してください。"}).max(10, {message: "パスワードは10文字以内で入力してください。"}),
});