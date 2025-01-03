import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../store/AppContext'
import { ProductCard } from '../Components/ProductCard'
import { toast } from 'sonner'

export const HomePage = () => {

  const { products, getProducts, deleteProduct, updateProduct } = useContext(AppContext) 
  const [selectedProduct, setSelectedProduct] = useState({
    name: '',
    price: '',
    image: ''
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  const onDelete = async (_id) => {
    const {success, message} = await deleteProduct(_id)
    if (success) {
      toast.success('Product deleted succesfully')
    }
    else {
      toast.error(`Error: ${message}`);
    }
  }

  const sendData = async () => {
    const {success, data, message} = await updateProduct(selectedProduct._id, selectedProduct)
    if (success) {
      toast.success(`Product ${data.name} updated`)
    } else {
      toast.error(message)
    }
    setIsOpen(false)
  }

  return (
    <div className='container p-4 pt-5 mx-auto flex flex-col gap-y-4 sm:gap-y-8'>
      <h1 className='text-2xl md:text-3xl font-bold text-center text-[#41A8D8] dark:text-[#80A2A6] uppercase'>Products</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.map((item, index) => (
          <ProductCard key={index} product={item} onDelete={onDelete} isOpen={setIsOpen} selectedProduct={setSelectedProduct}/>
        ))}
      </div>
      {isOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-60 '>
          <div className='flex flex-col justify-center items-center mx-auto sm:h-screen py-8 px-6'>
            <div className='relative shadow-lg w-full rounded-lg md:mt-0 sm:max-w-lg dark:bg-[#00060D] bg-[#ffffff] flex flex-col items-center justify-center space-y-4 md:space-y-6 py-7'>
            <h1 className='uppercase font-bold text-lg md:text-2xl text-[#41A8D8] dark:text-[#80A2A6]'>
              Editing {selectedProduct.name}
            </h1>
            <i onClick={() => setIsOpen(!isOpen)} className="dark:text-white text-slate-700 absolute right-7 top-0 fa-solid fa-xmark text-lg"></i>
              <form onSubmit={(e) => e.preventDefault()} className='flex flex-col w-5/6 space-y-4'>
                <label htmlFor='Productname' className='block mb-1 text-sm font-medium dark:text-[#80A2A6] text-slate-600'>Product name:</label>
                <input className='border rounded-lg block w-full p-2  dark:bg-[#151e27] dark:text-[#a6afaf] text-slate-500 dark:border-current focus:outline-none focus:border-l-blue-200 dark:focus:border-[#347cbf] focus:ring-1' value={selectedProduct.name} name='name' type='text' placeholder='Product name' onChange={(e) => setSelectedProduct({...selectedProduct, [e.target.name]: e.target.value})}/>
                <label htmlFor='Price' className='block mb-1 text-sm font-medium dark:text-[#80A2A6] text-slate-600'>Price:</label>
                <input className='border rounded-lg block w-full p-2  dark:bg-[#151e27] dark:text-[#a6afaf] text-slate-500 dark:border-current focus:outline-none focus:border-l-blue-200 dark:focus:border-[#347cbf] focus:ring-1' value={selectedProduct.price} name='price' type='number' placeholder='Price' onChange={(e) => setSelectedProduct({...selectedProduct, [e.target.name]: e.target.value})}/>
                <label htmlFor='Image' className='block mb-1 text-sm font-medium dark:text-[#80A2A6] text-slate-600'>Image link:</label>
                <input className='border rounded-lg block w-full p-2  dark:bg-[#151e27] dark:text-[#a6afaf] text-slate-500 dark:border-current focus:outline-none focus:border-l-blue-200 dark:focus:border-[#347cbf] focus:ring-1' value={selectedProduct.image} name='image' type='text' placeholder='Image link' onChange={(e) => setSelectedProduct({...selectedProduct, [e.target.name]: e.target.value})}/>
                <div className='pt-4'>
                  <button onClick={sendData} type='submit' className='capitalize bg-orange-600 w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center hover:bg-orange-500'>Add product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
