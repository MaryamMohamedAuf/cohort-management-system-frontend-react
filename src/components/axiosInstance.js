import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://oysmdvhkgb2n6gt5izlmc5wcnm0vrtez.lambda-url.us-east-1.on.aws/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

// Add a request interceptor to include the auth token in all requests
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('authToken');
        if (token) {
           config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default axiosInstance;
