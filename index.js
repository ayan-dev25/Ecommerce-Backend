import express from 'express'
import dotenv from "dotenv"
import { PORT } from './constants.js';
import productRoutes from './src/routes/product.route.js'
import connectDB from './src/db/connect.js';

dotenv.config({
    path: './env'
})


connectDB()
const app = express();
app.use(express.json())
app.use('/api/v1',productRoutes)

app.listen(PORT,(err)=>{
    if (err) console.log("Error in server setup")
    console.log(`Server is running on http://localhost:${PORT}`)
})