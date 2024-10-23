// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contextualizacion from './pages/Contextualizacion';
import Psc from './pages/Psc';
import Cfs from './pages/Cfs';
import Direccion from './pages/Direccion';
import Cuestionario from './pages/Cuestionario';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contextualizacion" element={<Contextualizacion />} />
        <Route path="/proximidad-similitud-cierre" element={<Psc />} />
        <Route path="/continuidad-figura-fondo" element={<Cfs />} />
        <Route path='/direccion' element={<Direccion />} />
        <Route path='/cuestionario' element={<Cuestionario />} />
      </Routes>
    </Router>
  );
};

export default App;