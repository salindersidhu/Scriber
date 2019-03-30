/* Create a collection of fixtures for test data */
const fixtures = {
    users: {
        johnA: {
            username: 'John',
            email: 'John@gmail.com',
            password: 'correcthorsebatterystaple'
        },
        johnB: {
            username: 'John',
            email: 'John@hotmail.com',
            password: 'buckmulliganstenderchant'
        }
    }
};

/* Create a collection of mock requests for testing */
const requests = {
    users: {
        johnA: {
            valid: fixtures.users.johnA,
            invalid: {
                username: {
                    ...fixtures.users.johnA, 
                    ...{ username: 'a' }
                },
                email: {
                    ...fixtures.users.johnA,
                    ...{ email: 'email' }
                },
                password: {
                    ...fixtures.users.johnA,
                    ...{ password: 'pass123' }
                },
            }
        },
        johnB: {
            valid: fixtures.users.johnB
        }
    },
    sessions: {
        johnA: {
            valid: {
                email: fixtures.users.johnA.email,
                password: fixtures.users.johnA.password
            },
            invalid: {
                email: {
                    email: 'email',
                    password: fixtures.users.johnA.password
                },
                password: {
                    email: fixtures.users.johnA.email
                }
            },
            incorrect: {
                email: {
                    email: 'random@email.com',
                    password: fixtures.users.johnA.password
                },
                password: {
                    email: fixtures.users.johnA.email,
                    password: 'wronghorsebatterystaple'
                }
            }
        }
    }
};

module.exports = { fixtures, requests };
