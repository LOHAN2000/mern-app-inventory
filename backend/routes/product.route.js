import express from 'express'
import { ProductController } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', ProductController.getProducts)

router.post('/', ProductController.postProduct)

router.put('/:id', ProductController.putProduct)

router.delete('/:id', ProductController.deteleProduct)

export default router;