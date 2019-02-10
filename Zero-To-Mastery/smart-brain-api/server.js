const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')

const app = express()

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
        res.json(database.users[0])
    } else {
        response.status(400).json(`Error loggin in`)
    }
})

app.post('/register',(request,response) => {
    const { email , name , password} = request.body
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash)
    });
    database.users.push({
            id:"125",
            name:name,
            email:email,
            password:password,
            entries:0,
            joined: new Date()
    })
    response.json(database.users[database.users.length -1])
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