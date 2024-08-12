// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import Dashboard from './components/Dashboard'; // Product, Stock, Sales pages

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if user is authenticated
//     const token = localStorage.getItem('authToken');
//     setIsAuthenticated(!!token);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/dashboard/*" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
//         {/* <Route path='/' element={<Dashboard/>}/> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard/products" />} />
      </Routes>
    </Router>
  );
}

export default App;

