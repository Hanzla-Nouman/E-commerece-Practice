const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const dotenv = require("dotenv");



dotenv.config({ path: "backend/config/.env" });
const errorMiddleware = require('./middleware/error');

const corsOptions = {
    origin: 'http://localhost:5173', // replace with your frontend domain
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  app.use(express.json()) 
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload()); 
 
// Middleware for error

// Route Imports -------------------------------------------
const productRoute = require("./routes/productRoute"); 
const userRoute = require("./routes/userRoute"); 
const orderRoute = require("./routes/orderRoute"); 
const paymentRoute = require("./routes/paymentRoute"); 

app.use("/api/v1",productRoute);
app.use("/api/v1",userRoute);
app.use("/api/v1",orderRoute);
app.use("/api/v1",paymentRoute);


app.use(errorMiddleware);
module.exports = app