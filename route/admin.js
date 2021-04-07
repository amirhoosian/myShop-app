const express = require('express')

const productControllers = require('../controllers/product')

const router = express.Router()



router.get('/add-product', productControllers.getAddProducts)



router.post('/add-product', productControllers.postAddProducts)


module.exports = router
