// pages/purchases.tsx
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PurchasePage from '../components/OrdersPage';

const PurchasesPage: React.FC = () => {
  return (
    <Layout>
      <Hero title="Orders" />
      <PurchasePage />
    </Layout>
  );
};

export default PurchasesPage;
