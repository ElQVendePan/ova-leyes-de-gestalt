import React, { useState } from 'react';
import Title from '../components/Title';
import Banner from '../components/Banner';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';

const SaturacionExperimentacion: React.FC = () => {
    const navigate = useNavigate();

    // Estados para los deslizadores
    const [saturation, setSaturation] = useState<number>(0);
    const [brightness, setBrightness] = useState<number>(0);
    const [hue, setHue] = useState<number>(0);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const images = [
        'imagen-sat-1.jpg', // Cambia esto a la ruta de tu imagen 1
        'imagen-sat-2.jpg', // Cambia esto a la ruta de tu imagen 2
        'imagen-sat-3.jpg', // Cambia esto a la ruta de tu imagen 3
        'imagen-sat-4.jpg'  // Cambia esto a la ruta de tu imagen 4
    ];

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/psicologia');
    };

    const handleNextImage = () => {
        // Incrementar el índice de la imagen
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'saturacion-ex'} />
            <Content>
                <Title>2.4 | Experimenta con los Deslizadores</Title>
                <p className="mt-4 opacity-70 mb-9">
                    Ajusta los deslizadores a continuación para experimentar con la saturación, brillo y matiz de la imagen.
                    Observa cómo cada ajuste afecta la apariencia de la imagen en tiempo real.
                </p>
                {/* Imagen de referencia */}
                <div className="flex justify-center mb-4">
                    <div className='w-full h-96 rounded-xl overflow-hidden relative'>
                        <img
                            src={images[currentImageIndex]} // Usar el índice actual para la imagen
                            alt={`Ejemplo de Saturación ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover relative"
                            style={{
                                filter: `saturate(${100 + saturation}%) brightness(${100 + brightness}%) hue-rotate(${hue}deg)`,
                            }}
                        />
                        <button className='text-right absolute bg-black bg-opacity-20 backdrop-blur text-white p-3 px-5 top-2 right-2 rounded-xl' onClick={handleNextImage}>Cambiar Imagen</button>
                    </div>
                </div>

                {/* Deslizadores */}
                <div className="grid gap-y-3 lg:grid-cols-3 lg:gap-x-3">
                    <div className='p-4 bg-gray-200 rounded-lg text-gray-700 duration-200 hover:bg-gray-300 hover:font-bold'>
                        <label className="block">Saturación | {saturation}</label>
                        <input
                            type="range"
                            min="-100"
                            max="100"
                            value={saturation}
                            onChange={(e) => setSaturation(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div className='p-4 bg-gray-200 rounded-lg text-gray-700 duration-200 hover:bg-gray-300 hover:font-bold'>
                        <label className="block">Brillo | {brightness}</label>
                        <input
                            type="range"
                            min="-100"
                            max="100"
                            value={brightness}
                            onChange={(e) => setBrightness(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div className='p-4 bg-gray-200 rounded-lg text-gray-700 duration-200 hover:bg-gray-300 hover:font-bold'>
                        <label className="block">Matiz | {hue}</label>
                        <input
                            type="range"
                            min="-180"
                            max="180"
                            value={hue}
                            onChange={(e) => setHue(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <Button onClick={handleStartCourse}>Siguiente</Button>
                </div>
            </Content>
        </div>
    );
}

export default SaturacionExperimentacion;
