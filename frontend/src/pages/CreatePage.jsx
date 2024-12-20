import React, { useState } from 'react'

export const CreatePage = () => {

  const [form, setForm] = useState({
    name: '',
    price: '',
    imageUrl: ''
  })

  return (
    <div className='dark:bg-[#00060D]'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-8'>
        <div className='w-full rounded-lg shadow  md:mt-0 sm:max-w-lg'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='flex justify-center font-bold text-2xl text-white md:text-3xl '>Create New Product</h1>
            <form className='space-y-4 md:space-y-6 dark:bg-[#151e27] rounded-xl px-4 py-5'>
              <div>
                <label htmlFor='Productname' className='block mb-2 text-sm font-medium dark:text-[#80A2A6]'>Product name:</label>
                <input className='border rounded-lg block w-full p-2.5 focus:outline-none dark:bg-[#151e27] dark:text-[#80A2A6] border-current dark:focus:ring-[#d4635f]' placeholder='Product name' required/>
              </div>
              <div>
                <label htmlFor='Productname' className='block mb-2 text-sm font-medium dark:text-[#80A2A6]'>Price:</label>
                <input className='border rounded-lg block w-full p-2.5 focus:outline-none dark:bg-[#151e27] dark:text-[#80A2A6] border-current' placeholder='Price' required/>
              </div>
              <div>
                <label htmlFor='Productname' className='block mb-2 text-sm font-medium dark:text-[#80A2A6]'>Image URL:</label>
                <input className='border rounded-lg block w-full p-2.5 focus:outline-none dark:bg-[#151e27] dark:text-[#80A2A6] border-current' placeholder='image link' required/>
              </div>
              <button type='submit' className=' bg-blue-500 w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center'>Add product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
