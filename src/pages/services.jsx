import axios from 'axios';

const apiVersion1Url = 'http://localhost:8000/api/v1';

// API service calls
const Services = {
    CreateUser: (data) => {
        return axios.post(apiVersion1Url + '/users', data);
    },
    CreateUserSession: (data) => {
        return axios.post(apiVersion1Url + '/sessions', data);
    }
};

export default Services;
