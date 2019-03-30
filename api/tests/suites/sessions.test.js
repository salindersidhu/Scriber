const request = require('supertest');
const mongoose = require('mongoose');

/* Import API server app */
const app = require('../../app');

/* Import user model to create mock data */
const users = require('../../models/users');
const { fixtures, requests } = require('../data');

beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

/* Session API test suite */
describe('Session API', () => {
    test('It should not fetch session info if unauthenticated', () => {
        return request(app)
            .get('/sessions')
            .expect(401);
    });
    test('It should not create a session token with a non-existing user', () => {
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.sessions.johnA.valid)
            .expect(400);
    });
    test('It should not create a session with an invalid email', async () => {
        await users.create(fixtures.users.johnA);
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.sessions.johnA.invalid.email)
            .expect(422);
    });
    test('It should not create a session with an invalid password', async () => {
        await users.create(fixtures.users.johnA);
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.sessions.johnA.invalid.password)
            .expect(422);
    });
    test('It should not create a session with an incorrect email', async () => {
        await users.create(fixtures.users.johnA);
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.sessions.johnA.incorrect.email)
            .expect(400);
    });
    test('It should not create a session with an incorrect password', async () => {
        await users.create(fixtures.users.johnA);
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.sessions.johnA.incorrect.password)
            .expect(400);
    });
    test('It should create a session with a valid request', async () => {
        await users.create(fixtures.users.johnA);
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.sessions.johnA.valid)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body.token).toMatch(
                    /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
                );
            });
    });
});
