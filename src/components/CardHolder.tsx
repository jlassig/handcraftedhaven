import React, { FC} from 'react';
import Card from './Card';
import Image from 'next/image';


interface CardHolderProps {
  productList: { 
   id:number;
   title: string;
   description: string;
   imagepath: string;
   price: number; 
  }[];
}

const CardHolder: FC<CardHolderProps> = ({ productList }) => {
  return (
    <div className="flex">
      {productList.map(({ id, title, description, imagepath, price }) => (
        <Card key={id}>
          <div>{title}</div>
          <Image src={imagepath} alt={title} width={100} height={100} />
          <div>{description}</div>
          <div>{price}</div>
        </Card>
      ))}
    </div>
  );
};
export default CardHolder;