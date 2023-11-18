import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Product: React.FC = () => {
  return (
    <Layout>
      <Hero title="Products"/>
      <p>Product info goes here.</p>
    </Layout>
  );
};

export default Product;