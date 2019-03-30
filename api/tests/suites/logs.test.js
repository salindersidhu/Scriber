const request = require('supertest');
const mongoose = require('mongoose');

/* Import API server app */
const app = require('../../app');

/* Import user model to create mock data */
const logs = require('../../models/logs');
const { requests } = require('../data');

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
});
