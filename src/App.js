import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/HomePage/Header';
import Modal from './components/HomePage/Modal';
import About from './components/HomePage/About';
import Learn from './components/HomePage/Learn';
import Sponsor from './components/HomePage/Sponsor';
import Statistics from './components/HomePage/Statistics';
import Footer from './components/HomePage/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import ErrorMessage from './components/LoginPage/ErrorMessage';
import LoginForm from './components/LoginPage/LoginForm';
import TitleContainer from './components/LoginPage/TitleContainer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rutas para la página de inicio */}
          <Route path="/" element={
            <>
              <Header />
              <Modal />
              <About />
              <Learn />
              <Sponsor />
              <Statistics />
              <Footer />
            </>
          } />

          {/* Rutas para la página de inicio de sesión */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      
      </div>
    </Router>
  );
};

export default App;
