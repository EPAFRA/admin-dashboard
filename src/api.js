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
        console.log('category data:',response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching categories", error.response ? error.response.data : error.message);
        throw error;
    }
};

// API base URL
// const API_URL = 'https://auto-store-oxq8c.ondigitalocean.app/api/category';

// // Fetch categories from the API
// export const fetchCategories = async () => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error('Failed to fetch categories');
//     }
//     const categories = await response.json();
//     return categories;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     throw error;
//   }
// };

// Add a new category through the API
export const addCategory = async (category) => {
  try {
    const response = await fetch(CATEGORY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });

    if (!response.ok) {
      throw new Error('Failed to add category');
    }

    const addedCategory = await response.json();
    return addedCategory;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};

// Delete a category by ID through the API
// export const removeCategory = async (id) => {
//   try {
//     const response = await fetch(`${CATEGORY_API_URL}/${id}`, {
//       method: 'DELETE',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to delete category');
//     }

//     return id; // Return the ID of the deleted category
//   } catch (error) {
//     console.error('Error deleting category:', error);
//     throw error;
//   }
// };

export const removeCategory = async (id) => {
    try {
        await axios.delete(`${CATEGORY_API_URL}${id}/`);
    } catch (error) {
        console.error("Error deleting user", error);
        throw error;
    }
};
