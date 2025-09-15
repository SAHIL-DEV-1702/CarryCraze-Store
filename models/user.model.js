const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        },
        cart: {
            type: Array,
        },
        isAdmin: {
            type: Boolean,
        },
        orders: {
            type: Array,
        },
        contact: {
            type: number,
        },
        picture: {
            type: String
        }

    },

    { timestamps: true }
)

const userModel = mongoose.model("userModel", userSchema)

module.exports = userModel;