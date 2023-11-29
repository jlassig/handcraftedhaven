// components/Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleLogin = async () => {
		// TODO:  Authentication logic using Prisma and server-side validation
		// This assumes a successful login for any input.
		console.log('Logging in with:', { username, password });
	};

	return (
		<div className="max-w-md mx-auto p-8">
			{/* <h2 className="text-2xl font-bold mb-4">Login</h2> */}
			<form>
			<div className="mb-4">
				<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
				First Name
				</label>
				<input
				type="text"
				id="firstName"
				name="firstName"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				className="mt-1 p-2 w-full border rounded-md"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
				Last Name
				</label>
				<input
				type="text"
				id="lastName"
				name="lastName"
				value={lastName}
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
					onClick={handleLogin}
					className=" text-black p-2 rounded-md hover:bg-gray-400 border border-black"
					>
					Sign up
				</button>

			</form>
		</div>
	);
};

export default Login;
