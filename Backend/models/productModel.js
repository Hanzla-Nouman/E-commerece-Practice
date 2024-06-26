const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
name:{ 
    type:String,
    required:[true,"Please Enter product Name:"],
    trim: true
},
description:{
    type:String,
    required:[true,"Please Enter product Description:"]
},
price:{
    type:Number,
    required:[true,"Please Enter product Price:"],
    maxLength:[6,"Price can't exceed 6 char"]
},
ratings:{
    type : Number,
    default: 0
},
images:[{
    public_id:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
}],
category:{
    type: String,
    required: [true,"Please Enter product Category:"],
},

stock: {
    type: Number,
    required: [true, "Please Enter product stock"],
    maxLength: [4, "stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        type:String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    type: String,
    required: true,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);