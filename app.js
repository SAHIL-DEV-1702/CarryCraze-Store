const db = require('./config/mongoose.connection.js')
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const router = require("./routes/user.router.js");
const userRouter = require('./routes/user.router.js')
const owenerRouter = require('./routes/owener.router.js')
const productRouter = require('./routes/product.router.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    console.log("this site is working")
    res.send("working ")
})
app.use("/owener", owenerRouter)
app.use("/product", productRouter)
app.use("/user", userRouter)

app.listen(8008, () => {
    console.log("server running on port 8008")
})