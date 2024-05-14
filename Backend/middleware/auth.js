const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

          
exports.isAuthenticatedUser = async (req, res, next) => {
  
    const { token } = req.cookies; 
    if (!token) {
      throw new ErrorHandler("Please login to access the resource. Token not found", 401);
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
  } 
               

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) { 
      next(new ErrorHandler(`Role: ${req.user.role} is not authorized`, 401));
    }
    next();
  };
};
