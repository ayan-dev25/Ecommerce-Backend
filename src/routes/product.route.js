import express from 'express'
import { createProduct, getAllProducts, getProductById, updateProduct } from '../controllers/product.controller.js';


const router = express.Router();

router.get('/products', getAllProducts)
router.get('/products/:id',getProductById)
router.post('/products',createProduct)
router.put('/products/:id',updateProduct)
router.delete('/products/:id',(req,res)=>{
    res.send('delete particular products')
})

export default router;