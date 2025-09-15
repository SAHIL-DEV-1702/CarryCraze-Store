const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/PROJECT-BAG-SHOP")
    .then(() => {
        console.log("Database connected successfully");

    })
    .catch((err) => {
        console.log(err)
    })

module.exports = mongoose.connection;