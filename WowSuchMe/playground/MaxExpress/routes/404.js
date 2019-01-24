const express = require('express')
const path = require('path')
const rootPath = require('../utils/path')

const router = express.Router()

router.get('*',(request,response,next) => {
    response.status(404).sendFile(path.join(rootPath,'views','404.html'))
})

module.exports = router;