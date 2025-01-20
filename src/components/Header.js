import React from 'react';
import '../styles/Header.css';

const Header = ({ onNewVideo }) => {
  const handleHomeClick = () => {
    // Recarga la página
    window.location.reload();
  };

  return (
    <header className="header">
      <h1 className="logo">ALURAFLIX</h1>
      <nav>
        <button className="button" onClick={handleHomeClick}>
          Home
        </button>
        <button className="button" onClick={onNewVideo}>
          Nuevo Video
        </button>
      </nav>
    </header>
  );
};

export default Header;
