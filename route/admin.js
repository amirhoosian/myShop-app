const express = require('express')

const router = express.Router()



router.get('/add-product', (req, res) => {
    res.send('<form method="POST" action="/admin/add-product"><input type="text" name="title"/> <button type="submit">send</button></form>')
    
})
router.post('/add-product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = router
