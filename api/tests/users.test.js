const express = require('express');
const request = require('supertest');

/* Import server app */
const app = express();
const router = express.Router();
const routes = require('../routes');

/* Configure server app */
routes(router);
app.use('/api/v1', router);

describe('Test User API', () => {
    test('It should response the GET method', () => {
        return request(app).get('/api/v1/users').expect(404);
    });
});
