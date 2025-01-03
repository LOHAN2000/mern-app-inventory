import React, { useState } from 'react'

export const ProductCard = ({ product, onDelete, isOpen, selectedProduct }) => {
  
  const { name, price, image, _id } = product 

  const handleModal = () => {
    isOpen(true)
    selectedProduct(product)
  }

  return (
    <div className='dark:bg-orange-600 bg-[#ffffff] m-3 rounded-lg shadow-md flex flex-col justify-between transition-all  ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 ..'>
      <a href='#'>
        <img className='h-60 sm:h-40 w-full object-cover rounded-t-lg' src={image}/>
      </a>
    <div className='px-2 py-2 flex flex-col flex-grow'>
      <a href='#'>
        <h1 className='text-xl font-semibold text-left text-slate-800  dark:text-[#00060D] tracking-tight mb-2'>{name}</h1>
      </a>
      <div className='flex items-center justify-between mt-auto'>
        <span className='text-slate-700  dark:text-[#00060D] text-xl font-semibold me-auto shadow-sm'>${price}</span>
        <div className='flex justify-between gap-1'>
          <a href='#' onClick={handleModal} className='flex items-center border-2 bg-[#41A8D8] text-white hover:bg-blue-400 dark:bg-orange-600 dark:text-orange-950 dark:border-orange-300 dark:hover:bg-orange-500 transition duration-300 cursor-pointer p-2 rounded-lg'>
            <i className="fa-solid fa-pen-to-square text-lg"></i>
          </a>
          <a href='#' onClick={() => onDelete(_id)} className='flex items-center border-2 bg-[#41A8D8] text-white hover:bg-blue-400 dark:bg-orange-600 dark:text-orange-950 dark:border-orange-300 dark:hover:bg-orange-500 transition duration-300 cursor-pointer p-2 rounded-lg'>
            <i className="fa-solid fa-trash text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  )
}
