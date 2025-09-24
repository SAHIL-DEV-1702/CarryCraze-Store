const express = require('express');
const router = express.Router();
const owenerModel = require('../models/oweners.models')


// console.log("ENV OF NODE ", process.env.ENV)
console.log("ENV OF NODE ", process.env.NODE_ENV)


if (process.env.NODE_ENV === "development") {

    router.post('/create', async (req, res) => {

        let { name, password, email } = req.body
        owener = await owenerModel.find()

        if (owener.length > 0) {
            res.status(504).send("dont have permmision to create new owener ")
            console.log("you have no permmision to set owener")
        }
        else {

            let createdOwener = await owenerModel.create({
                name,
                email,
                password,
            })
            console.log("owener created successfully")
            res.status(201).send(createdOwener)
        }

    }
    )
}

router.get('/admin', (req, res) => {
    let success = req.flash("success")
    res.render("createproducts", { success });
})


module.exports = router