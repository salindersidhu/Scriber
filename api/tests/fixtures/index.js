/* Create a collection of test data */
const fixture = {
    user: {
        john1: {
            username: 'John',
            email: 'john1@gmail.com',
            password: 'buckmulliganstenderchant'
        },
        john2: {
            username: 'John',
            email: 'John2@hotmail.com',
            password: 'correcthorsebatterystaple'
        },
        invalid: {
            username: {
                username: 'a',
                email: 'valid@email.com',
                password: 'correcthorsebatterystaple'
            },
            email: {
                username: 'Valid',
                email: 'email',
                password: 'correcthorsebatterystaple'
            },
            password: {
                username: 'Valid',
                email: 'valid@email.com',
                password: '1234'
            }
        }
    }
};

module.exports = fixture;
