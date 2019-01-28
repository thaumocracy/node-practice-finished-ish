const express = require('express')
const path = require('path')
const rootPath = require('../utils/path')

const router = express.Router()

router.get('*',(request,response,next) => {
    response.status(404).render('404',{
        pageTitle:"Page not found"
    })
})

module.exports = router;