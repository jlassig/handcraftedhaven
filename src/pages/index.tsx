import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import sellers_group from '../public/images/sellers_group.jpg'
import products_group from '../public/images/products_group.jpg'



const Home: React.FC = () => {
  return (
    <Layout>
      <Hero title="Handcrafted Haven"/>
      <p>Our artisans carefully craft their products using only the finest local materials and passed-down techniques. Come and learn more about our craftsmen:
      </p>
      <Link href='/artisan'>
        <Image
          src={sellers_group}
          width={400}
          height={400}
          alt="Group of sellers"
        />
      </Link>

      <p>The products that we sell are only the finest quality items. Handcrafted using techniques passed down from generations. We have products for every taste and household. </p>

      <Link href='/product'>
        <Image
          src={products_group}
          width={400}
          height={400}
          alt="Group of products"
        />
      </Link>


    </Layout>
  );
};

export default Home;
