import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-cloneapp.herokuapp.com/',
    // baseURL: 'http://localhost:8001/',
});

export default instance;