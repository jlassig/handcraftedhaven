import React, {useEffect} from 'react';
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
const SellerPage = () => {
  const router = useRouter();
  const {id} = router.query;


const sellerId = Number.isInteger(parseInt(id as string, 10))?parseInt(id as string, 10):0;

  const { data: seller, error } = trpc.findSellerById.useQuery({
    id: sellerId,
  })
  if (error){
   console.error('Error fetching seller: ', error)
  }

 const sellerFullName = seller ? `${seller.fName} ${seller.lName}` : '';
    

const { data: reviews,e } = trpc.findSellerReviews.useQuery({
  sellerId: sellerId,
})
if (e) {
  console.error('Error fetching reviews:', e);
}

  return (
    <Layout>
      <Hero title={sellerFullName} />
      <div>
        {seller && (
          <>
            <h1>Seller: {seller.fName} {seller.lName}</h1>
            <p>Story: {seller.story}</p>
            <p>Rating: {seller.rating} Likes</p>

          </>
        )}

<div>
{/* include products that the seller sells */}


</div>





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

export default SellerPage;


