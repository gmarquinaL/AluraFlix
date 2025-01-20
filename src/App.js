import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VideoEditor from './pages/VideoEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<VideoEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
