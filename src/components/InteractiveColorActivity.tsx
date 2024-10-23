import React, { useState } from 'react';
import Title from '../components/Title';
import Content from '../components/Content';

const colorWheelBaseColors = [
    { id: 1, color: "#FF0000" }, // Rojo
    { id: 2, color: "#FF4C00" }, // Naranja
    { id: 3, color: "#FF7F00" }, // Naranja Amarillo
    { id: 4, color: "#FFBF00" }, // Amarillo
    { id: 5, color: "#FFFF00" }, // Amarillo Brillante
    { id: 6, color: "#7FFF00" }, // Verde Lima
    { id: 7, color: "#00FF00" }, // Verde
    { id: 8, color: "#00FF7F" }, // Verde Aqua
    { id: 9, color: "#00FFFF" }, // Cian
    { id: 10, color: "#007FFF" }, // Azul Aqua
    { id: 11, color: "#0000FF" }, // Azul
    { id: 12, color: "#7F00FF" }  // Violeta
];

const InteractiveColorActivity: React.FC = () => {
    const [selectedColorId, setSelectedColorId] = useState<number | null>(null);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const handleColorClick = (id: number) => {
        // Si no hay un color seleccionado, establece el color seleccionado
        if (selectedColorId === null) {
            setSelectedColorId(id);
        }
    };

    const validateComplementary = () => {
        if (selectedColorId === null) return;

        // Calcula el ID del color complementario
        const complementaryId = (selectedColorId + 6 - 1) % 12 + 1;
        setIsValid(complementaryId === (selectedColorId + 6 - 1) % 12 + 1);
    };

    return (
        <Content>
            <Title>Actividad Interactiva de Colores</Title>
            <p className="mt-4 opacity-70 mb-9">
                Selecciona un color de la rueda. Luego, presiona el botón para validar su color complementario.
            </p>

            {/* Rueda de Color */}
            <div className="flex justify-center mb-4">
                <div className="relative w-80 h-80">
                    <div className="absolute inset-0 rounded-full">
                        {colorWheelBaseColors.map(({ id, color }) => {
                            const angle = (id / colorWheelBaseColors.length) * 360;
                            const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
                            const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);

                            return (
                                <div
                                    key={id}
                                    className={`absolute w-10 h-10 rounded-full cursor-pointer transition duration-300`}
                                    style={{
                                        backgroundColor: color,
                                        left: `${x}%`,
                                        top: `${y}%`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                    onClick={() => handleColorClick(id)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Botón de Validación */}
            <div className="text-center mt-4">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={validateComplementary}
                >
                    Validar Complementario
                </button>
            </div>

            {/* Resultado de la Validación */}
            {isValid !== null && (
                <p className="mt-4 text-center text-lg">
                    {isValid 
                        ? `¡Correcto! El color complementario es el adecuado.` 
                        : `Incorrecto. El color complementario debería ser el ID: ${((selectedColorId + 6 - 1) % 12 + 1)}`}
                </p>
            )}
        </Content>
    );
};

export default InteractiveColorActivity;