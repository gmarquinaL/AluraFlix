import React, { useState } from 'react';

function VideoEditor({ video = {}, onSave }) {
  const [title, setTitle] = useState(video.title || '');
  const [category, setCategory] = useState(video.category || '');
  const [image, setImage] = useState(video.image || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...video, title, category, image });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Front End">Front End</option>
        <option value="Back End">Back End</option>
        <option value="Innovación y Gestión">Innovación y Gestión</option>
      </select>
      <input
        type="text"
        placeholder="URL de la imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default VideoEditor;
