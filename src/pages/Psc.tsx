import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Psc = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/continuidad-figura-fondo');
    };
    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'rueda'} />
            <Content>
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-5 items-center'>
                    <div>
                        <Title>1.1 | Ley de Proximidad</Title>
                        <p className="mt-4 text-gray-700">
                            La Ley de Proximidad, un principio clave de la Teoría de la Gestalt, establece que <b className='text-blue-600'>los elementos visuales cercanos entre sí son percibidos como un grupo</b>. Esta tendencia del cerebro a organizar la información visual facilita su interpretación.<br></br><br></br>
                            Por ejemplo, el logo de IBM utiliza líneas horizontales que, gracias a la ley de proximidad en diseño, permiten que al estar cercanas entre sí, el cerebro interprete las letras "IBM". Este principio visual crea una imagen clara y coherente, al tiempo que simboliza la tecnología y precisión de la marca.
                        </p>
                    </div>
                    <ReferenceImage src='ibm.jpg'>IBM. (n.d.). IBM logo [Logotipo]. IBM. <a href='https://www.ibm.com/' target='_blank'>https://www.ibm.com/ibm/logo</a></ReferenceImage>
                </div>
            </Content>
            <ContentBlue>
                <img src="pat1.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-10' alt="" />
                <div className='relative'>
                    <Title>1.2 | Ley de Similitud o Semejanza</Title>
                    <p className="mt-4 opacity-70 mb-6">
                        La Ley de Similitud es un principio clave de la Teoría de la Gestalt que indica que los elementos con características similares (forma, color, tamaño o textura) tienden a ser percibidos como un grupo. Este principio se basa en la tendencia del cerebro humano a buscar patrones para facilitar la comprensión de la información visual. Por ejemplo, en un conjunto de figuras, los círculos serán percibidos como un grupo distinto de los triángulos, aunque estén cercanos.<br></br><br></br>
                        La similitud se ve influenciada por la forma, tamaño, textura y color de los elementos, si se mezclan objetos similares con otros diferentes, el cerebro intenta crear vínculos entre ellos para comprender sus relaciones. Sin embargo, al romper patrones de similitud, se puede generar énfasis en un elemento de diseño, creando lo que se conoce como anomalía.
                    </p>
                    <ReferenceImage src='similitud.jpg' text='Blattner Brunner. (n.d.). Shootz Café & Billiards [Anuncio].'></ReferenceImage>
                </div>
            </ContentBlue>
            <Content>
                <div className='lg:grid lg:grid-cols-2 items-center gap-10'>
                    <div>
                        <Title>1.3 | Ley de Cierre</Title>
                        <p className="mt-4 text-gray-700">
                            La Ley de Cierre es un principio fundamental de la Teoría de la Gestalt que sostiene que nuestra mente tiende a completar las formas incompletas y a percibir un todo, incluso cuando los elementos visuales están parcialmente ausentes. Este principio se basa en la capacidad natural del cerebro humano para rellenar los espacios vacíos y crear una imagen coherente a partir de partes fragmentadas. Por ejemplo, si se presenta un círculo con un pequeño segmento faltante, la mayoría de las personas percibirán un círculo completo en lugar de una figura abierta.<br></br><br />
                            Un ejemplo común de la Ley de Cierre se puede observar en logotipos y símbolos. El famoso logotipo de la marca <b>FedEx</b>, por ejemplo, utiliza la Ley de Cierre al formar una flecha entre las letras "E" y "x", sugiriendo movimiento y velocidad a pesar de que la flecha no está completamente delineada. Este uso ingenioso de la forma incompleta no solo capta la atención, sino que también comunica eficazmente la identidad de la marca.
                        </p>
                    </div>
                    <ReferenceImage src='fedex.png'>FedEx. (n.d.). FedEx logo [Logotipo]. FedEx. <a href='https://www.fedex.com/es-co/home.html' target='_blank'>https://www.fedex.com/es-co/home.html</a></ReferenceImage>
                </div>
                <Button margin='mt-8' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Psc
