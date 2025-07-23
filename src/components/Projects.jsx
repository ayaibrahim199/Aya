import React from 'react';

const projectsData = [
  {
    title: 'Homemade Catering Website',
    description: 'A professional React website for a catering business with responsive design and elegant UI.',
    link: '#',
  },
  {
    title: 'Portfolio',
    description: 'A portfolio , designed with React and Tailwind CSS.',
    link: 'https://ahmed-coral.vercel.app/',
  },
  {
    title: 'React To-Do App',
    description: 'A simple yet functional to-do app built with React for task management.',
    link: '',
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app using React and OpenWeatherMap API.',
    link: '#',
  },
  {
    title: 'Tip top ',
    description: 'A modern e-commerce frontend built with React, styled for product displays.',
    link: 'https://tiptop-phi.vercel.app/',
  },
  
  
  {
    title: 'Calculator App',
    description: 'A fully functional calculator using React hooks and state management.',
    link: '#',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat app using React and Firebase for messaging.',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A clean portfolio showcasing skills and projects with smooth scrolling.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
