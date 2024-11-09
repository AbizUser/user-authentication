import InputField from '@/app/features/auth/components/inputField'
import React from 'react'

const Signup = () => {
  return (
    <div className='mx-auto max-w-sm my-14'>
      <h2 className='text-center font-medium text-2xl mb-4'>新規登録</h2>
      <form>
        <InputField/>
        <InputField />
        <InputField />
        <div className='mt-4'>
          <button></button>
        </div>
      </form>
    </div>
  )
}

export default Signup
