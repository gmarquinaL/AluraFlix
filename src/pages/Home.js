import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';

const Home = () => {
  const frontendVideos = [
    { id: 1, title: '¿Cuándo usar LET, VAR y CONST?', image: '/path/to/image1.jpg', category: 'frontend' },
    { id: 2, title: '¿Qué es JavaScript?', image: '/path/to/image2.jpg', category: 'frontend' },
  ];

  const backendVideos = [
    { id: 1, title: 'Spring Framework', image: '/path/to/image3.jpg', category: 'backend' },
    { id: 2, title: '¿Qué es SQL y NoSQL?', image: '/path/to/image4.jpg', category: 'backend' },
  ];

  return (
    <div>
      <Header />
      <Hero />
      <CategorySection title="Front End" videos={frontendVideos} categoryClass="frontend" />
      <CategorySection title="Back End" videos={backendVideos} categoryClass="backend" />
    </div>
  );
};

export default Home;
