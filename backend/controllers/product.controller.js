import Product from '../models/product.model.js';
import mongoose from 'mongoose';


export class ProductController {

  static async getProducts (req, res) {
    try {
      const products = await Product.find({})
      res.status(200).json({success: true, data: products})
    } catch (error) {
      console.error('Several internal error: ', error)
    }
  }

  static async postProduct (req, res) {
    const product = req.body

    if (product === "") {
      return res.status(404).json({ success: false, message: 'No data'})
    }

    if(!product.name || !product.price || !product.image) {
      return res.status(400).json({ success: false, message: 'Please provide all fields'})
    }
    
    const newProduct  = new Product(product)

    try {
      await newProduct.save()
      res.status(201).json({success: true, data: newProduct})
    } catch (error) {
      console.error('Error in Create product:', error.message)
      res.status(500).json({success: false, message: 'Server error'})
    }
  }

  static async putProduct (req, res) {
    const { id } = req.params

    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({success: false, message: 'Invalid id'})
    }

    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true}) // Metodo que devuelve la data actualizada
      res.status(200).json({success: true, data: updatedProduct})
    } catch (error) {
      console.error('Several internal error', error)
    }
  }

  static async deteleProduct (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({success: false, message: 'Invalid id'})
    }

    try {
      await Product.findByIdAndDelete(id)
      res.status(200).json({ success: true, message: 'Product deleted'})
    } catch (error) {
      console.error('Error deleting product', error)
      res.status(500).json({success: false, message: 'Several internal error'})
    }
  }

}