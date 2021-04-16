const express = require('express')
const bodyParser = require('body-parser')
// const expHbs = require('express-handlebars')
const path = require('path')

const adminRoutes = require('./route/admin')
const shopRoute = require('./route/shop')
const errorControllers = require('./controllers/error')


const app = express()

// app.engine('hbs', expHbs({extname: 'hbs', layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}))
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))




app.use('/admin', adminRoutes)
app.use(shopRoute)






app.use(errorControllers.geterror404)


app.listen(3000, console.log('server running'))
