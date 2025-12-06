import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
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
  FaTwitter
} from 'react-icons/fa';

const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

// Define NavContainer before Nav since it's referenced in Nav
const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  transition: var(--transition);
  
  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
    height: 70px;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.theme.colors.navBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.standard};
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transform: translateY(0);
  
  &.scrolled {
    padding: 0.5rem 0;
    background: rgba(15, 15, 26, 0.95);
    box-shadow: ${props => props.theme.shadows.large};
    
    ${NavContainer} {
      height: 70px;
    }
  }
  
  &.hidden {
    transform: translateY(-100%);
  }
  
  @media (max-width: 768px) {
    background: ${props => props.theme.colors.dark};
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    
    &.scrolled {
      padding: 0;
    }
  }
`;

const Logo = styled(motion(Link))`
  font-size: 1.5rem;
  font-weight: 800;
  color: transparent;
  text-decoration: none;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${props => props.theme.transitions.standard};
  position: relative;
  z-index: 1001;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.gradient};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: ${props => props.theme.transitions.standard};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: ${props => props.theme.colors.dark};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
    padding: 2rem 0;
    z-index: 1000;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    }
  }
  
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const NavItem = styled(motion(Link))`
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: ${props => props.theme.transitions.standard};
  position: relative;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.gradient};
    transform: scaleX(${props => props.$active ? '1' : '0'});
    transform-origin: ${props => props.$active ? 'left' : 'right'};
    transition: transform 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.gradient};
    opacity: 0;
    z-index: -1;
    border-radius: 0.25rem;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.light};
    transform: translateY(-2px);
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
    
    &::after {
      opacity: 0.1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    width: 100%;
    justify-content: center;
    border-radius: 0;
    
    &:hover {
      background: rgba(255, 255, 255, 0.03);
      transform: none;
    }
    
    &::before {
      display: none;
    }
    
    &::after {
      display: none;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (min-width: 769px) {
    display: none;
  }
  
  a {
    color: ${props => props.theme.colors.text};
    font-size: 1.25rem;
    transition: ${props => props.theme.transitions.standard};
    opacity: 0.7;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const path = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHidden(false);
      }
      
      setScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [path]);

  // Close menu on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Add animation delay to nav items
  const navItems = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "/about", icon: <FaUser />, text: "About" },
    { to: "/projects", icon: <FaCode />, text: "Projects" },
    { to: "/skills", icon: <FaChartBar />, text: "Skills" },
    { to: "/experience", icon: <FaBriefcase />, text: "Experience" },
    { to: "/education", icon: <FaGraduationCap />, text: "Education" },
    { to: "/contact", icon: <FaEnvelope />, text: "Contact", className: "contact-btn" },
  ];

  return (
    <Nav className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <NavContainer>
        <Logo 
          to="/"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span>DT</span>
        </Logo>
        
        <MobileMenuButton 
          onClick={toggleMenu} 
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <NavLinks $isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavItem 
              key={item.to} 
              to={item.to} 
              $active={path === item.to}
              className={item.className}
              style={{
                animation: isOpen ? `${fadeIn} 0.3s ease-out ${index * 0.05}s both` : 'none'
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {item.icon}
              <span>{item.text}</span>
            </NavItem>
          ))}
          
          <SocialLinks>
            <motion.a 
              href="https://github.com/Deepanshtyagi331" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="http://www.linkedin.com/in/deepansh-tyagi-03110927a" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaTwitter />
            </motion.a>
          </SocialLinks>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;