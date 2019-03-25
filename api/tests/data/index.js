const faker = require('faker');

/* Create a collection of test data */
const data = {
    user: {
        valid: {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }
    }
};

module.exports = data;
