import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaAws
} from 'react-icons/fa';
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGoogle
} from 'react-icons/si';

// Lazy-load the Three.js 3D canvas so initial paint remains blazing fast
const Hero3DCanvas = lazy(() => import('../components/hero/Hero3DCanvas'));

const Home = () => {
  const navigate = useNavigate();

  const techBrands = [
    { name: 'Python', icon: SiPython },
    { name: 'React', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'AWS', icon: FaAws },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Google Cloud', icon: SiGoogle },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-col justify-between bg-[#0c0c0e] text-white overflow-hidden">
      {/* 3D Animated Background Canvas (Subtle ambient effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
        <Suspense fallback={<div className="w-full h-full" />}>
          <Hero3DCanvas />
        </Suspense>
      </div>

      {/* Main Hero Container matching reference screenshot format */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 flex-1 flex items-center py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.1]"
            >
              Hey! I’m Deepansh
            </motion.h1>

            {/* Editorial Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-lg"
            >
              I’m experienced in building full-stack applications using React, Node.js, Express.js, Python, Flask, and MongoDB, along with data analytics, Power BI, machine learning, and AI-based solutions.
            </motion.p>

            {/* Action Row - Pill Button & Inline Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-5 sm:gap-6 pt-2"
            >
              {/* Rounded Pill CTA Button */}
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: '#ffffff', color: '#0c0c0e', borderColor: '#ffffff' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full border border-gray-400 hover:border-white text-gray-200 text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer select-none"
              >
                Contact me
              </motion.button>

              {/* Inline Social Icons matching the screenshot layout */}
              <div className="flex items-center space-x-3.5 sm:space-x-4 text-gray-400">
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.15, color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-white transition-colors p-1"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-base sm:text-lg" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/deepansh-tyagi-03110927a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.15, color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-white transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-base sm:text-lg" />
                </motion.a>
                <motion.a
                  href="https://github.com/Deepanshtyagi331"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.15, color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-white transition-colors p-1"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-base sm:text-lg" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.15, color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-white transition-colors p-1"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-base sm:text-lg" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Column - Signature Seamless Portrait Blend */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/5] flex items-center justify-center"
            >
              {/* Subtle ambient light glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Portrait container with editorial mask and edge fades */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-none">
                <img
                  src={process.env.PUBLIC_URL + '/profile.jpeg'}
                  alt="Deepansh Tyagi"
                  className="w-full h-full object-cover object-top grayscale contrast-[1.2] brightness-95 hover:grayscale-0 transition-all duration-700 select-none editorial-portrait-mask"
                  loading="eager"
                />

                {/* Soft Gradient vignettes dissolving edges smoothly into #0c0c0e */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0c0c0e] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0c0c0e]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-[#0c0c0e]/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Brand / Tech Stack Ribbon Strip matching screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 w-full border-t border-white/5 bg-[#121215]/80 backdrop-blur-md py-4 sm:py-5 px-6 sm:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 sm:gap-10">
          {techBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2.5 text-gray-500 hover:text-gray-200 transition-colors duration-300 select-none cursor-default group"
            >
              <brand.icon className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;