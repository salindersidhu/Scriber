const request = require('supertest');

/* Import API server app */
const app = require('../../app');

/* Session API test suite */
describe('Session API', () => {
    test('It should not get session info if unauthenticated', () => {
        return request(app).get('/sessions').expect(401);
    });
});
