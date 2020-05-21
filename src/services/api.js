import axios from 'axios';

const api = axios.create({
    baseURL: 'http://cicd.g4flex.com.br:85/v1/',
});

export default api;
