import React from 'react'

interface ReferenceImageProps {
    src: string;
    text?: string;
    noMargin?: boolean;
    children?: React.ReactNode;
}

const ReferenceImage: React.FC<ReferenceImageProps> = ({ src, text, noMargin, children }) => {
    return (
        <div className='inline-block'>
            <img src={src} className={`${noMargin ? '' : 'mt-6'} rounded-xl max-w-full lg:max-w-full lg:max-h-96 inline-block`} alt="" />
            {text ? <p className='text-xs mt-3 opacity-70'>{text}</p> : null}
            {!text && children ? <p className='text-xs mt-3 opacity-70'>{children}</p> : null}
        </div>
    )
}

export default ReferenceImage
