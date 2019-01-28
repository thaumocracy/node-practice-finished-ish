const express = require('express')
const router = express.Router()

const users = require('./root').users


router.get('/users',(request,response) => {
    response.render('users',{
        users:users
    })
})

module.exports = router;