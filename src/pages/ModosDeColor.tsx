import React from 'react';
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Link from '../components/Link';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';
import ColorModesExperiment from '../components/ColorModesExperiment'

const ModosDeColor = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/cuestionario');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'modos-de-color'} />
            <Content>
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 items-center'>
                    <div className='mb-4 lg:mb-0'>
                        <Title>4.1 | ¿Qué son los Modos de Color?</Title>
                        <p className="mt-4 text-gray-700">
                            Los modos de color son sistemas que representan colores en diferentes contextos y medios. <b className='text-blue-600'>Entender estos modos es esencial para la creación y edición visual.</b> A continuación se presentan algunos de los modos de color más comunes y sus características:
                        </p>
                        <ul className="mt-4 list-disc ml-6 text-gray-700">
                            <li><b className='text-blue-600'>RGB:</b> Modo aditivo que utiliza millones de colores combinando Rojo, Verde y Azul. Ideal para pantallas.</li>
                            <li><b className='text-blue-600'>CMYK:</b> Modo sustractivo que utiliza cuatro colores impresos: Cian, Magenta, Amarillo y Negro. Común en impresión.</li>
                            <li><b className='text-blue-600'>Index:</b> Modo que permite representar hasta 256 colores. Utilizado en gráficos simples y algunos formatos de imagen.</li>
                            <li><b className='text-blue-600'>Grayscale:</b> Modo que utiliza 256 tonos de gris, desde el blanco hasta el negro. Usado en imágenes en blanco y negro.</li>
                            <li><b className='text-blue-600'>Bitmap:</b> Modo que solo utiliza 2 colores, típicamente blanco y negro. Común en gráficos simples y pixel art.</li>
                        </ul>
                    </div>
                    <ReferenceImage src='modos-de-color.jpg'>
                        Adobe. (2022, 15 de noviembre). Color modes. Adobe.<br></br><a href="https://helpx.adobe.com/in/photoshop/using/color-modes.html" className='text-blue-600' target='_blank'>https://helpx.adobe.com/in/photoshop/using/color-modes.html</a>
                    </ReferenceImage>
                </div>

            </Content>
            <ContentBlue>
                <img src="colors-banner.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-25' alt="" />
                <div className='relative'>
                    <Title>4.2 | Modos de Color: CMYK y RGB</Title>
                    <p className="mt-4 opacity-70 mb-6">
                        Los modos de color CMYK y RGB son esenciales en el diseño y la impresión:
                        <br /><br />
                        <b>CMYK (Cian, Magenta, Amarillo y Negro)</b>: Utilizado en impresión, es un sistema sustractivo que mezcla estos cuatro colores para crear una amplia gama de tonos. Es crucial para lograr precisión en la reproducción de colores en materiales impresos.
                        <br /><br />
                        <b>RGB (Rojo, Verde y Azul)</b>: Este modo aditivo se usa en pantallas digitales. Los colores se forman combinando luz de estos tres colores, permitiendo una representación vibrante y rica en matices. Es ideal para cualquier contenido visual que se vea en dispositivos electrónicos.
                        <br /><br />
                        A continuación, se muestra una imagen que ilustra las diferencias clave entre los modos de color CMYK y RGB.
                    </p>
                    <ReferenceImage src='cmyk-rgb.jpg'>
                        Marcaprint. (n.d.). Colores RGB y CMYK: modos de color para imprimir.<br></br><a href="https://www.marcaprint.com/blog/modos-color/" className='font-bold' target='_blank'>https://www.marcaprint.com/blog/modos-color/</a>
                    </ReferenceImage>
                </div>
            </ContentBlue>
            <ColorModesExperiment></ColorModesExperiment>
            <Content>
                <Button onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    );
}

export default ModosDeColor;