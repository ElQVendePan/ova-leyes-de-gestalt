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
        if (Object.keys(answers).length !== questions.length) {
            setShowError(true);
            return;
        }

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
            question: '¿Qué ley de Gestalt describe mejor esta imagen?',
            image: '/proximidad.jpg', // Imagen de proximidad
            options: [
                { text: 'Proximidad' },
                { text: 'Similitud' },
                { text: 'Cierre' },
                { text: 'Figura-Fondo' },
            ],
            answer: 'Proximidad',
        },
        {
            question: '¿Cuál es el principio de Gestalt que explica por qué vemos una forma completa aunque le falten algunas partes?',
            options: [
                { text: 'Cierre' },
                { text: 'Continuidad' },
                { text: 'Similitud' },
                { text: 'Proximidad' },
            ],
            answer: 'Cierre',
        },
        {
            question: '¿Qué ley de Gestalt se refiere a la agrupación de elementos que comparten características visuales similares?',
            options: [
                { text: 'Similitud' },
                { text: 'Continuidad' },
                { text: 'Figura-Fondo' },
                { text: 'Simetría' },
            ],
            answer: 'Similitud',
        },        
        {
            question: '¿Qué ley de Gestalt representa mejor esta imagen?',
            image: '/figura_fondo.jpg', // Imagen para figura-fondo
            options: [
                { text: 'Proximidad' },
                { text: 'Continuidad' },
                { text: 'Figura-Fondo' },
                { text: 'Similitud' },
            ],
            answer: 'Figura-Fondo',
        },
        {
            question: 'Selecciona la ley de Gestalt que mejor describe esta imagen.',
            image: '/direccion_comun.jpg', // Imagen de Dirección Común
            options: [
                { text: 'Similitud' },
                { text: 'Dirección Común' },
                { text: 'Simetría' },
                { text: 'Figura - Fondo' },
            ],
            answer: 'Dirección Común',
        },
        {
            question: '¿Cuál de las siguientes imágenes muestra mejor el principio de Cierre?',
            options: [
                { image: '/cierre1.jpg', text: 'Opción 1' },
                { image: '/cierre2.jpg', text: 'Opción 2' },
                { image: '/cierre3.jpg', text: 'Opción 3' },
                { image: '/cierre4.jpg', text: 'Opción 4' },
            ],
            answer: 'Opción 2',
        },
        {
            question: 'Cuando en una fila de puntos, algunos están más juntos que otros, ¿qué principio de Gestalt describe cómo agrupamos los puntos cercanos?',
            options: [
                { text: 'Proximidad' },
                { text: 'Similitud' },
                { text: 'Cierre' },
                { text: 'Dirección Común' },
            ],
            answer: 'Proximidad',
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
                <Title>Cuestionario | Leyes de Gestalt</Title>
                <p className="mt-4 mb-12 text-gray-700">Responde las siguientes preguntas seleccionando la opción correcta:</p>

                {questions.map((q, index) => (
                    <div key={index} className="my-14">
                        <h2 className="text-lg font-bold">{q.question}</h2>
                        {q.image && (
                            <img src={q.image} alt={`Pregunta ${index}`} className="my-4 rounded-lg max-w-full lg:max-w-52" />
                        )}
                        <div className="mt-6">
                            {q.options.map((option, idx) => (
                                <label key={idx} className={`block p-2 my-1 rounded-lg cursor-pointer ${answers[`question-${index}`] === option.text ? 'bg-blue-600 text-white' : 'bg-slate-100 text-black'}`}>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option.text}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    {option.image ? (
                                        <img src={option.image} alt={`Opción ${idx}`} className="inline-block w-32 rounded-lg" />
                                    ) : (
                                        option.text
                                    )}
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