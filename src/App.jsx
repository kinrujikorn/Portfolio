import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';       // Ensure this imports the default export
import About from './About';     // Ensure this imports the default export
import Portfolio from './Portfolio'; // Ensure this imports the default export
import Contact from './Contact'; // Ensure this imports the default export
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
      </div>
    </Router>
  );
};

export default App;
