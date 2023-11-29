import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Image from 'next/image'
import { trpc } from '@/utils/trpc';

const ProductPage = () => {

 interface Review {
  userId: number;
  productId: number;
  rvwText: string;

}


  const router = useRouter();
  const { id, title, description, imagepath, price, rating } = router.query;

  const pageTitle = Array.isArray(title) ? title[0] : title;
  const imageString = Array.isArray(imagepath) ? imagepath[0]: imagepath;

  console.log(id, `type of id: ${typeof id}`)
  const productId = Number.isInteger(parseInt(id as string, 10)) ? parseInt(id as string, 10) : 0;
  console.log(productId, `type of productId ${typeof productId}`)

const { data: reviews,error } = trpc.findProductReviews.useQuery({
  productId: productId,
});

if (error) {
  console.error('Error fetching reviews:', error);
}




  return (
    <Layout>

     <Hero title="Product"/>
    <div>
      <h1>{title}</h1>
      <p>Product ID: {id}</p>
      <p>Description: {description}</p>
      <Image src={imageString || ''} alt={pageTitle || ''} width={100} height = {100}/>
      {/* <img src={imageString} alt={pageTitle}></img> */}
      <p>Price: ${price}</p>
      <p>Rating: {rating} Likes</p>

<div>
  <h2>Product Reviews</h2>
  {reviews && reviews.length > 0 ? (
   <div className="border-black ">
    <ul>
      {reviews.map((review: Review, index: number) => (
        <li key={index}>
          <p>User ID: {review.userId}</p>
          <p>Review: {review.rvwText}</p>
        </li>
      ))}
    </ul>
    </div>
  ) : (
    <p>No reviews available.</p>
  )}
</div>




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