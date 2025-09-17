const mongoose = require('mongoose');
const config = require('config')
const dbgr = require("debug")("development:mongoose")


mongoose.connect(`${config.get("MONGODB_URI")}/PROJECT-BAG-SHOP`)
    .then(() => {
        dbgr("Database connected successfully");
    })
    .catch((err) => {
        dbgr("DATABASE CONNECTION ERROR", err)
    })

module.exports = mongoose.connection;