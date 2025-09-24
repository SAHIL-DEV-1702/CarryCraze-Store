const mongoose = require("mongoose");

const productSchmea = new mongoose.Schema({

    name: {
        type: String,
    },
    image: {
        type: Buffer,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    bgcolor: {
        type: String,
    },
    panecolor: {
        type: String,
    },
    textcolor: {
        type: String,
    }

}, { timestamps: true })

const productModel = mongoose.model("productModel", productSchmea);

module.exports = productModel;