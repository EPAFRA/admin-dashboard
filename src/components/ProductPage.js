import React, { useState, useEffect } from 'react';
import { removeProduct, addProduct, fetchProduct, updateProduct,fetchCategories } from '../api';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    category_id: '',
    price: '',
    manufacturer: '',
    quantity: '',
    imageUrl: '',
  });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const getProductsAndCategories = async () => {
      try {
        const data = await fetchProduct();
        setProducts(data);

        // Assuming you have a fetchCategories function
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProductsAndCategories();
  }, []);

  const getProduct = async () => {
    const productList = await fetchProduct();
    setProducts(productList);
  };

  const handleAddProduct = async () => {
    const addedProduct = await addProduct(newProduct);
    setProducts([...products, addedProduct]);
    setNewProduct({
      name: '',
      description: '',
      category_id: '',
      price: '',
      manufacturer: '',
      quantity: '',
      imageUrl: '',
    });
  };

  const handleEditProduct = async () => {
    const updatedProduct =  await updateProduct(editProduct.id, editProduct);
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    setEditProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    await removeProduct(id);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="product-management">
      <h1>Product Management</h1>
      <table className="product-list">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>SKU</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Out of stock</th>
            <th>Category</th>
            <th>quantity</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Updated At</th> 
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              {/* <td>{product.id}</td> */}
              <td>{product.sku}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.manufacturer}</td>
              <td>${product.price}</td>
              <td>{product.is_out_of_stock}</td>
              <td>{product.category_id}</td>
              <td>{product.quantity}</td>
              <td><img src={product.imageUrl} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{product.createdAt}</td>
              <td>{product.updatedAt}</td>
             
              
              <td>
                <button onClick={() => setEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for adding or editing products */}
      <div className="product-form">
        <h2>{editProduct ? "Edit Product" : "Add Product"}</h2>
        {/* <input
          type="text"
          placeholder="SKU"
          value={editProduct ? editProduct.sku : newProduct.sku}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, sku: e.target.value }) : setNewProduct({ ...newProduct, sku: e.target.value })}
        /> */}
        <input
          type="text"
          placeholder="Product Name"
          value={editProduct ? editProduct.name : newProduct.name}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, name: e.target.value }) : setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={editProduct ? editProduct.description : newProduct.description}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, description: e.target.value }) : setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Manufacturer"
          value={editProduct ? editProduct.manufacturer : newProduct.manufacturer}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, manufacturer: e.target.value }) : setNewProduct({ ...newProduct, manufacturer: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={editProduct ? editProduct.price : newProduct.price}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, price: e.target.value }) : setNewProduct({ ...newProduct, price: e.target.value })}
        />
       <select
          value={editProduct ? editProduct.category_id : newProduct.category_id}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, category_id: e.target.value }) : setNewProduct({ ...newProduct, category_id: e.target.value })}
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Quantity"
          value={editProduct ? editProduct.quantity : newProduct.quantity}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, quantity: e.target.value }) : setNewProduct({ ...newProduct, quantity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={editProduct ? editProduct.imageUrl : newProduct.imageUrl}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, imageUrl: e.target.value }) : setNewProduct({ ...newProduct, imageUrl: e.target.value })}
        />
        {/* <label>
          Out of Stock:
          <input
            type="checkbox"
            checked={editProduct ? editProduct.is_out_of_stock : newProduct.is_out_of_stock}
            onChange={(e) => editProduct ? setEditProduct({ ...editProduct, is_out_of_stock: e.target.checked }) : setNewProduct({ ...newProduct, is_out_of_stock: e.target.checked })}
          />
        </label> */}
        <button onClick={editProduct ? handleEditProduct : handleAddProduct}>
          {editProduct ? "Update Product" : "Add Product"}
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
