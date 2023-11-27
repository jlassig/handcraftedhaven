import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { trpc } from '@/utils/trpc';
import CardHolder from '../components/CardHolder';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const { data: productList } = trpc.findAllProducts.useQuery();

  return (
    <Layout>
      <Hero title="Handcrafted Haven" />

      <section className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
        {productList && <CardHolder productList={productList} />}
      </section>

      <Footer />
    </Layout>
  );
};

export default Home;