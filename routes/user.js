const express = require('express');
const auth = require('../middleware/auth');
const productController = require("../controllers/product");

const userRouter = express.Router();


userRouter.get("/user/get-all-products", auth, productController.fetchAllProducts);
userRouter.get("/user/getProduct/:id", auth, productController.fetchProduct);
