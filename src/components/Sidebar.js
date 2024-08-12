// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Sidebar.css'; // Ensure you have the corresponding CSS file

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="products" className="sidebar-link">Products</Link>
        </li>
        <li className="sidebar-item">
          <Link to="stock" className="sidebar-link">Stock</Link>
        </li>
        <li className="sidebar-item">
          <Link to="sales" className="sidebar-link">Sales</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
