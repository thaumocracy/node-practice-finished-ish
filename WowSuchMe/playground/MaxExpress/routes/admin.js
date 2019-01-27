const express = require('express')
const path = require('path')

const rootPath = require('../utils/path')

const router = express.Router()
const products = [];

router.get('/add-product',(request,response,next) => {
    response.render('shop',{
        prods:products,
        docTitle:"Here is a shop"
    })
})

router.post('/add-product',(request,response,next) => {
    console.log(request.body)
    products.push({
        title:request.body.title
    })
    response.redirect('/')
})


module.exports.routes = router;
module.exports.products = products;