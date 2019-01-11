const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose.js');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();


app.use(bodyParser.json());

app.post('/todos',(request,response) => {
    console.log(request.body);
    let todo = new Todo({
        text:request.body.text
    })
    todo.save().then(data => response.send(data),error => response.status(400).send(error))
})













app.listen(3000,() => {
    console.log('Server is started at port 3000')
})

module.exports = {
    app,
}