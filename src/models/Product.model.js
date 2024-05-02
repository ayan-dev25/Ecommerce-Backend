import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    productImage: [{
        type: String,
    }],
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Fashion', 'Books', 'Home Appliances', 'Beauty', 'Sports', 'Toys', 'Furniture']
    },
    inventory: {
        type: Number,
        default: 0,
        min: 0
    },
    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
}, { timestamps: true })

export const Product = mongoose.model('Product', productSchema)