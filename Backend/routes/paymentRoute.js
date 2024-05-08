const express = require("express"); 
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const { 
  processPayment,  
  sendStripeApiKey, 
} = require("../controllers/paymentController");

router.route("/payment/process").post( processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser ,sendStripeApiKey); //Missind auth
module.exports = router;
   