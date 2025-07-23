// src/components/HeroSection.jsx
import React from 'react';
import profilePic from '../assets/IMG_1633.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function HeroSection() {
  return (
    <section 
      id="home" 
      className="bg-gray-50 py-16 flex flex-col justify-center items-center text-center px-4"
    >
      <img
        src={profilePic}
        alt="Aya Ibrahim"
        className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
      />
      <h1 className="text-5xl font-bold mb-3 text-gray-800">Aya Ibrahim</h1>
      <p className="max-w-xl text-gray-600 mb-6 text-lg">
        Software Engineer passionate about building scalable web applications.
      </p>
      <div className="flex space-x-8 text-gray-600 text-3xl">
        <a
          href="https://www.linkedin.com/in/ayaaqel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ayaibrahim199"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-900"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
