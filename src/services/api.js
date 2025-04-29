import axios from 'axios';

const API_BASE_URL = 'https://api.tsamobileapp.com/v1'; // Replace with your API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // Set timeout to 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example of a GET request
export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Example of a POST request
export const postData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export default api;
