import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Aya Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
