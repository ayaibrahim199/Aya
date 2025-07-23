// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 bg-white">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
