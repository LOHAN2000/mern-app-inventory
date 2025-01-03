import React, { useState, useEffect } from 'react'
import { AppContext } from './AppContext'

export const AppProvider = ({ children }) => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async (newProduct) => {
    console.log(newProduct);
  
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: 'Please fill in all fields.' };
    }
  
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
  
      const data = await response.json();
      if (data.success) {
        setProducts((prev) => [...prev, data.data]);
        return { success: true, message: 'Product created successfully' };
      } else {
        // Handle API errors here (e.g., data.error)
        return { success: false, message: 'An error occurred while creating the product.' };
      }
    } catch (error) {
      console.error('Error adding product:', error);
      return { success: false, message: 'An error occurred while creating the product.' };
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch('/api/products', {
        method:'GET'
      })
      const data = await response.json()
      setProducts(data.data)
      
    } catch (error) {
      console.log('Error en la funcion getProducts', error)   
    }
  }

  const updateProduct = async (id, product) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })

      const data = await response.json()
      
      if (!data.success) {
        return {success:false, message: data.message}
      }
      setProducts((prev) => prev.map((item) => (item._id === id ? data.data : item)))
      return {success: true, data: data.data}
    } catch (error) {
     console.log('Error en el endpoint al actualizar el producto',error) 
    }
  }

  const deleteProduct = async (idProduct) => {
    try {
      const response = await fetch(`/api/products/${idProduct}`, {
        method:'DELETE'
      })

      const data = await response.json()
      
      if (!data.success) {
        return {success: false, message: data.message}
      }

      setProducts((prev) => prev.filter((product) => product._id !== idProduct))
      return {success: true, message: 'Producto eliminado correctamente'}

    } catch (error) {
      console.log('Error en el endpoint delete products', error)
    }
  }


  return (
    <AppContext.Provider value={{products, setProducts, addProduct, getProducts, deleteProduct, updateProduct}}>
      {children}
    </AppContext.Provider>
  )
}
