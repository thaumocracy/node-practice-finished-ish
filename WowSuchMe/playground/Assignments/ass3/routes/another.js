const express = require('express')
const path = require('path')
const router = express.Router()


router.get('/another',(request,response) => {
    response.sendFile(path.join(__dirname,'..','views','another.html'))
})


module.exports = router