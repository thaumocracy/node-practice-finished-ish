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


app.get('/',(request,response) => {
    response.send(database.users)
})

app.get('/profile/:id',(request,response) => {
    const {id } = request.params
    db.select('*')
    .from('users')
    .where({id:id})
    .then( user => {
        if(user.length){
            response.json(user[0])
        } else {
            response.status(400).send('User not found')
        }
    })
    .catch(error => response.status(400).send('Not found'))
})

app.post('/signin',(request,response) => {
    db.select('email','hash').from('login')
    .where('email','=',request.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(request.body.password,data[0].hash)
        if(isValid){
            return db.select('*')
            .from('users')
            .where('email','=',request.body.email)
            .then(user => {
                console.log(user)
                response.json(user[0])
            })
            .catch(error => response.status(400).json('Unable to get user'))
        } else {
            response.statur(400).send('Som Teng Wong')
        }

    }).catch(error => response.status(400).send('Som Teng Wong'))
})

app.post('/register',(request,response) => {
    const { email , name , password} = request.body
    const hash = bcrypt.hashSync(password)
        db.transaction(trx => {
            trx.insert({
                hash:hash,
                email:email
            })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                .returning('*')
                .insert({
                    email:loginEmail[0],
                    name:name,
                    joined:new Date()
                })
                .then(user => response.json(user[0]))
            })
            .then(trx.commit)
            .catch(trx.rollback)
        })
        .catch(error => response.status(400).json('Unable to register'))
})

app.put('/image',(request,response) => {
    const {id } = request.body
    db('users').where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => response.json(entries[0]))
    .catch(error => response.status(400).send('So Tung Wong'))
})






app.listen(3000,() => {
    console.log(`Server listening on port 3000`)
})