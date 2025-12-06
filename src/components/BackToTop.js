import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gradient};
  color: white;
  border: none;
  box-shadow: ${props => props.theme.shadows.large};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: ${props => props.visible ? '1' : '0'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
`;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BackToTopButton 
      visible={visible} 
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </BackToTopButton>
  );
};

export default BackToTop;