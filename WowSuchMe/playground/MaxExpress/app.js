const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const notFound = require('./routes/404')

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(shopRoutes)
app.use(notFound)


app.listen(3000,() => {
    console.log(`Server started at port 3000`)
})