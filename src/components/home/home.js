import React, { forwardRef } from 'react';
import './home.css';

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="home-section">
      <h2>Bienvenue sur la page d'accueil</h2>
    </div>
  );
});

export default Home;
