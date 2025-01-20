import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ title, image, videoLink, category, onEdit, onDelete }) => {
  return (
    <div className={`video-card ${category}`}>
      <a href={videoLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <h3>{title}</h3>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Eliminar</button> {}
    </div>
  );
};

export default VideoCard;
