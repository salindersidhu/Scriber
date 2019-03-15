import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000/api/v1';

// API service calls
const Services = {
    CreateUser: (data) => {
        return axios.post(apiBaseUrl + '/users', data);
    },
    CreateSession: (data) => {
        return axios.post(apiBaseUrl + '/sessions', data);
    }
};

export default Services;
