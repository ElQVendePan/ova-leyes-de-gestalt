import React, { useState } from 'react';
import Title from '../components/Title';
import Content from '../components/Content';

const ColorModesExperiment: React.FC = () => {

    const [colorMode, setColorMode] = useState<string>('RGB');

    // URLs de las imágenes para cada modo de color
    const imageUrls = {
        RGB: 'imagen-rgb.jpg',       // Imagen en modo RGB
        CMYK: 'imagen-cmyk.jpg',     // Imagen en modo CMYK
        Index: 'imagen-index.jpg',   // Imagen en modo Index
        Grayscale: 'imagen-grayscale.jpg', // Imagen en escala de grises
        Bitmap: 'imagen-bitmap.jpg'  // Imagen en modo Bitmap
    };

    return (
        <Content>
            <Title>4.3 | Experimenta con los Modos de Color</Title>
            <p className="mt-4 opacity-70 mb-9">
                Cambia entre los diferentes modos de color para observar cómo afecta la apariencia de la imagen.
                Estos modos se utilizan para diferentes fines, como la impresión y la visualización en pantalla.
            </p>

            {/* Imagen de referencia */}
            <div className="flex justify-center mb-4">
                <div className='w-full h-96 rounded-xl overflow-hidden relative'>
                    <img
                        src={imageUrls[colorMode]}  // Cambia la URL según el modo seleccionado
                        alt={`Ejemplo de ${colorMode}`}
                        className="w-full h-full object-cover relative"
                    />
                </div>
            </div>

            {/* Botones de Modo de Color */}
            <div className="grid gap-y-3 lg:grid-cols-5 lg:gap-x-3">
                {Object.keys(imageUrls).map((mode) => (
                    <div
                        key={mode}
                        className={`p-4 rounded-lg text-gray-700 text-center duration-200 cursor-pointer 
                            ${colorMode === mode ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 hover:font-bold'} 
                            ${colorMode === mode ? 'hover:bg-blue-600 text-white' : ''}`}
                        onClick={() => setColorMode(mode)}
                    >
                        {mode}
                    </div>
                ))}
            </div>
        </Content>
    );
}

export default ColorModesExperiment;