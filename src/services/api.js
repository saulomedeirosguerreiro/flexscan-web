import axios from 'axios';

const api = axios.create({
    baseURL: 'http://161.35.3.212:85/v1',
});

export default api;
