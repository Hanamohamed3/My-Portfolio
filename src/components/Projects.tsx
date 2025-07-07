import React from 'react';
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Search,
  Gamepad2,
  Users,
  Utensils
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Backend",
      description: "Comprehensive backend system for e-commerce platform with user authentication, product management, order processing, and payment integration.",
      icon: ShoppingCart,
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/Hanamohamed3/E-Commerce-Backend",
      features: ["User Authentication", "Product Management", "Order Processing", "Payment Integration"],
      image: "https://i.pinimg.com/736x/76/e6/b9/76e6b9355380c85fe9a80dddae96172c.jpg" // replace with your own
    },
    {
      title: "Job Search App Backend",
      description: "Backend API for a job search platform featuring user profiles, job listings, application tracking, and company management.",
      icon: Search,
      technologies: ["Node.js", "Express", "Database", "REST API"],
      github: "https://github.com/Hanamohamed3/Job-search-app-backend-",
      features: ["Job Listings", "User Profiles", "Company Management"],
      image: "https://i.pinimg.com/736x/63/21/9c/63219c5c6655f6386e5b50efd2177485.jpg"
    },
    {
      title: "DevFolio",
      description: "Modern developer portfolio website showcasing projects, skills, and professional experience with responsive design.",
      icon: Users,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap"],
      github: "https://github.com/Hanamohamed3/DevFolio",
      features: ["Portfolio Showcase", "Responsive Design", "Interactive UI", "Contact Form"],
      image: "https://i.pinimg.com/736x/6d/bf/4c/6dbf4cc25370d25fde0b9b203ea4f262.jpg"
    },
    {
      title: "Display Games",
      description: "Interactive game display platform featuring various games with engaging user interface and smooth gameplay experience.",
      icon: Gamepad2,
      technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic", "Bootstrap"],
      github: "https://github.com/Hanamohamed3/Display-Games",
      features: ["Multiple Games", "Interactive UI", "Score Tracking", "Responsive Design"],
      image: "https://i.pinimg.com/736x/61/b8/e5/61b8e5141af80400edcb5d0c8c0558b5.jpg"
    },
    {
      title: "Yummy Website",
      description: "Restaurant website with menu display, order management, and user-friendly interface for food enthusiasts.",
      icon: Utensils,
      technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
      github: "https://github.com/Hanamohamed3/Yummy-Website",
      features: ["Menu Display", "User Interface", "Food Categories"],
      image: "https://i.pinimg.com/736x/52/5b/f4/525bf4deee6b7dde75aaa9c64a36b439.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work demonstrating full-stack development skills, modern technologies, and real-world application building.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-white/20"
              >
                {/* Project Header with Background Image */}
                <div
                  className="p-6 text-white bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(30, 64, 175, 0.7)'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <project.icon size={24} />
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 mb-8">
              Want to see more of my work or discuss a project?
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
