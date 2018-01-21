const config = require('./config');
const axios = require('axios');

module.exports = {
    curriculum: {
        create(params) {
            return axios.put(`/api/curriculum`, params);
        },
        getAll() {
            return axios.get(`/api/curriculum`)
                .then(response => response.data.data);
        }
    },
    learner: {
        create(params) {
            return axios.put(`/api/learner`, params);
        },
        getAll() {
            return axios.get(`/api/learner`)
                .then(response => response.data.data);
        }
    }
};
