const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const { generateToken } = require('../utils/generatetoken')
const flash = require("connect-flash");
const productModel = require('../models/product.model')

module.exports.registerUser = async (req, res) => {

    try {
        let { name, email, password } = req.body

        user = await userModel.findOne({ email: email })

        if (user) {
            req.flash("error", "EMAIL IS ALREADY REGISTERED")
            return res.redirect('/')                                     // // changes occured
        }
        bcrypt.genSalt(10, (err, salt) => {

            bcrypt.hash(password, salt, async (error, hash) => {

                if (error) { res.send(err.message) }
                else {

                    let user = await userModel.create({
                        email,
                        name,
                        password: hash

                    })

                    let token = generateToken(user)
                    res.cookie('token', token);
                    req.flash("success", "USER CREATED SUCCESSFULLY");   // i will use flsh message here 
                    res.redirect("/")

                }
            })
        })
    }
    catch (error) {
        res.send(error.message)

    }

}

module.exports.loginUser = async (req, res) => {

    let { email, password } = req.body

    let user = await userModel.findOne({ email: email })

    if (!user) {
        req.flash("error", "CREATE YOUR ACCOUNT FIRST")        // changes occured
        return res.redirect('/')
    }
    bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
            let token = generateToken(user)
            res.cookie("token", token)
            let products = await productModel.find()
            res.render("shop.ejs", { products })

        } else {
            req.flash("error", "INVALID CREDENTIAL")
            return res.redirect('/')                     // changes occured
        }
    });



}

module.exports.logoutUser = (req, res) => {

    try {
        res.clearCookie("token")
        res.redirect('/')

    } catch (error) {
        res.send(error, "something went wrong in logout")
    }

}



