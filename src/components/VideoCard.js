import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ title, image, category }) => {
  return (
    <div className={`video-card ${category}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <button>Editar</button>
    </div>
  );
};

export default VideoCard;
