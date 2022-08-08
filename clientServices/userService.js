import axios from 'axios';

const userServiceFactory = () => {
    function login(username, password) {
        return axios.post(`/api/auth`, { username, password });
    }

    function register(username, password, email, name) {
        return axios.post(`/api/create_user`, { username, password, email, name });
    }

    return {login, register};
};

module.exports = {
    userServiceFactory
};