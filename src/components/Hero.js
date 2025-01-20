import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Explora los mejores tutoriales de Frontend y Backend</h2>
        <p>Aprende y mejora tus habilidades con nuestros videos</p>
      </div>
      <div className="hero-video">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Featured Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
