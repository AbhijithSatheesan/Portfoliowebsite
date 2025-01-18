import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar'; // Ensure the correct import path

const Portfolio = ({ section }) => {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, section]);

  const projects = [
    {
      title: "Professor Academy",
      description: "Educational platform with student management",
      tech: "React, Django, Redux",
      link: "https://github.com/AbhijithSatheesan/Professor_Academy"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online shopping platform",
      tech: "React, Django, Redux",
      link: "https://github.com/AbhijithSatheesan/ECOM---D"
    },
    {
      title: "Vehicle Price Prediction",
      description: "ML model for price predictions",
      tech: "Python, Scikit-learn",
      link: "https://github.com/AbhijithSatheesan/bulldozer_price_project"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section id="info" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-10"> {/* Reduced padding */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Python Full-Stack Developer
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Self-taught developer with expertise in Python Django, React.js, and machine learning. 
              Passionate about building scalable applications and delivering efficient solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10"> {/* Reduced padding */}
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400">Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python</li>
                <li>JavaScript</li>
                <li>C</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400">Frameworks</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Django</li>
                <li>React.js</li>
                <li>Django REST Framework</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400">Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Redux</li>
                <li>Tailwind CSS</li>
                <li>JWT</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 group hover:bg-gray-800 transition-all">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-purple-400 mb-4">{project.tech}</p>
                <a 
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="me" className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="flex flex-col items-center space-y-6">
            <p className="text-xl text-gray-300 text-center max-w-2xl">
              I'm currently open for freelance projects and full-time opportunities.
              Feel free to reach out!
            </p>
            <div className="flex gap-6">
              <a 
                href="mailto:abhijithms7306@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/abhijith-satheesan-5a3635270"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/AbhijithSatheesan"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a 
                href="/Abhijith_Satheesan_.pdf"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;