import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate AI/ML Developer and Backend Engineer building intelligent systems and scalable solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-900 p-2">
                  <img
                    src="/profile.jpg"
                    alt="Deepansh Tyagi"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Deepansh Tyagi
              </h2>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                AI/ML Developer & Backend Engineer
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="text-purple-500" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="text-purple-500" />
                <span>tyagideepansh60@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FaPhone className="text-purple-500" />
                <span>+91 7728076303</span>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaUser className="text-purple-500" />
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate AI/ML Developer and Backend Engineer with a strong foundation in building 
                intelligent systems and scalable web applications. My expertise spans from developing machine learning 
                models to architecting robust backend systems that power modern applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                I specialize in creating AI-powered solutions that solve real-world problems, with a particular 
                focus on natural language processing, computer vision, and data analytics. My approach combines 
                technical excellence with creative problem-solving to deliver innovative solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaBriefcase className="text-purple-500" />
                What I Do
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Develop AI/ML models for real-world applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Build scalable REST APIs and backend systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Create data visualization and analytics dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Design and implement database architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Develop full-stack web applications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-purple-500" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor of Technology</h4>
                  <p className="text-gray-600 dark:text-gray-400">Computer Science and Engineering</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2020 - 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;