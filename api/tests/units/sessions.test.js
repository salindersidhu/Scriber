const request = require('supertest');

/* Import API server app */
const app = require('../../app');

/* Session API test suite */
describe('Session API', () => {
    test('It should response the GET method', () => {
        return request(app).get('/sessions').expect(401);
    });
});
