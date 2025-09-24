const express = require('express');
const router = express.Router()
const isloggedin = require('../middleware/isloggedin')
const productModel = require('../models/product.model.js');

router.get('/', (req, res) => {

    res.render("index.ejs", { error: [] })


})

router.get('/shop', isloggedin, async (req, res) => {

    let products = await productModel.find()

    res.render("shop.ejs", { products });
})

router.get('/logoutUser', isloggedin, (req, res) => {

    res.redirect("/");

})

module.exports = router