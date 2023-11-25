// components/PurchasePage.tsx
import React from 'react';
import PurchaseCard from './OrdersCard';

const PurchasePage: React.FC = () => {
  // Dummy data for items
  const purchasedItems = [
    {
      id: 1,
      productName: 'Handcrafted Item 1',
      productImage: '/images/products-3.jpg',
      quantity: 2,
      totalAmount: 30,
    },
    {
      id: 2,
      productName: 'Handcrafted Item 2',
      productImage: '/images/products-2.jpg',
      quantity: 1,
      totalAmount: 15,
    },
  ];

  return (
    <div className="container mx-auto mt-8 max-w-screen-lg mb-14">
      {/* <h2 className="text-3xl font-bold mb-4">Purchases</h2> */}
      {purchasedItems.map((item) => (
        <PurchaseCard
          key={item.id}
          productName={item.productName}
          productImage={item.productImage}
          quantity={item.quantity}
          totalAmount={item.totalAmount}
        />
      ))}
    </div>
  );
};

export default PurchasePage;
