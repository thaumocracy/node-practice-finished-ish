const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')

const app = express()


const db = knex ({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'admin',
      password : '1234',
      database : 'smart-brain'
    }
  });


app.use(bodyParser.json())
app.use(cors())

const database = {
   users : [
    {
        id:"123",
        name:"John",
        email:"john@example.com",
        password:"cookies",
        entries:0,
        joined: new Date()
    },
    {
        id:"124",
        name:"Sally",
        email:"sally@example.com",
        password:"bananas",
        entries:0,
        joined: new Date()
    },
    ]
}


app.get('/',(request,response) => {
    response.send(database.users)
})

app.get('/profile/:id',(request,response) => {
    const {id } = request.params
    let found = false
    database.users.forEach(user => {
        if(user.id === id) {
            found = true
            return response.json(user)
        }
    })
    if(!found){
        response.status(400).json(`not found`)
    }
})

app.post('/signin',(request,response) => {
    if(
        (request.body.email === database.users[0].email) &&
        (request.body.password === database.users[0].password)
    ){
        console.log(`Signin success`)
        response.json(database.users[0])
    } else {
        response.status(400).json(`Error loggin in`)
    }
})

app.post('/register',(request,response) => {
    const { email , name , password} = request.body
    db('users')
    .returning('*')
    .insert({
        email:email,
        name:name,
        joined:new Date()
    })
    .then(user => response.json(user[0]))
    .catch(error => response.status(400).json('Unable to register'))
})

app.put('/image',(request,response) => {
    const {id } = request.body
    let found = false
    database.users.forEach(user => {
        if(user.id === id) {
            found = true
            user.entries++
            return response.json(user.entries)
        }
    })
    if(!found){
        response.status(400).json(`not found`)
    }
})






app.listen(3000,() => {
    console.log(`Server listening on port 3000`)
})