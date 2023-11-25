import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import type { NextPage } from 'next'
import { useCallback, useState } from 'react'
import { trpc } from '@/utils/trpc'
import CardHolder from '../components/CardHolder'

const Home: React.FC = () => {

   const { data: productList} = trpc.findAll.useQuery();

  return (
    <Layout>
      <Hero title="Handcrafted Haven" />

      <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">

      {productList && <CardHolder productList ={productList}/>}



        
      </section>
    </Layout>
  );
};



export default Home;




// import React from 'react';
// import Layout from '../components/Layout';
// import Hero from '../components/Hero';
// import Link from 'next/link';
// import Image from 'next/image';
// import sellersGroupImage from '../public/images/sellers_group.jpg';
// import productsGroupImage from '../public/images/products_group.jpg';

// const Home: React.FC = () => {
//   return (
//     <Layout>
//       <Hero title="Handcrafted Haven" />

//       <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">


   
        // <div className="max-w-md bg-gray rounded-lg p-8 shadow-md text-center">
        //   <p className="text-lg text-gray-700">
        //     Our artisans carefully craft their products using only the finest local materials and passed-down techniques. Come and learn more about our craftsmen.
        //   </p>
        //   <Link href='/artisan'>
        //     <div className="relative overflow-hidden rounded-lg cursor-pointer">
        //       <Image
        //         src={sellersGroupImage}
        //         width={400}
        //         height={400}
        //         alt="Group of sellers"
        //       />
        //     </div>
        //   </Link>
        // </div>

        // <div className="max-w-md bg-gray rounded-lg p-8 shadow-md text-center">
        //   <p className="text-lg text-gray-700">
        //     The products that we sell are only the finest quality items. Handcrafted using techniques passed down from generations. We have products for every taste and household.
        //   </p>
        //   <Link href='/product'>
        //     <div className="relative overflow-hidden rounded-lg cursor-pointer">
        //       <Image
        //         src={productsGroupImage}
        //         width={400}
        //         height={400}
        //         alt="Group of products"
        //       />
        //     </div>
        //   </Link>
        // </div>


//       </section>
//     </Layout>
//   );
// };

// export default Home;
