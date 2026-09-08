import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import PageBackground3D from '../components/common/PageBackground3D';

const About = () => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] py-16 px-4 sm:px-6 lg:px-8">
      {/* Interactive 3D Ambient Background */}
      <PageBackground3D variant="about" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Title with Smooth Cubic-Bezier Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-500">
            About Me
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Transforming Data into Scalable Solutions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Detail-oriented professional with a strong foundation in data analytics and backend development, passionate about transforming raw data into actionable insights and building robust, scalable systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-8 sticky top-24"
          >
            <div className="text-center mb-6">
              <div className="w-36 h-36 mx-auto mb-5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={process.env.PUBLIC_URL + '/profile.jpeg'}
                  alt="Deepansh Tyagi"
                  className="w-full h-full object-cover object-top grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-1">
                Deepansh Tyagi
              </h2>
              <p className="text-sm font-medium text-amber-500">
                Full-Stack Developer & Data Analyst
              </p>
            </div>

            <div className="space-y-3.5 pt-4 border-t border-gray-100 dark:border-white/5 text-sm">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <FaMapMarkerAlt className="text-amber-500 flex-shrink-0" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <FaEnvelope className="text-amber-500 flex-shrink-0" />
                <span className="truncate">tyagideepansh60@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <FaPhone className="text-amber-500 flex-shrink-0" />
                <span>+91 7728076303</span>
              </div>
            </div>
          </motion.div>

          {/* About Content Sections */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-7 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-3 flex items-center gap-2.5">
                <FaUser className="text-amber-500 text-sm" />
                Who I Am
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate Full-Stack Developer & Data Analyst with a strong foundation in building 
                intelligent systems and scalable web applications. My expertise spans from developing machine learning 
                models to architecting robust backend systems that power modern applications.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                I specialize in creating AI-powered solutions that solve real-world problems, with a particular 
                focus on natural language processing, computer vision, and data analytics.
              </p>
            </div>

            <div className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-7 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-4 flex items-center gap-2.5">
                <FaBriefcase className="text-amber-500 text-sm" />
                What I Do
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">▸</span>
                  <span>Develop AI/ML models for real-world applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">▸</span>
                  <span>Build scalable REST APIs and backend architectures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">▸</span>
                  <span>Create interactive data visualizations and analytics dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-bold">▸</span>
                  <span>Develop modern full-stack web applications with high performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-7 hover:border-white/10 transition-colors">
              <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-3 flex items-center gap-2.5">
                <FaGraduationCap className="text-amber-500 text-sm" />
                Education
              </h3>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                  Bachelor of Technology in Computer Science & Engineering
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  2022 - 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;