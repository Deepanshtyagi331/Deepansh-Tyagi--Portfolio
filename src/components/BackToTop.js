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
  opacity: ${props => props.$visible ? '1' : '0'};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$visible ? '0' : '20px'}) scale(${props => props.$visible ? '1' : '0.8'});
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: ${props => props.theme.shadows.glow};
    
    &::after {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.05);
  }
  
  /* Tooltip */
  &::after {
    content: 'Back to Top';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    padding: 0.5rem;
    border-radius: ${props => props.theme.borderRadius.md};
    font-size: 0.8rem;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    box-shadow: ${props => props.theme.shadows.medium};
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
    
    &::after {
      display: none;
    }
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
      $visible={visible} 
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </BackToTopButton>
  );
};

export default BackToTop;