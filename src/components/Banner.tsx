import React, { useEffect, useState, useRef } from 'react';
import ProgressBar from './ProgressBar'; // Asegúrate de que la ruta sea correcta
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri'; // Asegúrate de importar el ícono para cerrar
import { Link } from 'react-router-dom';

interface BannerProps {
    page?: string;
}

const Banner: React.FC<BannerProps> = ({ page }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null); // Referencia para el menú
    let unit = '';
    let title = '';
    let banner = '';

    switch (page) {
        case 'contextualizacion':
            title = 'Contextualización';
            banner = 'contextualizacion.jpg';
            break;
        case 'rueda':
            unit = '1';
            title = 'Ley de Proximidad, Similitud y Cierre';
            banner = 'banner-2.jpg';
            break;
        case 'cfs':
            unit = '2';
            title = 'Ley de Continuidad, Figura-Fondo y Simetría';
            banner = 'cfs.jpg';
            break;
        default:
            title = 'Guía Práctica de las Leyes de Gestalt';
            banner = 'banner.jpg';
            break;
    }

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const bannerHeight = 200; // Cambia esto si la altura del banner es diferente
        setIsScrolled(scrollY > bannerHeight - 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    // Nueva función para manejar el clic en el enlace
    const handleLinkClick = () => {
        // Hacer scroll a la parte superior de la página
        window.scrollTo({ top: 0});
        setMenuOpen(false); // Cerrar el menú después de hacer clic
    };

    return (
        <>
            <div className='w-full relative px-[5%] lg:px-0 h-72 lg:h-[32rem] overflow-hidden'>
                <div className='lg:w-3/6 lg:mx-auto'>
                    <img
                        src={banner}
                        className='absolute left-0 top-0 object-cover w-full h-full brightness-50'
                        alt=''
                    />
                    <div className='text-white absolute bottom-8'>
                        {unit !== '' ? <p>Unidad {unit}</p> : null}
                        <h1 className='text-4xl font-bold'>{title}</h1>
                    </div>
                </div>
            </div>
            <div className={`${isScrolled ? 'bg-gray-50' : ''} duration-200 fixed top-0 left-0 w-full px-[5%] lg:px-[25%] py-4 lg:py-6 z-30`}>
                <div className='flex items-center justify-between'>
                    <button onClick={toggleMenu} className='w-8 h-8'>
                        {menuOpen ? (
                            <RiCloseLine className={`${isScrolled ? 'invert-0' : 'invert'} w-full h-full duration-200`} />
                        ) : (
                            <RiMenu2Line className={`${isScrolled ? 'invert-0' : 'invert'} w-full h-full duration-200`} />
                        )}
                    </button>
                    <b className={`${isScrolled ? 'opacity-100' : 'opacity-0'} duration-200 text-xl font-semibold`}>{title}</b>
                </div>
                {isScrolled ? <ProgressBar visible /> : <ProgressBar visible={false} />}
                {/* Menú de navegación */}
                {menuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
                        <div className='fixed top-0 left-0 w-full h-full backdrop-blur' onClick={toggleMenu}></div>
                        <nav ref={menuRef} className='absolute top-1/4 left-1/2 transform -translate-x-1/2 w-5/6 max-w-md bg-white rounded-lg shadow-lg mt-2 transition-all duration-300'>
                            <h2 className='text-xl font-bold px-4 mt-4'>Guía Práctica de las Leyes de Gestalt</h2>
                            <ul className='flex flex-col p-4'>
                                <li className=''>
                                    <Link to="/" onClick={handleLinkClick} className='block p-3 text-gray-800 hover:bg-blue-600 hover:text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105'>Inicio</Link>
                                </li>
                                <li className='my-2'>
                                    <Link to="/contextualizacion" onClick={handleLinkClick} className='block p-3 text-gray-800 hover:bg-blue-600 hover:text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105'>Contextualización</Link>
                                </li>
                                <li className='my-2'>
                                    <Link to="/proximidad-similitud-cierre" onClick={handleLinkClick} className='block p-3 text-gray-800 hover:bg-blue-600 hover:text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105'>Ley de Proximidad, Similitud y Cierre</Link>
                                </li>
                                <li className='my-2'>
                                    <Link to="/continuidad-figura-fondo" onClick={handleLinkClick} className='block p-3 text-gray-800 hover:bg-blue-600 hover:text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105'>Ley de Continuidad, Figura-Fondo y Simetría</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
};

export default Banner;