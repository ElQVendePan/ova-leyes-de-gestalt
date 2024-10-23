import React, { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';

const Cuestionario: React.FC = () => {
    const navigate = useNavigate();

    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [showError, setShowError] = useState(false);
    const [score, setScore] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
        if (showError) {
            setShowError(false); // Ocultar el error si el usuario empieza a responder
        }
    };

    const handleSubmit = () => {
        // Verificar si todas las preguntas han sido respondidas
        if (Object.keys(answers).length !== questions.length) {
            setShowError(true);
            return;
        }
        // Calcular el puntaje
        let correct = 0;
        questions.forEach((q, index) => {
            if (answers[`question-${index}`] === q.answer) {
                correct += 1;
            }
        });
        setScore(correct);
        setSubmitted(true);
    };

    const questions = [
        {
            question: '¿Qué es la rueda de color?',
            options: [
                { text: 'Un modelo para mezclar colores' },
                { text: 'Una herramienta de diseño' },
                { text: 'Un esquema de colores complementarios' },
                { text: 'Una clasificación de tonos' },
            ],
            answer: 'Un modelo para mezclar colores',
        },
        {
            question: '¿Qué colores se consideran primarios?',
            options: [
                { text: 'Rojo, amarillo, azul' },
                { text: 'Rojo, verde, negro' },
                { text: 'Naranja, violeta, rosa' },
                { text: 'Cyan, magenta, amarillo' },
            ],
            answer: 'Rojo, amarillo, azul',
        },
        {
            question: '¿Qué es la saturación en color?',
            options: [
                { text: 'La pureza del color' },
                { text: 'La claridad del color' },
                { text: 'La intensidad de la luz' },
                { text: 'La mezcla de colores' },
            ],
            answer: 'La pureza del color',
        },
        {
            question: '¿Qué es un color complementario?',
            options: [
                { text: 'Colores que están juntos en la rueda de color' },
                { text: 'Colores que se mezclan para formar un nuevo color' },
                { text: 'Colores que se encuentran opuestos en la rueda de color' },
                { text: 'Colores que se ven bien juntos' },
            ],
            answer: 'Colores que se encuentran opuestos en la rueda de color',
        },
        {
            question: '¿Qué significa el término "matiz"?',
            options: [
                { text: 'El brillo de un color' },
                { text: 'El tono de un color' },
                { text: 'La mezcla de colores' },
                { text: 'La cantidad de color negro añadido' },
            ],
            answer: 'El tono de un color',
        },
        {
            question: '¿Qué es un esquema de color análogo?',
            options: [
                { text: 'Colores que están opuestos en la rueda de color' },
                { text: 'Colores que están uno al lado del otro en la rueda de color' },
                { text: 'Colores que son todos primarios' },
                { text: 'Colores que se complementan entre sí' },
            ],
            answer: 'Colores que están uno al lado del otro en la rueda de color',
        },
        {
            question: '¿Qué efecto produce el color rojo?',
            options: [
                { text: 'Tranquilidad' },
                { text: 'Energía' },
                { text: 'Neutralidad' },
                { text: 'Tristeza' },
            ],
            answer: 'Energía',
        },
        {
            question: '¿Qué es el color RGB?',
            options: [
                { text: 'Un modelo de color aditivo basado en luz' },
                { text: 'Un modelo de color sustractivo' },
                { text: 'Un esquema de colores complementarios' },
                { text: 'Una clasificación de colores para impresión' },
            ],
            answer: 'Un modelo de color aditivo basado en luz',
        },
        {
            question: '¿Qué significa "brillo" en la teoría del color?',
            options: [
                { text: 'La luminosidad del color' },
                { text: 'La pureza del color' },
                { text: 'La saturación del color' },
                { text: 'La temperatura del color' },
            ],
            answer: 'La luminosidad del color',
        },
        {
            question: '¿Cuál es la combinación de colores que produce un color secundario?',
            options: [
                { text: 'Mezclar dos colores primarios' },
                { text: 'Mezclar un color primario y un color secundario' },
                { text: 'Mezclar dos colores complementarios' },
                { text: 'Mezclar colores análogos' },
            ],
            answer: 'Mezclar dos colores primarios',
        },
        {
            question: '¿Cuál es el color opuesto al azul en la rueda de color?',
            options: [
                { text: 'Rojo' },
                { text: 'Verde' },
                { text: 'Morado' },
                { text: 'Amarillo' },
            ],
            answer: 'Amarillo',
        },
        {
            question: '¿Qué efecto emocional se asocia comúnmente con el color azul?',
            options: [
                { text: 'Tranquilidad y serenidad' },
                { text: 'Energía y excitación' },
                { text: 'Ansiedad y estrés' },
                { text: 'Agresividad y frustración' },
            ],
            answer: 'Tranquilidad y serenidad',
        },
        {
            question: '¿Qué efectos puede provocar ver el color amarillo durante períodos prolongados?',
            options: [
                { text: 'Aumenta la concentración' },
                { text: 'Provoca ansiedad y fatiga visual' },
                { text: 'Fomenta la creatividad' },
                { text: 'Causa relajación' },
            ],
            answer: 'Provoca ansiedad y fatiga visual',        
        },
    ];

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/modos-de-color');
    };

    return (
        <div className='min-h-screen'>
            <Banner />
            <Content>
                <Title>Cuestionario | Psicología del Color</Title>
                <p className="mt-4 mb-12 text-gray-700">Responde las siguientes preguntas seleccionando la opción correcta:</p>

                {questions.map((q, index) => (
                    <div key={index} className="my-14">
                        <h2 className="text-lg font-bold">{q.question}</h2>
                        <div className="mt-2">
                            {q.options.map((option, idx) => (
                                <label key={idx} className={`block p-2 my-1 rounded-lg cursor-pointer ${answers[`question-${index}`] === option.text ? 'bg-blue-600 text-white' : 'bg-slate-100 text-black'}`}>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option.text}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    {option.text}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                {!submitted && <Button onClick={handleSubmit}>Enviar</Button>}

                {showError && <p className="mt-4 text-red-500">Por favor, responde todas las preguntas.</p>}

                {submitted && (
                    <div className="mt-4">
                        <p className="font-bold bg-blue-600 text-white inline-block p-4 rounded-lg">Tu puntaje: {score} de {questions.length}</p>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Respuestas incorrectas:</h3>
                            <div className='list-disc list-inside mt-4 text-gray-700 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                {questions.map((q, index) => {
                                    if (answers[`question-${index}`] !== q.answer) {
                                        return (
                                            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                                <p className="font-medium">{q.question}</p>
                                                <p className="text-red-600 mt-2">Tu respuesta: {answers[`question-${index}`] || 'No respondida'}</p>
                                                <p className="text-green-600">Respuesta correcta: {q.answer}</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </Content>
        </div>
    );
};

export default Cuestionario;