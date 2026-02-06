import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws, FaChartLine, FaBrain, FaRobot, FaCode, FaServer } from 'react-icons/fa';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-2xl" />,
      skills: [
        { name: "Python", level: 90, icon: <FaPython className="text-blue-500" /> },
        { name: "JavaScript", level: 85, icon: <FaCode className="text-yellow-500" /> },
        { name: "TypeScript", level: 75, icon: <FaCode className="text-blue-600" /> },
        { name: "SQL", level: 80, icon: <FaDatabase className="text-orange-500" /> }
      ]
    },
    {
      title: "AI/ML Technologies",
      icon: <FaBrain className="text-2xl" />,
      skills: [
        { name: "TensorFlow", level: 85, icon: <FaBrain className="text-orange-500" /> },
        { name: "PyTorch", level: 80, icon: <FaBrain className="text-red-500" /> },
        { name: "Scikit-learn", level: 90, icon: <FaChartLine className="text-green-500" /> },
        { name: "OpenCV", level: 75, icon: <FaRobot className="text-blue-500" /> },
        { name: "YOLO", level: 85, icon: <FaRobot className="text-purple-500" /> }
      ]
    },
    {
      title: "Frontend Development",
      icon: <FaReact className="text-2xl" />,
      skills: [
        { name: "React", level: 90, icon: <FaReact className="text-cyan-500" /> },
        { name: "HTML/CSS", level: 95, icon: <FaCode className="text-orange-500" /> },
        { name: "Tailwind CSS", level: 85, icon: <FaCode className="text-teal-500" /> },
        { name: "JavaScript", level: 85, icon: <FaCode className="text-yellow-500" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-2xl" />,
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", level: 90, icon: <FaServer className="text-gray-600" /> },
        { name: "FastAPI", level: 80, icon: <FaServer className="text-teal-500" /> },
        { name: "MongoDB", level: 75, icon: <FaDatabase className="text-green-600" /> },
        { name: "PostgreSQL", level: 80, icon: <FaDatabase className="text-blue-600" /> }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaGitAlt className="text-2xl" />,
      skills: [
        { name: "Git", level: 90, icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Docker", level: 75, icon: <FaDocker className="text-blue-500" /> },
        { name: "AWS", level: 70, icon: <FaAws className="text-orange-500" /> },
        { name: "REST APIs", level: 90, icon: <FaServer className="text-purple-500" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and technologies I work with
            to build intelligent and scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          ease: "easeOut"
                        }}
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid lg:grid-cols-2 gap-8"
        >
          {/* Learning Focus */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Learning
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-purple-500">▸</span>
                <span>Advanced Deep Learning Architectures</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">▸</span>
                <span>Microservices with Kubernetes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">▸</span>
                <span>GraphQL and Apollo Server</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">▸</span>
                <span>Advanced Cloud Architecture</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Achievements
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-purple-500">▸</span>
                <span>AWS Certified Cloud Practitioner</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">▸</span>
                <span>TensorFlow Developer Certificate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">▸</span>
                <span>Full Stack Web Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">▸</span>
                <span>Machine Learning Specialization</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
