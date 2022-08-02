import axios from 'axios';

const userServiceFactory = () => {
    function login(username, password) {
        return axios.post(`/api/auth`, { username, password });
    }

    function register(username, password) {
        return axios.post(`/api/create_user`, { username, password });
    }

    return {login, register};
};

module.exports = {
    userServiceFactory
};