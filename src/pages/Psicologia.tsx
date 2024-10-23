import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentColor from '../components/ContentColor';

const Psicologia = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/modos-de-color');
    };
    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'psicologia'} />
            <Content>
                <Title>3.1 | Impacto emocional y psicológico del color</Title>
                <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-x-12 items-center'>
                    <p className="text-gray-700 mb-8 lg:mb-0">
                        El impacto emocional y psicológico del color es la forma en que diferentes tonos influyen en nuestras emociones, percepciones y comportamientos. Esto ocurre porque <b className='text-blue-600'>el cerebro asocia los colores con ciertas sensaciones, experiencias y simbolismos</b> que pueden desencadenar respuestas emocionales automáticas.<br></br><br></br>
                        A nivel emocional, los colores pueden afectar nuestro estado de ánimo, generando sensaciones de calma, energía, tristeza o excitación, entre otras. Además, a nivel psicológico, el color puede alterar la forma en que percibimos el tiempo, el espacio o la temperatura, y <b className='text-blue-600'>puede influir en nuestras decisiones</b>, como la compra de un producto o la atracción hacia un entorno.<br></br><br></br>
                        En la imagen se presenta un ejemplo de las emociones y percepciones que evoca el color rojo.
                    </p>
                    <ReferenceImage noMargin src='psicologia-rojo.jpg'>
                        Cherry, K. (2023, June 28). Red color psychology: The color red is associated with both positive and negative emotions. Verywell Mind.<br></br><a href='https://www.verywellmind.com/the-color-psychology-of-red-2795821' target='_blank' className='text-blue-600 underline'>https://www.verywellmind.com/the-color-psychology-of-red-2795821</a>
                    </ReferenceImage>
                </div>
            </Content>
            <ContentColor color='white'>
                <img src="hue-banner.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-25' alt="" />
                <div className='relative'>
                    <div className='text-left'>
                        <Title>3.2 | Psicología de los colores</Title>
                    </div>
                    <p className='mt-4'>
                        La psicología del color es un campo de estudio que explora cómo los colores influyen en nuestras emociones, decisiones y comportamientos.
                        Cada color posee asociaciones culturales y personales que pueden variar entre individuos y sociedades, y su uso en diseño y marketing puede tener un impacto significativo en la percepción de una marca o producto.
                        A continuación se presentan algunos colores y sus respectivos impactos psicológicos:
                    </p>
                    <ul className="list-disc ml-5 list-inside mt-12 text-gray-700 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <li>
                            <strong className='bg-red-500 text-white px-2 py-1 rounded'>Rojo</strong><br></br><br></br>Energía, pasión, amor y urgencia. Puede aumentar la frecuencia cardíaca y atraer la atención.
                        </li>
                        <li>
                            <strong className='bg-blue-500 text-white px-2 py-1 rounded'>Azul</strong><br></br><br></br> Calma, confianza, estabilidad y tranquilidad. Asociado a la serenidad y la profesionalidad.
                        </li>
                        <li>
                            <strong className='bg-yellow-500 text-white px-2 py-1 rounded'>Amarillo</strong><br></br><br></br> Optimismo, felicidad y creatividad. Puede estimular la mente, pero también causar ansiedad si se usa en exceso.
                        </li>
                        <li>
                            <strong className='bg-green-500 text-white px-2 py-1 rounded'>Verde</strong><br></br><br></br> Naturaleza, equilibrio, frescura y crecimiento. Evoca sentimientos de paz y salud.
                        </li>
                        <li>
                            <strong className='bg-orange-500 text-white px-2 py-1 rounded'>Naranja</strong><br></br><br></br> Entusiasmo, diversión y juventud. Fomenta la comunicación y la interacción social.
                        </li>
                        <li>
                            <strong className='bg-purple-600 text-white px-2 py-1 rounded'>Morado</strong><br></br><br></br> Lujo, espiritualidad y creatividad. Asociado a la realeza y la introspección.
                        </li>
                        <li>
                            <strong className='bg-pink-400 text-white px-2 py-1 rounded'>Rosa</strong><br></br><br></br> Amor, ternura y calma. Se asocia a la suavidad y la compasión.
                        </li>
                        <li>
                            <strong className='bg-black text-white px-2 py-1 rounded'>Negro</strong><br></br><br></br> Autoridad, sofisticación y misterio. Puede evocar sentimientos de elegancia, pero también de tristeza.
                        </li>
                        <li>
                            <strong className='bg-white text-black px-2 py-1 rounded'>Blanco</strong><br></br><br></br> Pureza, simplicidad e inocencia. Representa la limpieza y la claridad.
                        </li>
                        <li>
                            <strong className='bg-gray-500 text-white px-2 py-1 rounded'>Gris</strong><br></br><br></br> Neutralidad, equilibrio e indecisión. Puede ser visto como monótono o serio.
                        </li>
                    </ul>
                </div>
            </ContentColor>
            <Content>
                <Title>3.3 | Recursos Adicionales</Title>
                <p className="text-gray-700 mt-8">
                    A continuación, encontrarás un video que explora en detalle la psicología del color y su efecto en la percepción humana.
                </p>
                <iframe className='w-full h-64 lg:h-[30rem] rounded-xl mt-8' src="https://www.youtube.com/embed/Bz63u1_Ujmg?si=bK7iZ0FVDlkDUzU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p className='text-xs mt-3 opacity-70'>Fred Lammie. (2013, Agosto 11). Psicología del color | Casi Creativo [Video]</p>
                <Button margin='mt-8' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Psicologia
