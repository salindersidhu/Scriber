const request = require('supertest');
const mongoose = require('mongoose');

/* Import API server app */
const app = require('../../app');
const fixtures = require('../fixtures');

beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

beforeEach(async () => {
    await mongoose.connection.db.createCollection('users');
});

afterEach(async () => {
    await mongoose.connection.db.dropCollection('users');
});

/* User API test suite */
describe('User API', () => {
    test('It should create a user with a valid request', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(fixtures.user.john1)
            .expect(200);
    });
    test('It should not create a user with an empty request', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send()
            .expect(422);
    });
    test('It should not create a user with an invalid username', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(fixtures.user.invalid.username)
            .expect(422);
    });
    test('It should not create a user with an invalid email', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(fixtures.user.invalid.email)
            .expect(422);
    });
    test('It should not create a user with an invalid password', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(fixtures.user.invalid.password)
            .expect(422);
    });
    test('It should not create a user with an existing email', () => {
        mongoose.connection.collection('users').insertOne(fixtures.user.john1);
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(fixtures.user.john1)
            .expect(400);
    });
    test('It should create a user with same username but unique email', () => {
        mongoose.connection.collection('users').insertOne(fixtures.user.john1);
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(fixtures.user.john2)
            .expect(200);
    });
});
