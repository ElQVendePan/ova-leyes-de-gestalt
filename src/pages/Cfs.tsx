import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Cfs = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/saturacion');
    };
    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'cfs'} />
            <Content>
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-5 items-center'>
                    <div>
                        <Title>2.1 | Ley de Continuidad</Title>
                        <p className="mt-4 text-gray-700">
                            La Ley de Continuidad es uno de los principios clave de la Teoría de la Gestalt que establece que los elementos que están dispuestos en una línea o curva suave tienden a ser percibidos como una unidad continua. Este principio refleja la tendencia de nuestra mente a seguir la dirección de las líneas y formas en lugar de detenerse en los puntos individuales.<br></br><br></br>
                            Por ejemplo, si se presenta un conjunto de puntos dispuestos en una línea curva, la mayoría de las personas verán esa línea como una forma continua en lugar de una serie de puntos aislados.
                        </p>
                    </div>
                    <ReferenceImage src='continuidad.jpg'>Comité Olímpico Internacional. (1968). Logo de los Juegos Olímpicos de 1968 [Logo].</ReferenceImage>
                </div>
            </Content>
            <ContentBlue>
                <img src="pat1.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-10' alt="" />
                <div className='relative grid lg:grid-cols-2 gap-x-8 items-center'>
                    <div className='hidden lg:inline-block text-left'><ReferenceImage src='ff.jpg' text='Melbourne Food & Wine Festival 2007'></ReferenceImage></div>
                    <div>
                        <Title>2.2 | Ley de Figura - Fondo</Title>
                        <p className="mt-4 opacity-70">
                            La Ley de Figura y Fondo es un principio esencial de la Teoría de la Gestalt que establece que cuando observamos una imagen, nuestra mente tiende a separar los elementos visuales en dos partes: la figura, que es el objeto o el elemento de interés, y el fondo, que es el entorno o la superficie que rodea a la figura. Esta separación es fundamental para la comprensión visual, ya que permite al espectador identificar y reconocer formas dentro de un contexto más amplio.
                        </p>
                    </div>
                    <div className='lg:hidden'><ReferenceImage src='ff.jpg' text='Melbourne Food & Wine Festival 2007'></ReferenceImage></div>
                </div>
            </ContentBlue>
            <Content>
                <div className='lg:grid lg:grid-cols-2 items-center gap-10'>
                    <div>
                        <Title>2.3 | Ley de Simetría</Title>
                        <p className="mt-4 mb-8 text-gray-700">
                            La Ley de Simetría es uno de los principios fundamentales de la Teoría de la Gestalt y se refiere a la tendencia del cerebro humano a percibir los objetos simétricos como completos y armoniosos. En términos generales, la simetría implica que un objeto o composición se puede dividir en dos partes iguales que reflejan una imagen especular entre sí. Esta característica hace que los elementos simétricos se perciban de manera más organizada, estable y visualmente atractiva.
                        </p>
                    </div>
                    <div>
                        <iframe className='w-full h-64 lg:h-64 rounded-xl mt-8 lg:mt-0' src="https://www.youtube.com/embed/-_O3sAVODpI?si=M_NFJbZlTtoy3miH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        <p className='text-xs mt-3 opacity-70'>Cabaña, H. (2021, 9 de Junio). Ley de Simetría y Orden | PRINCIPIOS DE LA GESTALT.</p>
                    </div>
                </div>
                <Button margin='mt-8' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Cfs
