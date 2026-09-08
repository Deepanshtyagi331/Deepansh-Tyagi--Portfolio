import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaChartLine, FaBrain, FaCode, FaServer } from 'react-icons/fa';
import PageBackground3D from '../components/common/PageBackground3D';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-xl" />,
      skills: [
        { name: "Python", level: 90, icon: <FaPython className="text-blue-400" /> },
        { name: "SQL", level: 85, icon: <FaDatabase className="text-amber-400" /> },
        { name: "JavaScript", level: 80, icon: <FaCode className="text-yellow-400" /> }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <FaServer className="text-xl" />,
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs className="text-emerald-400" /> },
        { name: "React", level: 75, icon: <FaReact className="text-cyan-400" /> },
        { name: "Flask", level: 70, icon: <FaServer className="text-purple-400" /> },
        { name: "FastAPI", level: 70, icon: <FaServer className="text-teal-400" /> }
      ]
    },
    {
      title: "Data Analysis & ML",
      icon: <FaBrain className="text-xl" />,
      skills: [
        { name: "Pandas", level: 85, icon: <FaChartLine className="text-emerald-400" /> },
        { name: "NumPy", level: 85, icon: <FaChartLine className="text-blue-400" /> },
        { name: "Matplotlib & Seaborn", level: 80, icon: <FaChartLine className="text-amber-400" /> },
        { name: "EDA & Data Cleaning", level: 90, icon: <FaChartLine className="text-cyan-400" /> },
        { name: "Predictive Modeling & NLP", level: 75, icon: <FaBrain className="text-pink-400" /> }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <FaDatabase className="text-xl" />,
      skills: [
        { name: "MongoDB", level: 80, icon: <FaDatabase className="text-emerald-400" /> },
        { name: "MySQL", level: 75, icon: <FaDatabase className="text-blue-400" /> },
        { name: "PostgreSQL", level: 70, icon: <FaDatabase className="text-indigo-400" /> }
      ]
    },
    {
      title: "Visualization & Analytics",
      icon: <FaChartLine className="text-xl" />,
      skills: [
        { name: "Tableau", level: 75, icon: <FaChartLine className="text-blue-400" /> },
        { name: "Power BI", level: 80, icon: <FaChartLine className="text-amber-400" /> },
        { name: "Excel & Sheets API", level: 85, icon: <FaChartLine className="text-emerald-400" /> }
      ]
    },
    {
      title: "Development & Deployment",
      icon: <FaGitAlt className="text-xl" />,
      skills: [
        { name: "Git / GitHub", level: 90, icon: <FaGitAlt className="text-orange-400" /> },
        { name: "REST APIs", level: 85, icon: <FaServer className="text-blue-400" /> }
      ]
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] py-16 px-4 sm:px-6 lg:px-8">
      {/* Interactive 3D Ambient Background */}
      <PageBackground3D variant="skills" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-500">
            Services & Skills
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Technical Capabilities
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Full-stack engineering and data analytics capabilities honed to craft performant, reliable, and intelligent digital products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-7 hover:border-white/15 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-white/5">
                <div className="text-amber-500">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span>{skill.icon}</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Minimalist Progress Bar */}
                    <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
