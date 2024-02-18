import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';


function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/Login" element={<LoginPage />} />        
        </Routes>
         </div>
      <Footer/>
    </Router>
  );
}

export default App;
