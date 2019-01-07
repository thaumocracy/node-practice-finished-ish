const request = require('supertest');
const expect = require('expect');
const app = require('./server.js').app;


describe("Server", () => {
    it('Should return hello world response',(done) => {
        request(app)
            .get('/')
            .expect('Hello world!') 
            .end(done);
    })
    
    it('Should return whatever from link response',(done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((response) => {
                expect(response.body).toInclude('Whatever')
            })
            .end(done);
    })
})
