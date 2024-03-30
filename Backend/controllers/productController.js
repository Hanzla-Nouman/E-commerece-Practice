const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

// Get all products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const resultperpage = 5
  const totalProducts = await Product.countDocuments();
  const apifeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultperpage)
    ;

  const products = await apifeature.query;
  if (!products) {
    return next(new ErrorHandler("Products Not Found", 404));
  }

  res.status(200).json({
    success: true,
    totalProducts,
    productsLength: products.length,
    products,
  });
});

// Get one product
exports.getOneProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// Create product  ---Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id  // req.user.id holds the id of the authenticated user
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Update product  ---Admin
exports.updateProduct = catchAsyncError(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// Delete product  ---Admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  await product.deleteOne(product);
  res.status(200).json({
    success: true,
    message: "Product removed successfully",
  });
});
