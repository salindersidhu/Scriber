const request = require('supertest');

/* Import API server app */
const app = require('../../app');

/* User API test suite */
describe('User API', () => {
    test('It should response the GET method', () => {
        return request(app).get('/users').expect(404);
    });
});
