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
const Logo = styled(motion(Link))`
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

/* -----------------------------------------
   MOBILE MENU BUTTON
-------------------------------------------- */
const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 768px) {
    display: block;
  }
`;

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
const NavItem = styled(motion(Link))`
  font-size: 1rem;
  font-weight: 500;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.text};

  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0.5rem 0.75rem;
  border-radius: 0.3rem;
  transition: 0.3s ease;

  ${({ $open, $delay }) =>
    $open &&
    css`
      animation: ${fadeIn} 0.35s ease-out ${$delay}s both;
    `}

  &:hover {
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: none;
    }
  }
`;

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
const Navbar = () => {
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

        <Backdrop $open={menuOpen} onClick={() => setMenuOpen(false)} />
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
