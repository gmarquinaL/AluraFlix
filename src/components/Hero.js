import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>FRONT END</h2>
        <p>Challenge React</p>
        <p>Aprende React construyendo esta aplicación con componentes dinámicos.</p>
      </div>
      <div className="hero-video">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
