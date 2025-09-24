const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/auth.controller')



router.post("/register", registerUser)

router.post("/loginUser", loginUser)

router.get("/logoutUser", logoutUser)

module.exports = router