import express from 'express'
import { createProduct, getAllProducts } from '../controllers/product.controller.js';


const router = express.Router();

router.get('/products', getAllProducts)
router.get('/products/:id',(req,res)=>{
    res.send('particular product')
})
router.post('/products',createProduct)
router.put('/products/:id',(req,res)=>{
    res.send('update paricular product')
})
router.delete('/products/:id',(req,res)=>{
    res.send('delete particular products')
})

export default router;