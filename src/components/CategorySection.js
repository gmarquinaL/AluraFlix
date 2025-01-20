import React from 'react';
import '../styles/CategorySection.css';
import VideoCard from './VideoCard';


const CategorySection = ({ title, videos, categoryClass, onEditVideo, onDeleteVideo }) => {
  return (
    <section className={`category-section ${categoryClass}`}>
      <h2>{title}</h2>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <VideoCard
              title={video.title}
              image={video.image}
              videoLink="#"
              category={video.category}
              onEdit={() => onEditVideo(video)}
              onDelete={() => onDeleteVideo(video)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
