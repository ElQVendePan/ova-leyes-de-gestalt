import React from 'react'

interface ContentProps {
    children: React.ReactNode
}

const Content: React.FC<ContentProps> = ({children}) => {
    return (
        <div className='px-[5%] lg:px-0 lg:w-3/6 lg:mx-auto my-10 lg:my-14'>{children}</div>
    )
}

export default Content
