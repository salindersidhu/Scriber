const request = require('supertest');
const mongoose = require('mongoose');

/* Import API server app */
const app = require('../../app');
const data = require('../data');

beforeAll(async () => {
    mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true });
});

afterAll(async () => {
    mongoose.connection.close();
});

/* User API test suite */
describe('User API', () => {
    test('It should create a valid user', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(data.user.valid)
            .expect(200);
    });
    test('It should not create a user with an empty request', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send()
            .expect(422);
    });
});
