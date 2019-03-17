import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000/api/v1';

// API service calls
const Services = {
    userSignup: (data) => new Promise((resolve, reject) => {
        axios.post(`${apiBaseUrl}/users`, data)
            .then(response => resolve(response))
            .catch(error => reject(error.response ? error.response.status : null ));
    }),
    userSignin: (data) => new Promise((resolve, reject) => {
        axios.post(`${apiBaseUrl}/sessions`, data)
            .then(response => resolve(response))
            .catch(error => reject(error.response ? error.response.status : null ));
    })
};

export default Services;
