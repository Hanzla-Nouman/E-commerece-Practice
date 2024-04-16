const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
// const path = require('path')

const errorMiddleware = require('./middleware/error');

app.use(cors())
app.use(express.json()) 
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

  
// Route Imports -------------------------------------------
const productRoute = require("./routes/productRoute"); 
const userRoute = require("./routes/userRoute"); 
const orderRoute = require("./routes/orderRoute"); 
 
app.use("/api/v1",productRoute);
app.use("/api/v2",userRoute);
app.use("/api/v3",orderRoute);

// Middleware for error
app.use(errorMiddleware);

module.exports = app