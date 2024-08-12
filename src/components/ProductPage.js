import React, { useState, useEffect } from 'react';
import { removeProduct, addProduct, fetchProduct, updateProduct } from '../data/products';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', category: '', price: '' });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const productList =  fetchProduct();
    setProducts(productList);
  };

  const handleAddProduct = async () => {
    const addedProduct =  addProduct(newProduct);
    setProducts([...products, addedProduct]);
    setNewProduct({ name: '', description: '', category: '', price: '' });
  };

  const handleEditProduct = async () => {
    const updatedProduct =  updateProduct(editProduct.id, editProduct);
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    setEditProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    removeProduct(id);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="product-management">
      <h1>Product Management</h1>
      <table className="product-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
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
          placeholder="Category"
          value={editProduct ? editProduct.category : newProduct.category}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, category: e.target.value }) : setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={editProduct ? editProduct.price : newProduct.price}
          onChange={(e) => editProduct ? setEditProduct({ ...editProduct, price: e.target.value }) : setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={editProduct ? handleEditProduct : handleAddProduct}>
          {editProduct ? "Update Product" : "Add Product"}
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
