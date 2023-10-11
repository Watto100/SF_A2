var assert = require('assert'); //link in assertion library
var app = require('../server.js')

var http = require('http');

var chai = require('chai');
var chaiHttp = require('chai-http');
const { escape } = require("querystring");
let should = chai.should();

chai.should();

chai.use(chaiHttp);

const userData = {
    username: 'Test',
    email: 'test.com',
    pwd: '123',
    avatar: '',
    id: 10,
    role: 'user'
  }
  const loginFail = {
    username: 'Test',
    email: 'test.com',
    pwd: '456',
    avatar: '',
    id: 10,
    role: 'user'
  }

  const groupData = {
    name: 'TestGroup',
    channels: ['test1', 'test2'],
    members: ['Josh','Test'],
  }

console.log(userData);
  
describe('Test for get user route', () => {
    it('It should get all users', (done) => {
        chai.request('http://localhost:3000')
        .get('/api/users')
        .end((err, res) => {
            res.should.have.status(200);
            body = JSON.parse(res.text);
            body.should.not.be.empty;

            // console.log(res.text);
            // console.log(body);
            done();
        });
    });
});
describe('Test for get group route', () => {
    it('It should get all users', (done) => {
        chai.request('http://localhost:3000')
        .get('/api/groups')
        .end((err, res) => {
            res.should.have.status(200);
            body = JSON.parse(res.text);
            body.should.not.be.empty;

            // console.log(res.text);
            // console.log(body);
            done();
        });
    });
});
describe('Test for post add route', () => {
    it('It should add test users', (done) => {
        chai.request('http://localhost:3000')
        .post('/api/add')
        // .set('content-type', 'application/x-www-form-urlencoded')
        // .type('form')
        .send(userData)
        .end((err, res) => {
            res.should.have.status(200);
            //body = JSON.parse(res.text);
            res.body.should.have.property('id');
             //console.log(res.text);
            //console.log(res.body);
            done();
        });
    });
});
describe('Test for post upgrade route', () => {
    it('It should upgrade test user to admin', (done) => {
        chai.request('http://localhost:3000')
        .post('/api/upgrade')
        .send(userData)
        .end((err, res) => {
            res.should.have.status(200);
            //body = JSON.parse(res.text);
            res.body.should.have.property('modifiedCount').equal(1);
             //console.log(res.text);
            //console.log(res.body);
            done();
        });
    });
});
describe('Test for post demote route', () => {
    it('It should demote test user to user', (done) => {
        chai.request('http://localhost:3000')
        .post('/api/upgrade')
        .send(userData)
        .end((err, res) => {
            res.should.have.status(200);
            //body = JSON.parse(res.text);
            res.body.should.have.property('modifiedCount').equal(0);
             //console.log(res.text);
            //console.log(res.body);
            done();
        });
    });
});
describe('Test for post add group route', () => {
    it('It should add test group', (done) => {
        chai.request('http://localhost:3000')
        .post('/api/add_group')
        .send(groupData)
        .end((err, res) => {
            res.should.have.status(200);
            //body = JSON.parse(res.text);
            res.body.should.have.property('name');

             //console.log(res.text);
             //console.log(res.body);
            done();
        });
    });
});

describe('Test for post delete route', () => {
    it('It should delete test user', (done) => {
        chai.request('http://localhost:3000')
        .post('/api/delete')
        .send(userData)
        .end((err, res) => {
            res.should.have.status(200);
            //body = JSON.parse(res.text);
            res.body.should.have.property('acknowledged');
             //console.log(res.text);
            //console.log(res.body);
            done();
        });
    });
});
describe('Test for post delete group route', () => {
    it('It should delete test group', (done) => {
        chai.request('http://localhost:3000')
        .post('/api/delete_group')
        .send(groupData)
        .end((err, res) => {
            res.should.have.status(200);
            //body = JSON.parse(res.text);
            res.body.should.have.property('acknowledged');

             //console.log(res.text);
             //console.log(res.body);
            done();
        });
    });
});
describe('Test for post login route', () => {
    it('It should login test user successfully', (done) => {
        chai.request('http://localhost:3000')
        .post('/api/auth')
        .send(userData)
        .end((err, res) => {
            res.should.have.status(200);
            //body = JSON.parse(res.text);
            res.body.should.have.property('username');
             //console.log(res.text);
            //console.log(res.body);
            done();
        });
    });
    it('It should login test user unsuccessfully', (done) => {
        chai.request('http://localhost:3000')
        .post('/api/auth')
        .send(loginFail)
        .end((err, res) => {
            res.should.have.status(200);
            //body = JSON.parse(res.text);
            res.body.should.have.property('username');
             //console.log(res.text);
            //console.log(res.body);
            done();
        });
    });
});