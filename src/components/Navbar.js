import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaUser, FaCode, FaChartBar, FaBriefcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: ${props => props.theme.shadows.medium};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    height: auto;
    position: sticky;
    top: 0;
    padding: 1rem;
    flex-direction: row;
    justify-content: center;
    overflow-x: auto;
  }
`;

const Logo = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;
  
  h2 {
    background: ${props => props.theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 2rem;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(255, 255, 255, 0.1);
  }
  
  ${props => props.active && `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background: ${props.theme.colors.gradient};
    }
  `}
  
  svg {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0.5rem;
    
    span {
      display: none;
    }
    
    svg {
      margin-right: 0;
      font-size: 1.5rem;
    }
    
    ${props => props.active && `
      &::before {
        left: 0;
        top: auto;
        bottom: 0;
        height: 3px;
        width: 100%;
      }
    `}
  }
`;

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <Nav>
      <Logo>
        <h2>Deepansh Tyagi</h2>
      </Logo>
      <NavLinks>
        <NavItem to="/" active={path === '/'}>
          <FaHome />
          <span>Home</span>
        </NavItem>
        <NavItem to="/about" active={path === '/about'}>
          <FaUser />
          <span>About Me</span>
        </NavItem>
        <NavItem to="/projects" active={path === '/projects'}>
          <FaCode />
          <span>Projects</span>
        </NavItem>
        <NavItem to="/skills" active={path === '/skills'}>
          <FaChartBar />
          <span>Skills</span>
        </NavItem>
        <NavItem to="/experience" active={path === '/experience'}>
          <FaBriefcase />
          <span>Experience</span>
        </NavItem>
        <NavItem to="/education" active={path === '/education'}>
          <FaGraduationCap />
          <span>Education</span>
        </NavItem>
        <NavItem to="/contact" active={path === '/contact'}>
          <FaEnvelope />
          <span>Contact</span>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;