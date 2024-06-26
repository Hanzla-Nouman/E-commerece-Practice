const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");   
const jwt = require("jsonwebtoken");  
const crypto = require("crypto"); 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  avatar: {
 
    public_id: {
      type: String,
      required: false,
      default:"https://github.com/meabhisingh/mernProjectEcommerce/blob/master/frontend/src/images/Profile.png?raw=true"
    },
    url: {
      type: String,
      required: false,
      default:"https://github.com/meabhisingh/mernProjectEcommerce/blob/master/frontend/src/images/Profile.png?raw=true"  
    },
  }, 
  role: { 
    type: String,     
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Middleware to hash the password before saving
userSchema.pre("save", async function (next) { 
  // Hash the password if it's modified or new
  if (!this.isModified("password")) { 
    //  the next() function is used to signal to Mongoose that the middleware has completed its operations and that the middleware chain should proceed to the next middleware in line (if any), or ultimately, to save the document.
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);  
});  

// JWT TOKEN 
// getJWTToken is a custom method created by me
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    // expiresIn: process.env.JWT_EXPIRE,
    expiresIn: "7d",
  });
};

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating Reset Password Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");
  // Hasing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
