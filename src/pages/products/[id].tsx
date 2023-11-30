import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Image from 'next/image'
import { trpc } from '@/utils/trpc';


 interface Review {
  userId: number;
  productId: number;
  rvwText: string;

}

const ProductPage = () => {

  const router = useRouter();
  const { id, title, description, imagepath, price, rating } = router.query;

  const pageTitle = Array.isArray(title) ? title[0] : title;
  const imageString = Array.isArray(imagepath) ? imagepath[0]: imagepath;

  // console.log(id, `type of id: ${typeof id}`)
  const productId = Number.isInteger(parseInt(id as string, 10)) ? parseInt(id as string, 10) : 0;
  // console.log(productId, `type of productId ${typeof productId}`)

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
            <button>Add to Cart</button>

<div>
  <h2 className="text-center">Product Reviews</h2>
  {reviews && reviews.length > 0 ? (
   <div>
    <ul >
      {reviews.map((review: Review, index: number) => (
        <li key={index}className="border-2 border-black rounded-md p-2 m-5">
          <p>User ID: {review.userId}</p>
          <p>Review: {review.rvwText}</p>
        </li>
      ))}
    </ul>
    </div>
  ) : (
    <p className="border-2 border-black rounded-md p-2 m-5">No reviews available.</p>
  )}
</div>





    </div>
    </Layout>
  );
};

export default ProductPage;


