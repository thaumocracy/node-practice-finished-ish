const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (request, response, next) => {
  const products = adminData.products;
  response.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path:'/',
      hasProducts : true,
      activeShop:true,
      productCSS:true,
    });
});

module.exports = router;
