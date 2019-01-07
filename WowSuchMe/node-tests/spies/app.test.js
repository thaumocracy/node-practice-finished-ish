const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');



describe('App',() => {
   const db = {
        saveUser : expect.createSpy()
   }

   app.__set__('db',db);

    it('Should call the spy correctly',() => {
        const spy = expect.createSpy();
        spy('Wooot');
        expect(spy).toHaveBeenCalledWith('Wooot');
    })
    it('Should call saveUser with user object',() => {
        const email = 'whoot@example.com';
        const password = 'random'
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })
})