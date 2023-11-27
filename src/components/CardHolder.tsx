import React, { FC } from 'react';
import Card from './Card';
import Image from 'next/image';

interface CardHolderProps {
  productList: {
    id: number;
    title: string;
    description: string;
    imagepath: string;
    price: number;
				rating: number;
  }[];
}

const CardHolder: FC<CardHolderProps> = ({ productList }) => {
	return (
	  <div className="flex flex-wrap p-24">
		{productList.map(({ id, title, description, imagepath, price, rating }) => (
		  <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
			<Card>
			  <div className="font-bold text-lg mb-2">{title}</div>
			  <div className="relative h-40 mb-2">
			  <Image src={imagepath} alt={title} width={100} height={100} />
			  </div>
			  <div className="text-md mb-2">{description}</div>
			  <div className="text-gray-700 text-sm">${price}</div>
					<div>{rating} Likes</div>
			</Card>
		  </div>
		))}
	  </div>
	);
  };
  
  export default CardHolder;