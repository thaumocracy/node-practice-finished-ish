const expect = require('expect')
const utils = require('./utils')

describe('Utils',( ) => {
    it('Should return a user object with correct properties of names', () => {
        const result = utils.set({
            age : 25,
            location : "Moscow"
        },"Booby Whoot")
        expect(result).toExist().toBeA('object').toInclude({firstName:"Booby"}).toInclude({lastName:"Whoot"});
    })
    
    it('Should return square of a number,async way',(done) => {
        utils.asyncSquare(3,(sum) => {
            expect(sum).toBeA('number').toBe(9)
        })
        done();
    })
    
    it('Should add two numbers', () => {
        const results = utils.add(3,11);
        expect(results).toBe(14).toBeA('number');
    })
    
    it('Should multiply two numbers',() => {
        const results  = utils.mult(3,5);
        expect(results).toBe(15).toBeA('number')
    })
    
    it('Should return square of number',() => {
        const results = utils.square(3).toString();
        expect(results).toBe('9').toBeA('string')
    })
})
