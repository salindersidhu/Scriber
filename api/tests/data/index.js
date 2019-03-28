/* Create a collection of fixtures for test data */
const fixtures = {
    user: {
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
    user: {
        valid: {
            johnA: fixtures.user.johnA,
            johnB: fixtures.user.johnB
        },
        invalid: {
            username: {
                ...fixtures.user.johnA, 
                ...{ username: 'a' }
            },
            email: {
                ...fixtures.user.johnA,
                ...{ email: 'email' }
            },
            password: {
                ...fixtures.user.johnA,
                ...{ password: 'pass123' }
            }
        }
    },
    session: {
        valid: {
            johnA: {
                email: fixtures.user.johnA.email,
                password: fixtures.user.johnA.password
            },
            johnB: {
                email: fixtures.user.johnB.email,
                password: fixtures.user.johnB.password
            }
        },
        invalid: {
            email: {
                email: 'email',
                password: fixtures.user.johnA.password
            },
            password: {
                email: fixtures.user.johnA.email
            }
        },
        incorrect: {
            email: {
                email: 'john@email.com',
                password: fixtures.user.johnA.password
            },
            password: {
                email: fixtures.user.johnA.email,
                password: 'pass123'
            }
        }
    }
};

module.exports = { fixtures, requests };
