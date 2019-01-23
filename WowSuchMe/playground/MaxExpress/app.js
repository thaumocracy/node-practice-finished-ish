const http = require('http')

const express = require('express')

const app = express()

app.use((request,response,next) => {
    console.log(`In the first middleware`)
    next()
})

app.use((request,response,next) => {
    console.log(`In the second middleware`)
    next()
})

const server = http.createServer(app)

server.listen(3000)