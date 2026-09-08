import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';

function App({ themeMode, setThemeMode }) {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  };

  const pageTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <div className={`min-h-screen ${themeMode === 'dark' ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-[#0c0c0e] text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Projects />
              </motion.div>
            } />
            <Route path="/skills" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Skills />
              </motion.div>
            } />
            <Route path="/experience" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Experience />
              </motion.div>
            } />
            <Route path="/education" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Education />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;