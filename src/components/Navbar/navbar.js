import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ scrollToHome }) {
  return (
    <nav style={{ background: '#333', padding: '10px' }}>
      <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
      <Link to="/equipe" style={{ margin: '0 10px', color: '#fff' }}>Équipe</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: '#fff' }}>Contact</Link>
      <button onClick={scrollToHome} style={{ marginLeft: '20px' }}>Scroll to Home</button>
    </nav>
  );
}

export default Navbar;
