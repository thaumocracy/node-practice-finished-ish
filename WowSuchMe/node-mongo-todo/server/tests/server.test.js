const expect = require('expect');
const request = require('supertest')

const { app } = require('../server')
const { Todo } = require('../models/todo')

const todos = [
    {text:'One todo'},
    {text:'Two todo'},
    {text:'Three todo'},
    {text:'Four todo'}
]

beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos)
    }).then(() => done())
})

describe('POST /todos', () => {
    it('should create a new todo',(done) => {
        const text = 'TEST todo TEST'
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((response) => {
            expect(response.body.text).toBe(text)
        })
        .end((error,response) => {
            if(error){
               return done(error)
            }
            Todo.find({text:text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text)
                done();
            }).catch((error) => {
                console.log(error);
            })
        })
    })
    it('should return an error', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((error,response) => {
            if(error){
                return done(error);
            } 
            
            Todo.find().then((todos) => {
                expect(todos.length).toBe(4)
                done();
            }).catch((error) => {
                console.log(error);
            })
        })
    })
})

describe('GET /todos',() => {
    it('Should get all todos',(done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((response) => {
            expect(response.body.todos.length).toBe(4)
        })
        .end(done)
    })
})

