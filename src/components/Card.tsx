import React, { FC } from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className="p-4 border border-gray-300 rounded-md">{children}</div>;
};

export default Card;
