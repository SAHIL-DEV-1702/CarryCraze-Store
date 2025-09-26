const mongoose = require("mongoose");
const productModel = require("./product.model");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,

        },
        cart: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: productModel
        }],
        orders: {
            type: Array,
        },
        contact: {
            type: Number,
        },
        picture: {
            type: String
        }

    },

    { timestamps: true }
)

const userModel = mongoose.model("userModel", userSchema)

module.exports = userModel;