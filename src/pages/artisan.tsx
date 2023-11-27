import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { trpc } from '@/utils/trpc';
import UserHolder from '../components/UserHolder';
import Footer from '../components/Footer';

const Artisan: React.FC = () => {
  const { data: userList } = trpc.findAllUsers.useQuery();

  return (
    <Layout>
      <Hero title="Our Artisans" />

      <section className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">

        {userList && <UserHolder userList={userList} />}


      </section>

      <Footer />
    </Layout>
  );
};

export default Artisan;

