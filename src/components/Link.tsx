import React from 'react'

interface LinkProps {
    children: React.ReactNode;
    href: string;
}

const Link: React.FC<LinkProps> = ({children, href}) => {
  return (
    <a href={href} target='_blank' className='bg-white bg-opacity-10 p-5 rounded-xl block font-semibold'>
      {children}
    </a>
  )
}

export default Link
