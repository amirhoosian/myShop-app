const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()



router.get('/add-product', (req, res) => {
    res.render('add-product', {pageTitle: 'Product-management', path: '/admin/add-product'})
})

const product = []

router.post('/add-product', (req, res) => {
    product.push({title: req.body.title})
    res.redirect('/')
})


exports.route = router
exports.product = product
