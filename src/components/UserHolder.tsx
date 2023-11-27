import React, { FC } from 'react';
import Card from './Card';
import Image from 'next/image';

interface UserHolderProps {
  userList: {
    id: number;
    fName: string;
    lName: string;
    story: string;
    seller: string;
    rating: number;
  }[];

}

const UserHolder: FC<UserHolderProps> = ({ userList }) => {
	return (
	  <div className="flex flex-wrap p-24">
		{userList.map(({ id, fName, lName, seller, story, rating }) => (
   ////only pull back the people that are actually sellers: 
    seller === "1" ? (
      <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <Card>
          <div className="font-bold text-lg mb-2">{fName} {lName}</div>
          <p>{story}</p>
          <p>{rating} Likes</p>
        </Card>
      </div>
    ) : null

		))}
	  </div>
	);
  };
  
  export default UserHolder;