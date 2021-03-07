const express = require('express')
const bodyParser = require('body-parser')

const adminRoute = require('./route/admin')
const shopRoute = require('./route/shop')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(adminRoute)
app.use(shopRoute)

app.use((req, res) => {
    res.status(404).send('page cant bee found')
})


app.listen(3000, console.log('server running'))
