// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Aya Ibrahim</h1>
        
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </li>
            <li>
              <a
                href="/Aya_Ibrahim_r2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
