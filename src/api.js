import axios from 'axios';


const API_URL = 'https://auto-store-oxq8c.ondigitalocean.app/api/products/';
const CATEGORY_API_URL = 'https://auto-store-oxq8c.ondigitalocean.app/api/category';

export const fetchProduct = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching users", error);
        throw error;
    }
};

export const addProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error) {
        console.error("Error adding product", error.response ? error.response.data : error.message);
        throw error;
    }
};


export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}${id}/`, product);
        return response.data;
    } catch (error) {
        console.error("Error updating product", error.response ? error.response.data : error.message);
        throw error;
    }
};


export const removeProduct = async (id) => {
    try {
        await axios.delete(`${API_URL}${id}/`);
    } catch (error) {
        console.error("Error deleting user", error);
        throw error;
    }
};


export const fetchCategories = async () => {
    try {
        const response = await axios.get(CATEGORY_API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories", error.response ? error.response.data : error.message);
        throw error;
    }
};