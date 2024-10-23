// src/pages/MainPage.tsx
import React from 'react';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Content from '../components/Content';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate('/contextualizacion');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner />
      <Content>
        <Title>Introducción</Title>
        <p className="mt-4 text-gray-700">
          La Teoría de la Gestalt, desarrollada a principios del siglo XX, revolucionó nuestra comprensión de la percepción visual. Al centrarse en cómo el cerebro organiza los estímulos en formas y patrones coherentes, estas leyes se han convertido en una base clave para el diseño gráfico.<br></br><br></br>
          En este Objeto Virtual de Aprendizaje, exploraremos los principios fundamentales de la Gestalt, su origen y su impacto en la creación de composiciones visuales claras y efectivas.
        </p>

        {/* Sección de Temas y Subtemas */}
        <div className="mt-8 bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-700 mb-4">Temas y Subtemas</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li className="mb-3">
              <strong>Contextualización</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>Definición de las Leyes de Gestalt</li>
                <li>Historia y desarrollo de la teoría</li>
                <li>Entrando en Materia</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>1. Ley de Proximidad, Similitud y Cierre</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>1.1 | Ley de Proximidad</li>
                <li>1.2 | Ley de Similitud o Semejanza</li>
                <li>1.3 | Ley de Cierre</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>2. Ley de Continuidad, Figura-Fondo y Simetría</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>2.1 | Ley de Continuidad</li>
                <li>2.2 | Ley de Figura - Fondo</li>
                <li>2.3 | Ley de Simetría</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>3. Psicología del Color</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>3.1 | Impacto emocional y psicológico del color</li>
                <li>3.2 | Psicología de los colores</li>
                <li>3.3 | Recursos Adicionales</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>4. Actividad Final</strong>
            </li>
          </ul>
        </div>

        {/* Sección de Referencias Expandible */}
        <details className="mt-8 bg-gray-100 border border-gray-300 rounded-lg p-4">
          <summary className="cursor-pointer text-lg font-semibold text-blue-700 hover:text-blue-500 duration-200">
            Referencias
          </summary>
          <div className="mt-4 pl-6 text-gray-700">
            <p className="mb-6">
              Cortázar, R. (2022, August 8). Leyes de Gestalt y su aplicación en marketing y publicidad. Blog De Acumbamail.<br />
              <a href="https://acumbamail.com/blog/leyes-de-gestalt/" className='text-blue-600' target='_blank'>https://acumbamail.com/blog/leyes-de-gestalt/</a>
            </p>
            <p className="mb-6">
              Fran. (2022, December 5). Leyes de la Gestalt: principio de continuidad y de dirección común. Blog De Francisco Torreblanca. <br />
              <a href="https://franciscotorreblanca.es/principio-de-continuidad-direccion-comun/" className='text-blue-600' target='_blank'>https://franciscotorreblanca.es/principio-de-continuidad-direccion-comun/</a>
            </p>
          </div>
        </details>

        {/* Sección de Autoría Expandible */}
        <details className="mt-8 bg-gray-100 border border-gray-300 rounded-lg p-4">
          <summary className="cursor-pointer text-lg font-semibold text-blue-700 hover:text-blue-500 duration-200">
            Autoría
          </summary>
          <div className="mt-4 pl-6 text-gray-700">
            <ul className="list-disc ml-6">
              <li className="mb-1">Daniel Alejandro Meneses Rincon</li>
              <li className="mb-1">Daniel Martin Martinez Caceres</li>
              <li>Julio Sanabria Contreras</li>
            </ul>
          </div>
        </details>

        <Button margin="mt-8" onClick={handleStartCourse}>Comenzar</Button>
      </Content>
    </div>
  );
};

export default MainPage;