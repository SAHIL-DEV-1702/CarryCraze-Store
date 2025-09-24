
const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken")

const isloggedin = async (req, res, next) => {
    if (!req.cookies.token) {
        req.flash("error", "YOU NEED TO LOGIN FIRST")
        res.redirect('/');
        return
    }
    try {

        let decode = jwt.verify(req.cookies.token, process.env.JWT_KEY)
        let user = await userModel.findOne({ email: decode.email }).select("-password")
        req.user = user

        next()


    } catch (error) {
        req.flash("error", "something went wrong")
        res.redirect("/")
        return
    }



}

module.exports = isloggedin