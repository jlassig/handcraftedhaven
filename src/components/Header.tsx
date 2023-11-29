import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo_side.png'

const Header: React.FC = () => {
  return (
    <>
    <header className="flex items-center justify-between p-4">
      {/* logo image:  */}
      <Link href="/">
        <Image 
          src={logo}
          width={199} 
          height={63}
          alt="Logo" 
        />
      </Link>

      <nav>
        <ul className="flex space-x-4 text-xl">
          <li><Link href="/" className="p-4">Home</Link></li>
          <li><Link href="/about" className="p-4">About</Link></li>
          <li><Link href="/artisan" className="p-4">Artisans</Link></li>
          <li><Link href="/orders" className="p-4">Orders</Link></li>
          <li><Link href="/signup" className="p-4">Sign up</Link></li>
          <li><Link href="/login" className="p-4">Login</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;