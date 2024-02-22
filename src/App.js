import React from 'react';
import Header from './components/HomePage/Header';
import Modal from './components/HomePage/Modal';

import About from './components/HomePage/About';
import Learn from './components/HomePage/Learn';
import Sponsor from './components/HomePage/Sponsor';
import Statistics from './components/HomePage/Statistics';
import Footer from './components/HomePage/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Modal />
      
      <About />
      <Learn />
      <Sponsor />
      <Statistics />
      <Footer />
    </div>
  );
};

export default App;
