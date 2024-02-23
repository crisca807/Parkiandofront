import React from 'react';
import Header from './Header';
import Modal from './Modal';
import About from './About';
import Learn from './Learn';
import Sponsor from './Sponsor';
import Statistics from './Statistics';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <Modal />
            <About />
            <Learn />
            <Sponsor />
            <Statistics />
            <Footer />
        </div>
    );
}

export default HomePage;