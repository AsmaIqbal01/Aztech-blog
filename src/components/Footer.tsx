import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        
       


        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm py-4 mt-4">
          © {new Date().getFullYear()} AzTech Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
