const db = require('./config/mongoose.connection.js')
const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");

const cookieParser = require("cookie-parser");
const path = require("path");
const router = require("./routes/user.router.js");
const userRouter = require('./routes/user.router.js')
const owenerRouter = require('./routes/owener.router.js')
const productRouter = require('./routes/product.router.js');
require('dotenv').config()
const indexRouter = require('./routes/index.js')

app.use(
    expressSession({
        secret: process.env.SESSION_SEC_KEY,
        resave: false,
        saveUninitialized: true

    }))

app.use(flash())
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success');
    res.locals.error_msg = req.flash('error');
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.use('/', indexRouter)
app.use("/owener", owenerRouter)
app.use("/product", productRouter)
app.use("/user", userRouter)

app.listen(8008, () => {
    console.log("server running on port 8008")
})