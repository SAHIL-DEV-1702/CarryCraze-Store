const express = require('express');
const router = express.Router()
const isloggedin = require('../middleware/isloggedin')
const productModel = require('../models/product.model.js');
const userModele = require('../models/user.model.js')

router.get('/', (req, res) => {

    res.render("index.ejs", { error: [], loggedin: false })


})

router.get('/shop', isloggedin, async (req, res) => {

    let products = await productModel.find()
    let success = req.flash("success")
    res.render("shop.ejs", { products, success });
})


router.get('/addtocart/:productid', isloggedin, async (req, res) => {

    let user = await userModele.findOne({ email: req.user.email })
    user.cart.push(req.params.productid)
    await user.save()
    let success = req.flash("success", "ADEDED TO CART")
    res.redirect('/shop')
})

router.get('/cart', isloggedin, async (req, res) => {

    let user = await userModele.findOne({ email: req.user.email }).populate("cart")

    const bill = user.cart.reduce((total, product) => {

        return total = (Number(product.price) - Number(product.discount)) + 20;

    }, 0);

    res.render("cart.ejs", { user, bill });

})

router.get('/logoutUser', isloggedin, (req, res) => {

    res.redirect("/");

})

module.exports = router