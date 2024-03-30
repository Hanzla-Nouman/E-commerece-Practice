const express = require("express");
const router = express.Router();
const { isAuthenticatedUser,authorizedRoles } = require("../middleware/auth");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
} = require("../controllers/productController");

router.route("/products/").get( isAuthenticatedUser, getAllProducts);
router.route("/product/:id").get(getOneProduct);
router.route("/product/new").post(isAuthenticatedUser,authorizedRoles("admin"),createProduct);
router.route("/product/:id").put(isAuthenticatedUser,authorizedRoles("admin"),updateProduct);
router.route("/product/:id").delete(isAuthenticatedUser,authorizedRoles("admin"),deleteProduct);

module.exports = router;
