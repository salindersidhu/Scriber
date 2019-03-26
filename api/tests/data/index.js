const faker = require('faker');

/* Create a collection of test data */
const data = {
    user: {
        valid: {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        },
        invalid: {
            username: {
                username: faker.random.alphaNumeric(),
                email: faker.internet.email(),
                password: faker.internet.password()
            },
            email: {
                username: faker.internet.userName(),
                email: faker.random.alphaNumeric(),
                password: faker.internet.password()
            },
            password: {
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.random.alphaNumeric()
            }
        }
    }
};

module.exports = data;
