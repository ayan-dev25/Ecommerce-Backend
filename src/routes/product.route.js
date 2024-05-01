import express from 'express'
import { getAllProducts } from '../middlewares/product.middleware.js';

const router = express.Router();

router.get('/products', getAllProducts)
router.get('/products/:id',(req,res)=>{
    res.send('particular product')
})
router.post('/products',(req,res)=>{
    res.send('post products')
})
router.put('/products/:id',(req,res)=>{
    res.send('update paricular product')
})
router.delete('/products/:id',(req,res)=>{
    res.send('delete particular products')
})

export default router;