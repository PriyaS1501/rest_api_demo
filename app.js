const express = require('express')
require('dotenv').config()
const app = express()
const productsRouter = require('./api/routes/products')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
// app.use((req, res) => {
//     res.status(200).json({
//         msg: "This is a simple GET request"
//     })
// })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(morgan("dev"))

// const uri = "mongodb+srv://priyanka123:Priya%401234@cluster0.il5kt6p.mongodb.net/products"
mongoose.connect(process.env.mongoConnection)
app.use('/products', productsRouter)


module.exports = app