import { Product } from '../models/Product.model.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, description, productImage, category, inventory, averageRating } = req.body;
        const validationDetais = validateProduct(req.body);
        if (!validationDetais['flag']) {
            res.status(501).json({
                status: 501,
                message: validationDetais.message
            });
            return;
        }
        const newProduct = await Product.create({
            name, price, description, productImage, category, inventory, averageRating
        })
        console.log('a new product added',newProduct)
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        const validationDetais = validateProduct(req.body);
        if (!validationDetais['flag']) {
            res.status(501).json({
                status: 501,
                message: validationDetais.message
            });
            return;
        }
        const newProduct = await Product.create({
            name, price, description, productImage, category, inventory, averageRating
        })
        console.log('a new product added',newProduct)
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const validateProduct = (product) => {
    const categoryEnums = ['Electronics', 'Fashion', 'Books', 'Home Appliances', 'Beauty', 'Sports', 'Toys', 'Furniture']
    let message = "Success";
    let flag = true;
    const { name, price, description, productImage, category, inventory, averageRating } = product;
    if (!name) {
        message = "Product Name can not be empty"
        flag = false;
        return { flag, message };
    }
    if (price < 0) {
        message = "Product price can not be negative"
        flag = false;
        return { flag, message };
    }
    if (!description) {
        message = "Product description can not be empty"
        flag = false;
        return { flag, message };
    }
    if (!categoryEnums.includes(category)) {
        message = "Product category should be different"
        flag = false;
        return { flag, message };
    }
    if (inventory < 0) {
        message = "Product Inventory can not be negative"
        flag = false;
        return { flag, message };
    }
    if (averageRating < 0 || averageRating > 5) {
        message = "Product rating should be in the range 0-5"
        flag = false;
        return { flag, message };
    }
    return { flag, message }
}

export { getAllProducts, createProduct }