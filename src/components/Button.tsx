import React from 'react';

interface ButtonProps {
  margin?: string;
  children: string;
  onClick?: () => void;
  white?: boolean;
}

const Button: React.FC<ButtonProps> = ({ margin, children, onClick, white }) => {
  return (
    <button onClick={onClick} className={`${margin} px-7 font-bold py-4 ${white ? 'bg-white text-black' : 'bg-black text-white'} rounded-full`} >
      {children}
    </button>
  );
};

export default Button;