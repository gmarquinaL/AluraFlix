import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">ALURAFLEX</h1>
      <nav>
        <button className="button">Home</button>
        <button className="button">Nuevo Video</button>
      </nav>
    </header>
  );
};

export default Header;
