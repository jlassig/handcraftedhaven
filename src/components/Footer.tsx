import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        {/* Column 1 */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Shop</h2>
          <a href="#">Artisans</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Information</h2>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      <p className="text-center mt-4">&copy; 2023 Handcrafted Haven. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
