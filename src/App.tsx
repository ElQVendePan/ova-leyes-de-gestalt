// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contextualizacion from './pages/Contextualizacion';
import Psc from './pages/Psc';
import Cfs from './pages/Cfs';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contextualizacion" element={<Contextualizacion />} />
        <Route path="/proximidad-similitud-cierre" element={<Psc />} />
        <Route path="/continuidad-figura-fondo" element={<Cfs />} />
      </Routes>
    </Router>
  );
};

export default App;