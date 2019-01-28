const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (request, response, next) => {
  response.render('add-product',{
      pageTitle:"Add Product",
      path:"/admin/add-product"
  })
});

// /admin/add-product => POST
router.post('/add-product', (request, response, next) => {
  products.push({ title: request.body.title });
  response.redirect('/');
});

exports.routes = router;
exports.products = products;
