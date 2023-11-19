import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo_side.png'

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
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/artisan">Artisans</Link></li>
          <li><Link href="/product">Products</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;