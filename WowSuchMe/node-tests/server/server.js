const express = require('express');
const app = express();


app.get('/',(request,response) => {
    response.send('Hello world!');
})

app.get('/users',(request,response) => {
    response.send([
        'Anna',
        'Maria',
        'Jenna',
        'Whatever'
    ])
})


app.listen(3000,() => {
    console.log("App started at port 3000")
})

module.exports.app = app;