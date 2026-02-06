import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaCode,
  FaChartBar,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const Navbar = ({ themeMode, setThemeMode }) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  const navItems = [
    { to: '/', icon: <FaHome />, text: 'Home' },
    { to: '/about', icon: <FaUser />, text: 'About' },
    { to: '/projects', icon: <FaCode />, text: 'Projects' },
    { to: '/skills', icon: <FaChartBar />, text: 'Skills' },
    { to: '/experience', icon: <FaBriefcase />, text: 'Experience' },
    { to: '/education', icon: <FaGraduationCap />, text: 'Education' },
    { to: '/contact', icon: <FaEnvelope />, text: 'Contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled
            ? 'bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg'
            : 'bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between h-16 lg:h-20 transition-all duration-300 ${
              scrolled ? 'h-14 lg:h-16' : ''
            }`}
          >
            {/* Logo */}
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/"
                className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                DT
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      pathname === item.to
                        ? 'text-purple-400 bg-purple-900/30'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/20'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-gray-300 hover:text-purple-400 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {themeMode === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </motion.button>

              {/* Social Links (Desktop) */}
              <div className="hidden lg:flex items-center space-x-3">
                <motion.a
                  href="https://github.com/Deepanshtyagi331"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <FaGithub className="text-sm" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/deepansh-tyagi-03110927a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <FaLinkedin className="text-sm" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <FaTwitter className="text-sm" />
                </motion.a>
              </div>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-gray-300 hover:text-purple-400 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden fixed inset-0 z-40 ${menuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-64 bg-gray-900 dark:bg-gray-900 shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: menuOpen ? 0 : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              {/* Navigation Items */}
              <div className="flex-1 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                        pathname === item.to
                          ? 'text-purple-400 bg-purple-900/30'
                          : 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/20'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Links (Mobile) */}
              <div className="flex justify-center space-x-4 pt-6 border-t border-gray-800">
                <motion.a
                  href="https://github.com/Deepanshtyagi331"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-800 flex items-center justify-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/deepansh-tyagi-03110927a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-800 flex items-center justify-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <FaLinkedin className="text-lg" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-800 flex items-center justify-center text-gray-300 hover:text-purple-400 transition-all duration-300"
                >
                  <FaTwitter className="text-lg" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;
