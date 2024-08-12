// Dashboard.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage';
import StockPage from './StockPage';
import SalesPage from './SalesPage';
import Sidebar from './Sidebar';
import Header from './Header';
// import './Dashboard.css'; // Ensure you have the corresponding CSS file

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/products" element={<ProductPage />} />
            <Route path="/stock" element={<StockPage />} />
            <Route path="/sales" element={<SalesPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
