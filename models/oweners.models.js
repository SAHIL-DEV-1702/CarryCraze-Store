const mongoose = require("mongoose");

const owenerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minLength: 3,
        },
        products: {
            type: Array,
            default: [],
        },
        gstin: {
            type: String,
        },
        password: {
            type: String,
        },
        picture: {
            type: String
        }



    }
    , { timestamps: true }
)

const owenerModel = mongoose.model("owenerModel", owenerSchema)

module.exports = owenerModel;
