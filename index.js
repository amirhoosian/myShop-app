const express = require('express')
const bodyParser = require('body-parser')
// const expHbs = require('express-handlebars')
const path = require('path')

const adminData = require('./route/admin')
const shopRoute = require('./route/shop')



const app = express()

// app.engine('hbs', expHbs({extname: 'hbs', layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}))
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))




app.use('/admin', adminData.route)
app.use(shopRoute)






app.use((req, res) => {
    res.status(404).render('404', {pageTitle: 'page not found'})
})


app.listen(3000, console.log('server running'))
