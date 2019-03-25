const faker = require('faker');
const request = require('supertest');
const mongoose = require('mongoose');

/* Import API server app */
const app = require('../../app');

/* Create a collection of user data */
const user = {
    valid: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
};

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
            .send(user.valid)
            .expect(200);
    });
});
