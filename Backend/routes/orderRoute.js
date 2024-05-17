const express = require("express");
const router = express.Router();

const {isAuthenticatedUser, authorizedRoles} = require("../middleware/auth");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
 
router.route("/order/new").post(isAuthenticatedUser,newOrder)
router.route("/order/:id").get(getSingleOrder) ////Missing auth 
router.route("/ordersme").get(myOrders) //Missing auth
router.route("/admin/orders").get(isAuthenticatedUser,authorizedRoles("admin"),getAllOrders)
router.route("/admin/order/:id").put(isAuthenticatedUser,authorizedRoles("admin"),updateOrder)  
router.route("/admin/order/:id").delete(isAuthenticatedUser,authorizedRoles("admin"),deleteOrder)

module.exports = router;
// 4000003560000008
