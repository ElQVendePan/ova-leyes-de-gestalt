import React from 'react'

interface ContentProps {
    children: React.ReactNode;
    color?: 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'gray' | 'black' | 'white'; // Limitar a colores específicos
    textAlign?: 'text-left' | 'text-right'; // Limitar a alineaciones específicas
}

const ContentColor: React.FC<ContentProps> = ({ children, color, textAlign }) => {
    let hex = '#FFF'; // Valor por defecto

    switch (color) {
        case 'red':
            hex = 'F87171';
            break;
        case 'yellow':
            hex = 'FBBF24';
            break;
        case 'green':
            hex = '34D399';
            break;
        case 'blue':
            hex = '60A5FA';
            break;
        case 'indigo':
            hex = '818CF8';
            break;
        case 'purple':
            hex = 'A78BFA';
            break;
        case 'pink':
            hex = 'F472B6';
            break;
        case 'gray':
            hex = '9CA3AF';
            break;
        case 'black':
            hex = '1F2937';
            break;
        case 'white':
            hex = 'F9FAFB';
            break;
        default:
            hex = 'FFF';
            break;
    }

    return (
        <div
            className={`px-[5%] lg:px-0 lg:w-full relative lg:mx-auto ${color === 'white' ? 'text-black' : 'text-white'} ${textAlign} py-8 lg:py-10`}
            style={{ backgroundColor: `#${hex}` }} // Usar style para aplicar el color de fondo
        >
            <div className='lg:w-3/6 lg:mx-auto'>
            {children}
            </div>
        </div>
    )
}

export default ContentColor;