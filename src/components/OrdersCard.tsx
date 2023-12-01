// components/PurchaseCard.tsx
import React from 'react';
import Image from 'next/image'

interface PurchaseCardProps {
  productName: string;
  productImage: string;
  quantity: number;
  totalAmount: number;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({ productName, productImage, quantity, totalAmount }) => {
  return (
    <div className="flex p-4 border border-gray-300 rounded-md m-4">
      <div className="mr-4">
        <Image src={productImage} alt={productName} className="w-40 h-40 object-contain rounded-md"></Image>
        {/* <img src={productImage} alt={productName} className="w-40 h-40 object-contain rounded-md" /> */}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{productName}</h3>
        <p>Quantity: {quantity}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default PurchaseCard;
