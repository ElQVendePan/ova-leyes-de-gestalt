import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Saturacion = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/saturacion-experimentacion');
    };
    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'saturacion'} />
            <Content>
                <Title>2.1 | ¿Qué es Saturación, Brillo y Matiz?</Title>
                <p className="mt-4 text-gray-700">
                    La matiz (Hue) se refiere al <b className='text-blue-600'>nombre del color</b>, como rojo, azul o verde. La saturación indica la <b className='text-blue-600'>intensidad</b> o pureza del color, donde un color más saturado es más vibrante. Por otro lado, el brillo describe cuán claro u oscuro es un color; al aumentar el brillo, se acerca al blanco, mientras que al disminuirlo, se aproxima al negro. Estos tres elementos son esenciales en el diseño gráfico para crear combinaciones de colores efectivas y visualmente atractivas.
                </p>
                <ReferenceImage src='saturacion-ex-2.jpg' text='Rossi, T. What is Photography Saturation and How to Change It'></ReferenceImage>
                <div className="mt-4"></div>
            </Content>
            <ContentBlue>
                <img src="hue-banner.jpg" className='absolute invert w-full h-full object-cover left-0 top-0 opacity-25' alt="" />
                <div className='relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-8'>
                    <div className='text-left'>
                        <ReferenceImage noMargin src='saturacion-ex.png'></ReferenceImage>
                    </div>
                    <div className='mt-10'>
                        <Title>2.2 | Impacto de la Saturación</Title>
                        <p className='mt-4 opacity-70'>La saturación juega un papel crucial en la percepción de los colores. Colores altamente saturados son vibrantes y llamativos, lo que los hace ideales para atraer la atención y crear impacto visual.<br /><br />En cambio, los colores con baja saturación son más sutiles y pueden transmitir sensaciones de calma y serenidad. Comprender cómo manipular la saturación permite a los diseñadores crear un rango de efectos emocionales en su trabajo.</p>
                    </div>
                </div>
            </ContentBlue>
            <Content>
                <Title>2.3 | El Brillo en la Percepción del Color</Title>
                <p className="mt-4 opacity-70 mb-9">
                    El brillo se refiere a la percepción de la cantidad de luz que un color refleja o emite. Un color de alto brillo se asemeja al blanco y parece más claro, mientras que uno de bajo brillo se asemeja al negro y parece más oscuro. La percepción del brillo puede cambiar según la iluminación y los colores circundantes, lo que es fundamental en el diseño gráfico y el arte para crear contrastes y destacar elementos. En modelos de color como HSL, el brillo se ajusta para aclarar o oscurecer un color. Además, el brillo tiene una dimensión emocional: colores brillantes suelen evocar alegría, mientras que los oscuros pueden transmitir seriedad o tristeza.
                </p>
                <iframe className='w-full h-64 lg:h-[30rem] rounded-xl mt-8' src="https://www.youtube.com/embed/FF436cqbcng?si=RQO655UCIp0NM8F7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <p className='text-xs mt-3 opacity-70'>Freepik. (2019, Junio 24). Tono, saturación y brillo | Ilustración: Aprende todo sobre EL COLOR [Video]</p>
                <Button margin='mt-8' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Saturacion