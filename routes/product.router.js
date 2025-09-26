const express = require('express')
const router = express.Router();
const upload = require('../config/multer.config')
const productModel = require('../models/product.model')



router.post("/create", upload.single('image'), async (req, res) => {

    try {
        let { textcolor, panelcolor, bgcolor, discount, price, name } = req.body
        let product = await productModel.create({

            image: req.file.buffer,
            price,
            name,
            discount,
            bgcolor,
            panelcolor,
            textcolor
        })
        req.flash("success", "product added successfully")
        res.redirect('/owener/admin')
    } catch (error) {
        res.send(error.message, "something went wrong ")
    }

})

module.exports = router
