import React, { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-48 h-48 border-2 border-solid border-black m-2 text-center cursor-pointer">
      {children}
    </div>
  );
};

export default Card;