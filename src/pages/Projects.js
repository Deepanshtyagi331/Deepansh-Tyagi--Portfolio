import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaNodeJs, FaDatabase, FaBrain, FaRobot, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Urban-Hub (E-Commerce Website)",
      category: "Full-Stack E-Commerce",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      description: "Full-stack e-commerce platform built using React, Node.js, and MongoDB, featuring secure APIs, dynamic UI, and efficient data management.",
      features: [
        "Secure API implementation",
        "Dynamic user interface",
        "Efficient data management",
        "MongoDB integration",
        "Modern React frontend"
      ],
      github: "https://github.com/Deepanshtyagi331/urban-hub",
      demo: "https://urban-hub-frontendu.vercel.app/",
      icon: <FaReact className="text-3xl" />
    },
    {
      id: 2,
      title: "BharatroniX (E-Commerce Website)",
      category: "Backend Architecture",
      tech: ["Node.js", "Express", "MongoDB", "E-commerce"],
      description: "Complete backend architecture for BharatroniX, supporting scalable ecommerce operations for electronic components and hardware products.",
      features: [
        "Scalable backend architecture",
        "Ecommerce operations support",
        "Electronic components platform",
        "Hardware products management",
        "API development"
      ],
      github: "https://github.com/Deepanshtyagi331/bharatronix-backend",
      demo: "https://www.bharatronix.com",
      icon: <FaNodeJs className="text-3xl" />
    },
    {
      id: 3,
      title: "MERN Stack Blog Platform",
      category: "Full-Stack Application",
      tech: ["React", "Node.js", "Express", "MongoDB", "Authentication"],
      description: "Dynamic Blog Management Platform enabling users to create, edit, and comment on posts with real-time updates. Features role-based access control and SEO-friendly routing.",
      features: [
        "User authentication system",
        "Role-based access control",
        "Real-time blog updates",
        "SEO-friendly routing",
        "Content management system"
      ],
      github: "https://github.com/Deepanshtyagi331/blog-platform",
      demo: "#",
      icon: <FaDatabase className="text-3xl" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('python')) return <FaPython className="text-blue-500" />;
    if (techLower.includes('react')) return <FaReact className="text-cyan-500" />;
    if (techLower.includes('node')) return <FaNodeJs className="text-green-500" />;
    if (techLower.includes('database') || techLower.includes('mongo')) return <FaDatabase className="text-yellow-500" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of AI/ML projects, backend systems, and full-stack applications. 
            Each project demonstrates my passion for building intelligent and scalable solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-purple-500 mr-2">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <FaGithub className="text-sm" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                    aria-label="View Live Demo"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.a>
                </div>
                
                {project.features.length > 3 && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    +{project.features.length - 3} more features
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-white/90 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;