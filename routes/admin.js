const express = require('express');
const checkAdmin = require('../middleware/admin');
const productController = require("../controllers/product");

const adminRouter = express.Router();

adminRouter.post("/admin/add-product", checkAdmin,
productController.addProduct);

adminRouter.get("/admin/get-all-products", checkAdmin, productController.fetchAllProducts )
adminRouter.delete("/admin/deleteProduct/:id", checkAdmin, productController.deleteProduct);
adminRouter.put("/admin/updateProduct/:id", checkAdmin, productController.updateProduct);

module.exports = adminRouter;

