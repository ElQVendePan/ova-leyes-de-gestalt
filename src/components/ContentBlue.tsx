import React from 'react'

interface ContentProps {
    children: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className='px-[5%] lg:px-0 lg:w-full relative lg:mx-auto mt-10 lg:mt-20 text-white bg-blue-600 text-right py-10 lg:py-16'>
            <div className='lg:w-3/6 lg:mx-auto'>
                {children}
            </div>
        </div>
    )
}

export default Content
