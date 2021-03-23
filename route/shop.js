const express = require('express');
const path = require('path')

const rootDir = require('../util/path')

const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res) => {
    const products = adminData.product
    res.render('shop', {product: products, pageTitle: 'shop app', path: '/', hasProduct: products.length > 0, activeShop: true, productCss: true})
})

module.exports = router
