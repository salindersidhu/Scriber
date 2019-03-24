const request = require('supertest');

/* Import API server app */
const app = require('../../app');
const apiBaseUrl = '/api/v1/users';

/* User API test suite */
describe('Test User API', () => {
    test('It should response the GET method', () => {
        return request(app).get(`${apiBaseUrl}/users`).expect(404);
    });
});
