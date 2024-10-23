import React from 'react';

interface TitleProps {
  children: string;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ children, color }) => {
  return <h2 className={`${color} text-2xl font-bold`}>{children}</h2>;
};

export default Title;