const mongoose = require("mongoose")
const Product = require("../model/product")


// R from CRUD[GET]
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            msg: "All Products fetched successfully",
            data: products
        })

    }

    catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// R from CRUD[GET product by id]
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        let m = ""
        if (product === null) {
            m = "No matching Product found"
        } else {
            m = "Product fetchedd successfully"
        }

        res.status(200).json({
            msg: m,
            data: product
        })

    }

    catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// C from CRUD[POST]
exports.createProduct = async (req, res) => {
    try {

        // craete a product object
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })
        const data = await product.save()
        res.status(200).json({
            msg: "Product created successfully",
            product: data
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// U from CRUD[PUT]
exports.updateProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.productId, req.body);
        res.status(200).json({
            msg: "Product updated successfully",
            product: data
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// D from CRUD[DELETE]
exports.deleteProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.productId);
        res.status(200).json({
            msg: "Product deleted successfully",
            product: data
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}