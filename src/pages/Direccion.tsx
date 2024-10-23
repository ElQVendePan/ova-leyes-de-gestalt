import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Direccion = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/cuestionario');
    };
    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'direccion'} />
            <Content>
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-5 items-center'>
                    <div>
                        <Title>3.1 | Ley de Dirección Común</Title>
                        <p className="mt-4 text-gray-700">
                            El principio de dirección común, o destino común, implica que los elementos que parecen construir un patrón en la misma dirección son percibidos como una figura.<br></br><br></br>
                            En igualdad de circunstancias, nuestro cerebro tiende a percibir como un conjunto aquellos elementos que se mueven conjuntamente, se mueven del mismo modo o se mueven de forma reposada respecto a otros.<br></br><br></br>
                            Por ejemplo, cuando visualizamos una bandada de pájaros que vuelan como un todo. Es como si se tratara de un ente único que va formando figuras en movimiento en el aire.
                        </p>
                    </div>
                    <ReferenceImage src='dir.jpg'>Giménez, A. (2018). Principio de dirección común. <a href="https://www.aunitz.net/ley-15-principio-de-direccion-comun/" target='_blank'>https://www.aunitz.net/ley-15-principio-de-direccion-comun/</a></ReferenceImage>
                </div>
                <Button margin='mt-12' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Direccion
