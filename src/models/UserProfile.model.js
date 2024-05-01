import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const userProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    address: [addressSchema],
    mobileNumber: {
        type: String,
    },
    alternateMobileNumber: {
        type: String,
    },
    image: {
        type: String,
    }
})

export const UserProfile = mongoose.model("UserProfile",userProfileSchema)