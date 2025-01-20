import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import VideoEditor from './VideoEditor';

// Importa las imágenes desde la carpeta src/assets
import image1 from '../assets/imagen1.jpg';
import image2 from '../assets/imagen2.jpg';
import image3 from '../assets/imagen3.jpg';
import image4 from '../assets/imagen4.jpg';

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [frontendVideos, setFrontendVideos] = useState([
    { id: 1, title: '¿Cuándo usar LET, VAR y CONST?', image: image1, category: 'frontend' },
    { id: 2, title: '¿Qué es JavaScript?', image: image2, category: 'frontend' },
  ]);

  const [backendVideos, setBackendVideos] = useState([
    { id: 1, title: 'Spring Framework', image: image3, category: 'backend' },
    { id: 2, title: '¿Qué es SQL y NoSQL?', image: image4, category: 'backend' },
  ]);

  const handleNewVideo = () => {
    setIsEditing(true);
    setSelectedVideo(null); 
  };

  const handleEditVideo = (video) => {
    setIsEditing(true);
    setSelectedVideo(video); 
  };

  const handleSaveVideo = (video) => {

    const imageRegex = /\.(jpeg|jpg|gif|png)$/;
    if (!imageRegex.test(video.image)) {
      alert('Por favor, ingresa una URL de imagen válida');
      return;
    }


    if (video.category === 'frontend') {
      setFrontendVideos((prevVideos) => [
        ...prevVideos,
        { ...video, id: Date.now() }, 
      ]);
    } else if (video.category === 'backend') {
      setBackendVideos((prevVideos) => [
        ...prevVideos,
        { ...video, id: Date.now() },
      ]);
    }

    setIsEditing(false);
    setSelectedVideo(null); 
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedVideo(null); 
  };

  const handleDeleteVideo = (video) => {
    if (video.category === 'frontend') {
      setFrontendVideos(frontendVideos.filter((item) => item.id !== video.id));
    } else if (video.category === 'backend') {
      setBackendVideos(backendVideos.filter((item) => item.id !== video.id));
    }
  };

  return (
    <div>
      <Header onNewVideo={handleNewVideo} />
      <Hero />
      {isEditing && (
        <div className="video-card">
          <VideoEditor
            video={selectedVideo}
            onSave={handleSaveVideo}
            onCancel={handleCancel}
          />
        </div>
      )}
      <CategorySection
        title="Front End"
        videos={frontendVideos}
        categoryClass="frontend"
        onEditVideo={handleEditVideo}
        onDeleteVideo={handleDeleteVideo}
      />
      <CategorySection
        title="Back End"
        videos={backendVideos}
        categoryClass="backend"
        onEditVideo={handleEditVideo}
        onDeleteVideo={handleDeleteVideo}
      />
    </div>
  );
};

export default Home;
