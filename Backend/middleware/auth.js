const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  
  const { token } = req.cookies;
  console.log(token)

 
  if (token === null) {
    return next(new ErrorHandler("Please Login to access the resource", 401));
  } 
  try{ 
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id); // id from getJWTToken
  }catch(err){
    console.log("err in block 2",err)
  }
  next();       
});  

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) { 
      next(new ErrorHandler(`Role: ${req.user.role} is not authorized`, 401));
    }
    next();
  };
};
