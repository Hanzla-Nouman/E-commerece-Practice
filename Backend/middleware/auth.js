const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  
//   // const { token } = req.cookies;
//   const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2I0NWFiMzQ5ZjM0MzFkY2Q2OTJjZSIsImlhdCI6MTcxNTI2MDA1OCwiZXhwIjoxNzE1ODY0ODU4fQ.2X1YEFQRIjH9JqzZ6tVA_OkdwjHWjA1-cqHB1GqlIRU";

//   console.log("Cookies in req: ",req.cookies)
//   console.log("Token in Auth: ",token)
//   if (!token) {
//     return next(new ErrorHandler("Please Login to access the resource, Token not found", 401));
//   }   
    
//   const decodedData = jwt.verify(token, process.env.JWT_SECRET);
//   console.log("Decoded Data: ",decodedData)
//   req.user = await User.findById(decodedData.id); // id from getJWTToken
//   // console.log(req.user._id.toHexString())
  
//   next();        
// });           
exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    // Extract token from request cookies
    const { token } = req.cookies;
   
    // console.log("Cookies in req: ", req.cookies);
    // console.log("Token in Auth: ", token);


    if (!token) {
      throw new ErrorHandler("Please login to access the resource. Token not found", 401);
    }

    // Verify and decode the token
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Data: ", decodedData);

    // Fetch user from the database based on decoded user ID
    req.user = await User.findById(decodedData.id);

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Log any errors encountered during authentication
    console.error("Authentication error:", error.message);

    // Pass the error to the error handling middleware
    return next(error);
  } 
};                  

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) { 
      next(new ErrorHandler(`Role: ${req.user.role} is not authorized`, 401));
    }
    next();
  };
};
