import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaDownload, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 sm:py-20">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
      >
        {/* Left Section - Hero Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Deepansh Tyagi
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Full-Stack Developer & Data Analyst
            </h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
          >
            Detail-oriented professional with a strong foundation in data analytics and backend development, passionate about transforming raw data into actionable insights and building robust, scalable systems. Skilled in data manipulation, visualization, and backend technologies to support evidence-based decision-making and efficient application performance.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <FaDownload />
              Download Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/projects'}
              className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              View Projects
              <FaArrowRight />
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Connect with me</h3>
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: FaGithub, href: 'https://github.com/Deepanshtyagi331', label: 'GitHub' },
                { icon: FaLinkedin, href: 'http://www.linkedin.com/in/deepansh-tyagi-03110927a', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: FaEnvelope, href: 'mailto:tyagideepansh60@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg sm:text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image & Stats */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-900 p-2">
                <img
                  src="/profile.jpg"
                  alt="Deepansh Tyagi"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center"
            >
              <span className="text-xl sm:text-2xl">🚀</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center"
            >
              <span className="text-xl sm:text-2xl">💡</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
            {[{
              number: '1+', label: 'Years Experience'
            },
            { number: '10+', label: 'Projects' },
            { number: '5+', label: 'Technologies' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 sm:p-4"
              >
                <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;