const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("it is owener router")
    console.log("owener routes working");
})

module.exports = router