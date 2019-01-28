const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (request, response, next) => {
  response.render('add-product',{
      prods:products,
      pageTitle:"Add Product",
      path:"/admin/add-product",
      formsCSS:true,
      productCSS:true,
      activeAddProduct:true,
  })
});

// /admin/add-product => POST
router.post('/add-product', (request, response, next) => {
  products.push({ title: request.body.title });
  console.log(products);
  response.redirect('/');
});

exports.routes = router;
exports.products = products;
