const request = require('supertest');

/* Import API server app */
const app = require('../../app');
const apiBaseUrl = '/api/v1';

/* Session API test suite */
describe('Session API', () => {
    test('It should response the GET method', () => {
        return request(app).get(`${apiBaseUrl}/sessions`).expect(401);
    });
});
