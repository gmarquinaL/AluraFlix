import React, { useState, useEffect } from 'react';

const VideoEditor = ({ video, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    category: 'frontend',
  });

  useEffect(() => {
    if (video) {
      setFormData({
        title: video.title,
        image: video.image,
        category: video.category,
      });
    }
  }, [video]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="video-editor-form">
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Imagen (URL)</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="frontend">Front End</option>
          <option value="backend">Back End</option>
        </select>
      </div>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};

export default VideoEditor;
