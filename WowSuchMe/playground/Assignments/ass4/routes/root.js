const express = require('express')
const router = express.Router()


const users = []

router.get('/',(request,response) => {
    response.render('index')
})

router.post('/add-user', (request, response, next) => {
    users.push({ username: request.body.userName });
    console.log(users);
    response.redirect('/');
  });


module.exports.router = router;
module.exports.users = users;