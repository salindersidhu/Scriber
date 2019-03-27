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

/* Session API test suite */
describe('Session API', () => {
    test('It should not fetch session info if unauthenticated', () => {
        return request(app)
            .get('/sessions')
            .expect(401);
    });
    test('It should not create a session token with non-existing user', () => {
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(fixtures.user.john1)
            .expect(400);
    });
    test('It should not create a session with an invalid request', () => {
        mongoose.connection.collection('users').insertOne(fixtures.user.john1);
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(fixtures.user.john2)
            .expect(400);
    });
});
