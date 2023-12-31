// components/Signup.tsx
import React, { useState } from 'react';
import { trpc } from '@/utils/trpc';

const Signup: React.FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [fName, setFirstName] = useState('');
	const [lName, setLastName] = useState('');


	// const { data: signupData, refetch } = trpc.insertUser.useQuery();


	const signupMutation = trpc.insertUser.useMutation({
		onSuccess: () => {
		  console.log('Signup successful');
		  // Extra logic for successful signup
		},
		onError: (error: any) => {
		  console.error('Error:', error);
		  // Handle errors
		},
	  });
	

	const handleSignup = async () => {
		try {
		  // Trigger the signup mutation
		  await signupMutation.mutateAsync({
			fName,
			lName,
			username,
			password,
		  });
	
		  // After successful signup, you can redirect to another page or perform additional actions
		} catch (error) {
		  console.error('Error:', error);
		  // Handle errors
		}
	};
	


	return (
		<div className="max-w-md mx-auto p-8">
		<form>
			<div className="mb-4">
			<label htmlFor="fName" className="block text-sm font-medium text-gray-700">
				First Name
			</label>
			<input
				type="text"
				id="fName"
				name="fName"
				value={fName}
				onChange={(e) => setFirstName(e.target.value)}
				className="mt-1 p-2 w-full border rounded-md"
			/>
			</div>

			<div className="mb-4">
			<label htmlFor="lName" className="block text-sm font-medium text-gray-700">
				Last Name
			</label>
			<input
				type="text"
				id="lName"
				name="lName"
				value={lName}
				onChange={(e) => setLastName(e.target.value)}
				className="mt-1 p-2 w-full border rounded-md"
			/>
			</div>

			<div className="mb-4">
			<label htmlFor="username" className="block text-sm font-medium text-gray-700">
				Username
			</label>
			<input
				type="text"
				id="username"
				name="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className="mt-1 p-2 w-full border rounded-md"
			/>
			</div>
			<div className="mb-4">
			<label htmlFor="password" className="block text-sm font-medium text-gray-700">
				Password
			</label>
			<input
				type="password"
				id="password"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="mt-1 p-2 w-full border rounded-md"
			/>
			</div>
			<button
			type="button"
			onClick={handleSignup}
			className=" text-black p-2 rounded-md hover:bg-gray-400 border border-black"
			>
			Sign up
			</button>
		</form>
		</div>
	);
};

export default Signup;
