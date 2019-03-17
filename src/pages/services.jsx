import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000/api/v1';

// API service calls
const Services = {
    userSignup: (data) => {
        return axios.post(apiBaseUrl + '/users', data);
    },
    userSignin: (data) => {
        return axios.post(apiBaseUrl + '/sessions', data);
    }
};

export default Services;
