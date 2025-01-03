import React, { useContext, useState } from 'react'
import { toast, Toaster } from 'sonner';
import { AppContext } from '../store/AppContext'

export const CreatePage = () => {

  const { addProduct } = useContext(AppContext)
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: ''
  })

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form, [name]: value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    // Llamar a la función para agregar el producto y obtener la respuesta
    const { success, message } = await addProduct(form);
    // Si el producto se agregó exitosamente
    if (success) {
      toast.success('Product uploaded')
      setForm({
        name: '',
        price: '',
        image: ''
      });
    } else {
      // Mostrar un mensaje de error en caso de fallo
      toast.error(`Error: ${message}`);
    }
  }

  return (
    <div className='dark:bg-[#00060D] '>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-screen'>
        <div className='w-full rounded-lg  md:mt-0 sm:max-w-lg'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='flex justify-center font-bold text-2xl text-[#41A8D8] dark:text-[#80A2A6] md:text-3xl '>Create New Product</h1>
            <form className='space-y-4 md:space-y-6 dark:bg-[#151e27] bg-[#ffffff] rounded-xl px-4 py-5 shadow-xl' onSubmit={onSubmit}>
              <div>
                <label htmlFor='Productname' className='block mb-2 text-sm font-medium dark:text-[#80A2A6] text-slate-600'>Product name:</label>
                <input className='border rounded-lg block w-full p-2.5  dark:bg-[#151e27] dark:text-[#a6afaf] text-slate-500 dark:border-current focus:outline-none focus:border-l-blue-200 dark:focus:border-[#347cbf] focus:ring-1' value={form.name} name='name' type='text' placeholder='Product name' required onChange={onInputChange} />
              </div>
              <div>
                <label htmlFor='Productname' className='block mb-2 text-sm font-medium dark:text-[#80A2A6] ext-slate-600'>Price:</label>
                <input className='border rounded-lg block w-full p-2.5 dark:bg-[#151e27] dark:text-[#a6afaf]  text-slate-500 dark:border-current focus:outline-none focus:border-l-blue-200 dark:focus:border-[#347cbf] focus:ring-1' value={form.price} name='price' type='number' placeholder='Price' required onChange={onInputChange}/> 
              </div>
              <div>
                <label htmlFor='Productname' className='block mb-2 text-sm font-medium dark:text-[#80A2A6] ext-slate-600'>Image URL:</label>
                <input className='border rounded-lg block w-full p-2.5 dark:bg-[#151e27] dark:text-[#a6afaf]  text-slate-500 dark:border-current focus:outline-none focus:border-l-blue-200 dark:focus:border-[#347cbf] focus:ring-1' value={form.image} name='image' type='text' placeholder='image link' required onChange={onInputChange} />
              </div>
              <button type='submit' className='capitalize bg-orange-600 w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center hover:bg-orange-500'>Add product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
