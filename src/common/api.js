// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

  
    config.params.APPID = 'Yf6c081f425905d686971f0b5a280bf98';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});