const express = require('express')
const path = require('path')

const rootPath = require('../utils/path')
const adminData = require('./admin')


const router = express.Router()

router.get('/',(request,response,next) => {
    console.log(`shop.js file : `,JSON.stringify(adminData.products))
    response.sendFile(path.join(rootPath,'views','shop.html'))
})


module.exports = router;
