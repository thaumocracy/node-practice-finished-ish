const express = require('express')
const path = require('path')
const app = express();


const port = 3000;
const rootRoute = require('./routes/root')
const anotherRoute = require('./routes/another')

app.use(express.static(path.join(__dirname,'public')))
app.use(rootRoute)
app.use(anotherRoute)














app.listen(port,() => {
    console.log(`Server is started at port ${port}`)
})