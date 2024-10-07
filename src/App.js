// src/App.js
import React from 'react';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Assuming you have a Home component
import Projects from './pages/Projects'; // Assuming you have a Projects component
import Certifications from './pages/Certificates';
import About from './pages/About'; // Assuming you have an About component
import Contact from './pages/Contact'; // Assuming you have a Contact component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
