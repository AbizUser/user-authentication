"use client"
import Button from '@/app/features/auth/components/Button'
import InputField from '@/app/features/auth/components/InputField'
import { useSignupForm } from '@/app/features/auth/hooks/useSignupForm'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  const { form, onSubmit } = useSignupForm();

  return (
    <div className='mx-auto max-w-sm my-14'>
      <h2 className='text-center font-medium text-2xl mb-4'>新規登録</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputField 
          label='ユーザ名' 
          name='username' 
          type='text'
          placeholder='ユーザー名'
          register={form.register}
        />
        {form.formState.errors.username && (
          <p className='text-red-500'>
            {form.formState.errors.username?.message}
          </p>
        )}
        <InputField 
          label='メールアドレス' 
          name='email' 
          type='email'
          placeholder='メールアドレス'
          register={form.register}
        />
                {form.formState.errors.email && (
          <p className='text-red-500'>
            {form.formState.errors.email?.message}
          </p>
        )}
        <InputField 
          label='パスワード' 
          name='password' 
          type='password'
          placeholder='パスワード'
          register={form.register}
        />
                {form.formState.errors.password && (
          <p className='text-red-500'>
            {form.formState.errors.password?.message}
          </p>
        )}
        <div className='mt-4'>
          <Button type='submit' colorClass='bg-blue-500 hover:bg-blue-700'>新規登録</Button>
        </div>
      </form>
      <Link
        href={"/auth/login"}
        className='mt-4 block text-center text-blue-400'
      >
        既に登録済みの方はこちら
      </Link>
    </div>
  )
}

export default Signup
