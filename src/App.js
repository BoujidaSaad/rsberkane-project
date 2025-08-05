import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Home from './components/home/home';
import Equipe from './components/equipe/equipe';
import Contact from './components/contact/contact';

function App() {
  const homeRef = useRef(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Navbar scrollToHome={scrollToHome} />
      <Routes>
        {/* IMPORTANT : Home doit accepter la ref */}
        <Route path="/" element={<Home ref={homeRef} />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

