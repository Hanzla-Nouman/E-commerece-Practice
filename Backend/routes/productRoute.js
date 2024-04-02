const express = require("express");
const router = express.Router();
const { isAuthenticatedUser,authorizedRoles } = require("../middleware/auth");
const {
  getAllProducts,
  createProduct,  
  updateProduct,
  deleteProduct,
  getOneProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");

router.route("/products/").get( isAuthenticatedUser, getAllProducts);
router.route("/product/:id").get(getOneProduct);
router.route("/admin/product/new").post(isAuthenticatedUser,authorizedRoles("admin"),createProduct);
router.route("/admin/product/:id").put(isAuthenticatedUser,authorizedRoles("admin"),updateProduct);
router.route("/admin/product/:id").delete(isAuthenticatedUser,authorizedRoles("admin"),deleteProduct);
router.route("/review").put(isAuthenticatedUser,createProductReview);
router.route("/reviews").get(getProductReviews);
router.route("/reviews").delete(isAuthenticatedUser,deleteReview);

module.exports = router;
