import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000/api/v1';

export const Signup = (formData) => new Promise((resolve, reject) => {
    axios.post(`${apiBaseUrl}/users`, formData)
        .then(res => resolve(res))
        .catch(err => reject(err.response ? err.response.status : null ));
});

export const Signin = (formData) => new Promise((resolve, reject) => {
    axios.post(`${apiBaseUrl}/sessions`, formData)
        .then(res => resolve(res))
        .catch(err => reject(err.response ? err.response.status : null ));
});
