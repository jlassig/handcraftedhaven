import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Image from 'next/image'
import { trpc } from '@/utils/trpc';


 interface SellerReview {
  userId: number;
  sellerId: number;
  rvwText: string;
}

interface User{
 fName: string;
 lName: string;
 story: string;
 rating: number;

}

const SellerPage = () => {
  const router = useRouter();
  const {id} = router.query;


const sellerId = Number.isInteger(parseInt(id as string, 10))?parseInt(id as string, 10):0;
console.log(`SellerId post parse: ${sellerId} and type: ${typeof sellerId}`)

  const { data: seller, error } = trpc.findSellerById.useQuery({
    id: sellerId,
  });

  console.log(`Seller first name ${seller.fName}`);

    

// const { data: reviews,error } = trpc.findSellerReviews.useQuery<SellerReview>({
//   sellerId: parseInt(id,10)});
// if (error) {
//   console.error('Error fetching reviews:', error);
// }

  return (
    <Layout>
      <Hero title="Seller" />
      <div>
        <h1>Seller ID: {sellerId}</h1>
        {seller && (
          <>
            <p>Seller Name: {seller.fName} {seller.lName}</p>
            <p>Story: {seller.story}</p>
            <p>Rating: {seller.rating} Likes</p>

          </>
        )}
      </div>
    </Layout>
  );
};

export default SellerPage;


