import { z } from "zod";

export const signupFormSchema = z.object({
  username: z
  .string()
  .min(1, { message: "ユーザ名は2文字以上で入力してください。"}),
  email: z.string().email({ message: "メールアドレスが正しくありません。"}),
  password: z
  .string()
  .min(6, { message: "ユーザ名は5文字以上で入力してください。"}).max(10, {message: "パスワードは10文字以内で入力してください。"}),
});

export const loginFormSchema = z.object({
  email: z.string().email({ message: "メールアドレスが正しくありません。"}),
  password: z
  .string()
  .min(2, { message: "ユーザ名は2文字以上で入力してください。"}).max(10, {message: "パスワードは10文字以内で入力してください。"}),
});