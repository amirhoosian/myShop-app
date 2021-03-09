const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const adminRoute = require('./route/admin')
const shopRoute = require('./route/shop')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoute)
app.use(shopRoute)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000, console.log('server running'))
