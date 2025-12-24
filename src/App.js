import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import Breadcrumb from './components/Breadcrumb';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import { PageTransition, LoadingOverlay, Spinner, ProgressBar } from './components/UIComponents';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';

function App({ themeMode, setThemeMode }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -30,
      scale: 0.98
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.4
  };

  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0);

    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <BackgroundParticles />
      <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
      <div className="container">
        <Breadcrumb />
      </div>

      {isLoading && (
        <LoadingOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Spinner />
          <ProgressBar
            initial={{ width: 0 }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </LoadingOverlay>
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Projects />
            </PageTransition>
          } />
          <Route path="/skills" element={
            <PageTransition
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Skills />
            </PageTransition>
          } />
          <Route path="/experience" element={
            <PageTransition
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Experience />
            </PageTransition>
          } />
          <Route path="/education" element={
            <PageTransition
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Education />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <BackToTop />
    </>
  );
}

export default App;