import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Admin: React.FC = () => {
  return (
    <Layout>
      <Hero title="Admin Us"/>
      <p>Admin page goes here.</p>
    </Layout>
  );
};

export default Admin;