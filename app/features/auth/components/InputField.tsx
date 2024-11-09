import React from 'react'

const InputField = () => {
  return (
    <div>
      <label 
        htmlFor="name"
        className='text-gray-700 text-sm font-bold mb-1 block mt-4'>
          ユーザ名
      </label>
      <input
        type="text" 
        id='name' 
        placeholder='ユーザ名' 
        className='border rounded w-full shadow py-3 px-4 text-gray-700 leading-tight focus:outline-none'
      />
    </div>
  )
}

export default InputField
