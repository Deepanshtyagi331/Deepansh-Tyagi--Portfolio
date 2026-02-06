import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaChartLine, FaBrain, FaCode, FaServer } from 'react-icons/fa';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-2xl" />,
      skills: [
        { name: "Python", level: 90, icon: <FaPython className="text-blue-500" /> },
        { name: "SQL", level: 85, icon: <FaDatabase className="text-orange-500" /> },
        { name: "JavaScript", level: 80, icon: <FaCode className="text-yellow-500" /> }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <FaServer className="text-2xl" />,
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-500" /> },
        { name: "React", level: 75, icon: <FaReact className="text-cyan-500" /> },
        { name: "Flask", level: 70, icon: <FaServer className="text-purple-500" /> },
        { name: "FastAPI", level: 70, icon: <FaServer className="text-red-500" /> }
      ]
    },
    {
      title: "Data Analysis & ML",
      icon: <FaBrain className="text-2xl" />,
      skills: [
        { name: "Pandas", level: 85, icon: <FaChartLine className="text-green-500" /> },
        { name: "NumPy", level: 85, icon: <FaChartLine className="text-blue-500" /> },
        { name: "Matplotlib", level: 80, icon: <FaChartLine className="text-purple-500" /> },
        { name: "Seaborn", level: 80, icon: <FaChartLine className="text-orange-500" /> },
        { name: "Data Cleaning", level: 85, icon: <FaChartLine className="text-cyan-500" /> },
        { name: "EDA", level: 90, icon: <FaChartLine className="text-red-500" /> },
        { name: "Predictive Modeling", level: 75, icon: <FaBrain className="text-indigo-500" /> },
        { name: "CNNs", level: 70, icon: <FaBrain className="text-pink-500" /> },
        { name: "NLP", level: 70, icon: <FaBrain className="text-teal-500" /> }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-2xl" />,
      skills: [
        { name: "MongoDB", level: 80, icon: <FaDatabase className="text-green-500" /> },
        { name: "MySQL", level: 75, icon: <FaDatabase className="text-blue-500" /> },
        { name: "PostgreSQL", level: 70, icon: <FaDatabase className="text-purple-500" /> },
        { name: "SQL", level: 85, icon: <FaDatabase className="text-orange-500" /> }
      ]
    },
    {
      title: "Visualization & Analytics",
      icon: <FaChartLine className="text-2xl" />,
      skills: [
        { name: "Tableau", level: 75, icon: <FaChartLine className="text-blue-600" /> },
        { name: "Power BI", level: 80, icon: <FaChartLine className="text-purple-600" /> },
        { name: "Excel", level: 85, icon: <FaChartLine className="text-green-600" /> },
        { name: "Google Sheets API", level: 70, icon: <FaChartLine className="text-orange-600" /> }
      ]
    },
    {
      title: "Development Tools",
      icon: <FaGitAlt className="text-2xl" />,
      skills: [
        { name: "Git/GitHub", level: 90, icon: <FaGitAlt className="text-orange-500" /> },
        { name: "REST APIs", level: 85, icon: <FaServer className="text-blue-500" /> }
      ]
    }
  ];

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
              Technical Skills
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical expertise spanning programming languages, frameworks, and tools 
            that enable me to build robust and scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-purple-600 dark:text-purple-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-purple-600 dark:text-purple-400">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Additional Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-400">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Learning Approach
              </h4>
              <p>
                I believe in continuous learning and staying updated with the latest 
                technologies and best practices in software development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solving
              </h4>
              <p>
                I enjoy tackling complex problems and breaking them down into 
                manageable, scalable solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
