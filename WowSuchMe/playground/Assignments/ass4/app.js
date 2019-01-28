const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const root = require('./routes/root')
const usersRoute = require('./routes/users')

app.set('view engine','pug')

app.use(bodyParser.urlencoded({extended: false}));

app.use(root.router)
app.use(usersRoute)


app.listen(3000,() => {
    console.log('Server started at port 3000')
})