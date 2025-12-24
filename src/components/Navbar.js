import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
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
} from "react-icons/fa";

/* -----------------------------------------
   ANIMATIONS
-------------------------------------------- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* -----------------------------------------
   MAIN NAVBAR WRAPPER
-------------------------------------------- */
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  background: ${({ theme }) => theme.colors.navBg};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: ${({ theme }) => theme.transitions.standard};

  transform: ${({ $hidden }) => ($hidden ? "translateY(-100%)" : "translateY(0)")};

  &.scrolled {
    background: rgba(15, 15, 26, 0.95);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

/* -----------------------------------------
   NAV INNER CONTAINER
-------------------------------------------- */
const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  height: ${({ $scrolled }) => ($scrolled ? "70px" : "90px")};
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: ${({ theme }) => theme.transitions.standard};

  @media (max-width: 768px) {
    height: ${({ $scrolled }) => ($scrolled ? "65px" : "75px")};
  }
`;

/* -----------------------------------------
   LOGO
-------------------------------------------- */
const StyledLogo = styled(Link)`
  font-size: 1.6rem;
  font-weight: 800;
  text-decoration: none;

  color: transparent;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;

  display: flex;
  gap: 0.4rem;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Logo = motion.create(StyledLogo);

/* -----------------------------------------
   MOBILE MENU BUTTON
-------------------------------------------- */
const StyledMobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuButton = motion.create(StyledMobileMenuButton);

/* -----------------------------------------
   NAV LINKS WRAPPER
-------------------------------------------- */
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $open }) => ($open ? "0" : "-100%")};
    height: 100vh;
    width: 80%;
    max-width: 300px;

    background: ${({ theme }) => theme.colors.dark};
    padding-top: 120px;
    flex-direction: column;
    transition: 0.35s ease;
    box-shadow: -4px 0 25px rgba(0, 0, 0, 0.3);
    z-index: 999;
  }
`;

/* -----------------------------------------
   NAV INDIVIDUAL LINK
-------------------------------------------- */
const StyledNavItem = styled(Link)`
  font-size: 1rem;
  font-weight: 500;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.text};

  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0.8rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}20;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.1rem;
    width: 100%;

    &:hover {
      background: ${({ theme }) => theme.colors.primary}30;
      transform: translateX(0);
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &[aria-current='page']::after,
  &:hover::after {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: none;
    }

    &::after {
      display: none;
    }
  }
`;

const NavItem = motion.create(StyledNavItem);

/* -----------------------------------------
   BACKDROP FOR MOBILE MENU
-------------------------------------------- */
const Backdrop = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(3px);
    z-index: 998;
  }
`;

/* -----------------------------------------
   ENHANCED THEME TOGGLE BUTTON
-------------------------------------------- */
const ThemeToggleContainer = styled(motion.div)`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.glassBorder};
  border-radius: 50px;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.smooth};
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadows.glow};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    right: 60px;
  }
  
  @media (max-width: 400px) {
    top: 15px;
    right: 50px;
    width: 50px;
    height: 25px;
  }
`;

const ThemeToggleSlider = styled(motion.div)`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  background: ${props => props.theme.colors.gradient};
  border-radius: 50%;
  transition: all ${props => props.theme.transitions.smooth};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.small};
  
  @media (max-width: 400px) {
    width: 18px;
    height: 18px;
    top: 2px;
    left: 2px;
  }
  
  svg {
    font-size: 12px;
    color: white;
    
    @media (max-width: 400px) {
      font-size: 10px;
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    right: 60px;
  }
  
  @media (max-width: 400px) {
    top: 15px;
    right: 50px;
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
`;

/* -----------------------------------------
   SOCIAL LINKS FOR MOBILE
-------------------------------------------- */
const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 769px) {
    display: none;
  }

  a {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text};
    transition: 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

/* -----------------------------------------
   COMPONENT
-------------------------------------------- */
const Navbar = ({ themeMode, setThemeMode }) => {
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  const navItems = useMemo(
    () => [
      { to: "/", icon: <FaHome />, text: "Home" },
      { to: "/about", icon: <FaUser />, text: "About" },
      { to: "/projects", icon: <FaCode />, text: "Projects" },
      { to: "/skills", icon: <FaChartBar />, text: "Skills" },
      { to: "/experience", icon: <FaBriefcase />, text: "Experience" },
      { to: "/education", icon: <FaGraduationCap />, text: "Education" },
      { to: "/contact", icon: <FaEnvelope />, text: "Contact" },
    ],
    []
  );

  /* Scroll Behavior */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  /* Close on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Smooth scrolling for anchor links */
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const toggleTheme = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <Nav $hidden={hidden} className={scrolled ? "scrolled" : ""}>
      <NavContainer $scrolled={scrolled}>
        <Logo to="/" whileHover={{ y: -3 }}>
          DT
        </Logo>

        <MobileMenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavLinks $open={menuOpen}>
          {navItems.map((item, i) => (
            <NavItem
              key={item.to}
              to={item.to}
              $active={pathname === item.to}
              $open={menuOpen}
              $delay={i * 0.07}
            >
              {item.icon} {item.text}
            </NavItem>
          ))}

          <SocialLinks>
            <a href="https://github.com/Deepanshtyagi331" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="http://www.linkedin.com/in/deepansh-tyagi-03110927a" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </SocialLinks>
        </NavLinks>

        {/* Enhanced Theme Toggle Button */}
        <ThemeToggleContainer 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ThemeToggleSlider
            animate={{
              x: themeMode === 'dark' ? 0 : 28,
              rotate: themeMode === 'dark' ? 0 : 180
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {themeMode === 'dark' ? <FaMoon /> : <FaSun />}
          </ThemeToggleSlider>
        </ThemeToggleContainer>

        <Backdrop $open={menuOpen} onClick={() => setMenuOpen(false)} />
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
