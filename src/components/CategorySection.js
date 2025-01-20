import React from 'react';
import VideoCard from './VideoCard';
import '../styles/CategorySection.css';

const CategorySection = ({ title, videos, categoryClass }) => {
  return (
    <section className={`category-section ${categoryClass}`}>
      <h2>{title}</h2>
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
