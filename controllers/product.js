const product = []

const getAddProducts = (req, res) => {
    res.render('add-product', {pageTitle: 'Product-management', path: '/admin/add-product'})
}

const postAddProducts = (req, res) => {
    product.push({title: req.body.title})
    res.redirect('/')
}

const getProduct = (req, res) => {
    
    res.render('shop', {product: product, pageTitle: 'shop app', path: '/'})
}

exports.getAddProducts = getAddProducts
exports.postAddProducts = postAddProducts
exports.getProduct = getProduct