import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Image from 'next/image'

const ProductPage = () => {
  const router = useRouter();
  const { id, title, description, imagepath, price, rating } = router.query;

  const pageTitle = Array.isArray(title) ? title[0] : title;
  const imageString = Array.isArray(imagepath) ? imagepath[0]: imagepath;



  return (
    <Layout>

     <Hero title="Product"/>
    <div>
      <h1>{title}</h1>
      <p>Product ID: {id}</p>
      <p>Description: {description}</p>
      <Image src={imageString || ''} alt={pageTitle || ''} width={100} height = {100}/>
      <p>Price: ${price}</p>
      <p>Rating: {rating} Likes</p>
      <button>Add to Cart</button>
    </div>
    </Layout>
  );
};

export default ProductPage;





// import React from 'react';
// import { useRouter } from 'next/router';
// import { trpc } from '@/utils/trpc';

// interface Product {
//   title: string;
//   description: string;
//   imagepath: string;
//   price: number;
//   rating: number;
// }
// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   console.log(`Type of id: ${typeof id}`);

//   const { data: product } = trpc.findProductById.useQuery<Product>({ productId: parseInt(id, 10) });

//   const { title, description, imagepath, price, rating } = product;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>Product ID: {id}</p>
//       <p>Description: {description}</p>
//       {/* <img src={imagepath} alt={title} /> */}
//       <p>Price: {price}</p>
//       <p>Rating: {rating}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductPage;