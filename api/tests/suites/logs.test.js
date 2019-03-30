const request = require('supertest');
const mongoose = require('mongoose');

/* Import API server app */
const app = require('../../app');

/* Import models to create mock data */
const logs = require('../../models/logs');
const users = require('../../models/users');
const { fixtures, requests } = require('../data');

beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Audit Log', () => {
    test('It should create a log when creating a new user', () => {
        return request(app)
            .post('/users')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.users.johnA.valid)
            .expect(200)
            .then(async () => {
                const log = await logs.findOne({
                    name: 'USER.CREATE'
                }).exec();
                expect(log).toBeTruthy();
            });
    });
    test('It should create a log when user has logged in', async () => {
        await users.create(fixtures.users.johnA);
        return request(app)
            .post('/sessions')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(requests.sessions.johnA.valid)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(async () => {
                const log = await logs.findOne({
                    name: 'USER.LOGIN'
                }).exec();
                expect(log).toBeTruthy();
            });
    });
});
