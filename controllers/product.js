const product = require('../models/product')

const getAddProducts = (req, res) => {
    res.render('add-product', {pageTitle: 'Product-management', path: '/admin/add-product'})
}

const postAddProducts = (req, res) => {
    const products = new product(req.body.title)
    products.save()
    res.redirect('/')
}

const getProduct = (req, res) => {
    const myProduct = product.fetchAll(myProduct => {
        res.render('shop', {product: myProduct, pageTitle: 'shop app', path: '/'})
    })
    
}

exports.getAddProducts = getAddProducts
exports.postAddProducts = postAddProducts
exports.getProduct = getProduct