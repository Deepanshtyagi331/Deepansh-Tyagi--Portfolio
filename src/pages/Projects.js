import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import PageBackground3D from '../components/common/PageBackground3D';

const Projects = () => {
  const navigate = useNavigate();

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
      icon: <FaReact className="text-2xl" />
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
      icon: <FaNodeJs className="text-2xl" />
    },
    {
      id: 3,
      title: "MERN Stack Blog Platform",
      category: "Full-Stack Application",
      tech: ["React", "Node.js", "Express", "MongoDB", "Auth"],
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
      icon: <FaDatabase className="text-2xl" />
    }
  ];

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('python')) return <FaPython className="text-blue-400" />;
    if (techLower.includes('react')) return <FaReact className="text-cyan-400" />;
    if (techLower.includes('node')) return <FaNodeJs className="text-emerald-400" />;
    if (techLower.includes('database') || techLower.includes('mongo')) return <FaDatabase className="text-amber-400" />;
    return null;
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] py-16 px-4 sm:px-6 lg:px-8">
      {/* Interactive 3D Ambient Background */}
      <PageBackground3D variant="projects" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-500">
            Selected Works
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Featured Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio of backend systems, full-stack web applications, and data-driven solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl hover:border-white/15 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 bg-white/5 dark:bg-white/10 rounded-xl flex items-center justify-center text-amber-500 border border-white/10">
                    {project.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white leading-snug">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="pt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-amber-500 font-bold">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-7 py-5 bg-gray-50 dark:bg-white/[0.02] border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-black dark:hover:bg-white/20 transition-all border border-gray-200 dark:border-white/10 shadow-sm"
                    aria-label="View on GitHub"
                  >
                    <FaGithub className="text-sm" />
                  </motion.a>

                  {project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-black dark:hover:bg-white/20 transition-all border border-gray-200 dark:border-white/10 shadow-sm"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.a>
                  )}
                </div>

                {project.demo !== '#' ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    Live Demo →
                  </a>
                ) : (
                  <span className="text-xs text-gray-500">Repository Only</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <div className="bg-[#121215]/90 border border-white/5 rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto shadow-2xl space-y-4">
            <h3 className="text-2xl font-bold font-display text-white">
              Have a Project in Mind?
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              I'm always open to discussing new projects, architectures, and opportunities to build something extraordinary.
            </p>
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: '#ffffff', color: '#0c0c0e' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-3 rounded-full border border-gray-400 text-white font-medium text-sm transition-all duration-300 cursor-pointer select-none"
              >
                Contact me
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;