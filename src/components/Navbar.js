import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
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
    { to: '/about', text: 'About' },
    { to: '/experience', text: 'Experience' },
    { to: '/skills', text: 'Service' },
    { to: '/projects', text: 'Project' },
    { to: '/resume.pdf', text: 'Resume', isExternal: true },
    { to: '/contact', text: 'Contact' },
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
            ? 'bg-[#0c0c0e]/95 backdrop-blur-lg border-b border-white/10 shadow-xl'
            : 'bg-[#0c0c0e]/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className={`flex items-center justify-between h-16 lg:h-20 transition-all duration-300 ${
              scrolled ? 'h-14 lg:h-16' : ''
            }`}
          >
            {/* Logo matching screenshot: Portfolio with orange accented 'o' */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/"
                className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center font-display select-none"
              >
                <span>P</span>
                <span className="text-amber-500">o</span>
                <span>rtfolio</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Clean minimalist text links */}
            <div className="hidden md:flex items-center space-x-9">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.isExternal ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        pathname === item.to
                          ? 'text-white font-semibold'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.text}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right side actions - Minimalist icons matching mockup */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="hidden sm:flex items-center space-x-3 text-gray-400">
                <motion.a
                  href="https://github.com/Deepanshtyagi331"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.15, color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-base" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/deepansh-tyagi-03110927a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.15, color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-base" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.15, color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-base" />
                </motion.a>
              </div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all border border-white/10"
                aria-label="Toggle theme"
              >
                {themeMode === 'dark' ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white transition-all border border-white/10"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden fixed inset-0 z-40 ${menuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-64 bg-[#0e0e12] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between"
            initial={{ x: '100%' }}
            animate={{ x: menuOpen ? 0 : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="pt-16 space-y-4">
              <div className="mb-6">
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  Portfolio
                </span>
              </div>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.isExternal ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-lg transition-all ${
                        pathname === item.to
                          ? 'text-white bg-white/10 font-semibold'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.text}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links (Mobile) */}
            <div className="flex justify-center space-x-6 pt-6 border-t border-white/10 text-gray-400">
              <a href="https://github.com/Deepanshtyagi331" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="GitHub">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/deepansh-tyagi-03110927a" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Twitter">
                <FaTwitter className="text-xl" />
              </a>
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
