import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage'; // Conserva esta importación
import RegisterPage from './components/RegisterPage/RegisterPage';






const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta para la página de inicio de sesión */}
          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
