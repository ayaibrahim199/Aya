import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <p className="text-gray-600 mb-8">I'd love to hear from you. Feel free to reach out!</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-xl text-gray-700" />
          <span>iayaaqel@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-xl text-gray-700" />
          <span>+352 661248330</span>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-xl text-gray-700" />
          <a
            href="https://www.linkedin.com/in/ayaaqel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
