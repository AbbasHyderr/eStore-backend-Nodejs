const Product = require('../models/product');

const productController = {

    // add a product - only admin
    async addProduct(req, res) {
        try{
            const {name, description, quantity, price, category} = req.body;
            let product = new Product({
                name, 
                description,
                 price, 
                  
                 quantity,
                category
            });
            savedProduct = await product.save();
            res.json(savedProduct);
        } catch(e){
            res.status(500).json({err: e.message})
        }
    },

    //get all products - for all
    async fetchAllProducts(req, res) {
        try {
            const products = await Product.find({}); 
            res.json(products);
        } catch(e) {
            res.status(500).json({err: e.message});
        }
       
    },
    //delete a product - only admin
    async deleteProduct (req, res) {
        try{
            const {id} = req.params;
            let deleteProduct = await Product.findByIdAndDelete(id);
            res.json(deleteProduct);
        } catch(e){
            res.status(500).json({err: e.message});
        }
    },

    //update a product - only admin
    async updateProduct (req, res) {
        try{
            const productId  = req.params.id;
            const { name, description, quantity, price, category} = req.body;
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                {
                    $set: {
                        name,
                         description,
                          price,category,
                           quantity
                    },
                },
                {new: true}
                );
                res.json(updatedProduct);

        } catch(e){
            res.status(500).json({err: e.message});
        }
    },
    
    //get product by its id - for user
    async fetchProduct(req, res) {
        try {
            const productId = req.params.id;
            const product = await Product.findOne({productId});
            res.json(product);
    } catch(e){
        res.status(500).json({err: e.message});
    }

        } ,

    //get products by category
    async fetchProductByCategory(req, res) {
        try {
            const products = await Product.find({category: req.params.category});
            res.json(products);
        } catch(e){
            res.status(500).json({err: e.message});
        }
    },
    //search product by name - for all
    async searchProductByName(req, res){
        try {
            const products = await Product.find({
                name: {
                     $regex: req.params.name, 
                    $options: "i"
                },
            }
            );
            
            res.json(products);
        } catch (e){
            res.status(500).json({err: e.message});
        }
    }
    };


module.exports = productController;