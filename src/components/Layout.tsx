
//import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import '../styles/globals.css'
import React, { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;