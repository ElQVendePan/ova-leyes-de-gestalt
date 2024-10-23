import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Contextualizacion = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        navigate('/proximidad-similitud-cierre');
        window.scrollTo(0, 0);
    };
    return (
        <div className="min-h-screen">
            <Banner page={'contextualizacion'} />
            <Content>
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-10 items-center'>
                    <div className='mb-8'>
                        <Title>Definición de las Leyes de Gestalt</Title>
                        <p className="mt-4 text-gray-700">
                        Las Leyes de Gestalt son principios psicológicos que explican cómo las personas perciben y organizan la información visual. Desarrolladas a principios del siglo XX, estas leyes nos permiten entender cómo agrupamos los elementos visuales para formar patrones coherentes y significativos.<br></br><br></br>
                        Según la Teoría de Gestalt, nuestro cerebro tiende a simplificar y estructurar las imágenes en unidades completas, en lugar de percibir elementos aislados. Las leyes incluyen principios como proximidad, similitud, cierre, continuidad, y figura-fondo, los cuales describen cómo organizamos la información visual de manera intuitiva.
                        </p>
                    </div>
                    <div>
                        <iframe className='w-full h-64 lg:h-64 rounded-xl mt-8 lg:mt-0' src="https://www.youtube.com/embed/DxL-Pw0lc_g?si=V1byORBsYqdb8ruI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        <p className='text-xs mt-3 opacity-70'>Duarte, G. (2022, 18 de enero). Teoría de la Gestalt | Leyes de percepción visual.</p>
                    </div>
                </div>
            </Content>
            <ContentBlue>
                <img src="page.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-15 brightness-50' alt="" />
                <div className='relative'>
                    <Title>Historia y desarrollo de la teoría</Title>
                    <p className="mt-4 opacity-80">
                        La Teoría de Gestalt fue desarrollada por psicólogos alemanes como Max Wertheimer, Kurt Koffka y Wolfgang Köhler a principios del siglo XX. Surgió como una respuesta al conductismo, que se enfocaba solo en el comportamiento observable, dejando de lado la percepción y los procesos mentales. Los gestaltistas propusieron que la percepción humana se basa en la interpretación global del entorno, enfatizando que "el todo es más que la suma de sus partes".<br></br><br></br>
                        El término "Gestalt" proviene del alemán y se traduce como "forma" o "patrón". La innovación de la Teoría de Gestalt fue estudiar cómo el cerebro organiza las experiencias sensoriales en estructuras coherentes, algo que fue revolucionario en el campo de la psicología. A lo largo de los años, las Leyes de Gestalt han trascendido la psicología, y su influencia se ha extendido a diversas disciplinas, como el arte, la arquitectura y, en particular, el diseño gráfico.
                    </p>
                </div>
            </ContentBlue>
            <Content>
                <Title>Entrando en Materia</Title>
                <p className="mt-4 text-gray-700">
                Las Leyes de Gestalt son esenciales para comprender cómo percibimos el mundo visual y cómo podemos aplicar estos principios para mejorar nuestras creaciones gráficas. En este OVA, exploraremos más a fondo cada una de estas leyes, entendiendo su relevancia en el diseño gráfico y su aplicación práctica en la creación de composiciones visuales que capturen la atención y comuniquen mensajes de manera clara y efectiva.
                </p>
                <ReferenceImage src='gestalt.jpg'></ReferenceImage>
                <Button margin='mt-8 block' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Contextualizacion
