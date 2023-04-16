const express = require('express')
const router = express.Router()
const Product = require("../model/product")
const mongoose = require("mongoose")
const productController = require("../controller/product.model")
// handle GET request for products
router.get('/', productController.getProducts)

// (req, res) => {
//     res.status(200).json({
//         msg: "This is a GET requst for products"
//     })
// })
// handle POST request for products


router.post('/', productController.createProduct)

// (req, res) => {
//     // console.log(req.body)
//     // console.log(req.body.name)
//     // console.log(req.body.price)


//     // 1. Create an object of the Model

//     const product = new Product({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         price: req.body.price
//     })

//     //2.  save this to database
//     product.save()
//         .then((res) => {
//             console.log(res)
//         })
//         .catch((err) => {
//             console.log(err)
//         })


//     const tempProduct = {
//         name: req.body.name,
//         price: req.body.price
//     }
//     const p = req.body
//     console.log("[TYPE]:" + typeof req.body)
//     res.status(200).json({
//         msg: "This is a POST requst for products",
//         statusMsg: "Product Created sucessfully",
//         product: p
//     })
// })

router.get('/:productId', productController.getProductById)

// , (req, res) => {

//     const id = req.params.productId

//     if (id == "7") {
//         res.status(200).json({
//             msg: "Congrats ! You have a special id with good cashback"
//         })
//     } else {
//         res.status(200).json({
//             msg: "Oops ! You have a regular id with NO cashback"

//         })
//     }
// })

// Handle PUT request
router.put('/:productId', productController.updateProduct)

// (req, res) => {
//     const id = req.params.productId
//     res.status(200).json({
//         msg: "This is a PUT requst for products",
//         id: id
//     })
// })

// Handle DELETE request
router.delete('/:productId', productController.deleteProduct)

// (req, res) => {
//     const id = req.params.productId
//     res.status(200).json({
//         msg: "This is a DELETE requst for products",
//         id: id
//     })
// })


module.exports = router