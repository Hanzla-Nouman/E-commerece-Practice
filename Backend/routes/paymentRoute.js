const express = require("express"); 
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const { 
  processPayment,  
  sendStripeApiKey, 
} = require("../controllers/paymentController");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(sendStripeApiKey); //Missing isAuthenticatedUser
module.exports = router;
    