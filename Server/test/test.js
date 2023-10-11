var assert = require('assert'); //link in assertion library
// var msg = require('../linearPoint.js');

describe('Test for linear function', () => {
    it('test positive value', () =>{
        assert.equal(msg(2, 1, 4), 10);
    });
    it('test zero adding value', () =>{
        assert.equal(msg(2, 0, 4), 8);
    });
    it('test negate adding value', () =>{
        assert.equal(msg(2, -1, 4), 6);
    });
});