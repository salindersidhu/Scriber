const request = require('supertest');
const mongoose = require('mongoose');

/* Import API server app */
const app = require('../../app');

/* Import models to create mock data */
const users = require('../../models/users');
const { fixtures, requests } = require('../data');

beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

/* User API test suite */
describe('User API', () => {
    test('It should not create a user with an empty request', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send()
            .expect(422);
    });
    test('It should create a user with a valid request', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.users.johnA.valid)
            .expect(200);
    });
    test('It should not create a user with an invalid username', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.users.johnA.invalid.username)
            .expect(422);
    });
    test('It should not create a user with an invalid email', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.users.johnA.invalid.email)
            .expect(422);
    });
    test('It should not create a user with an invalid password', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.users.johnA.invalid.password)
            .expect(422);
    });
    test('It should not create a user with an existing email', async () => {
        await users.create(fixtures.users.johnA);
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.users.johnA.valid)
            .expect(400);
    });
    test('It should create a user with an existing username but unique email', async () => {
        await users.create(fixtures.users.johnA);
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.users.johnB.valid)
            .expect(200);
    });
});
