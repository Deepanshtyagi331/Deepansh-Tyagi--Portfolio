import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Enhanced Card Component with modern design
export const EnhancedCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.gradient};
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
    
    &::before {
      opacity: 0.1;
    }
  }
`;

// Animated Button with modern styling
export const AnimatedButton = styled(motion.button)`
  background: ${props => props.theme.colors.gradient};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.pill};
  padding: 0.75rem 1.5rem;
  font-family: ${props => props.theme.fonts.main};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: ${props => props.theme.shadows.small};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.gradientSecondary};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.glow};
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.3);
  }
`;

// Section Title with modern underline effect
export const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  background: ${props => props.theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100px;
    height: 4px;
    background: ${props => props.theme.colors.gradient};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 150px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.8rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

// Tag component for skills and technologies
export const Tag = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.cardBg};
  color: ${props => props.theme.colors.text};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.pill};
  font-size: 0.85rem;
  margin: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.gradient};
    color: white;
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

// Loading spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 3px solid ${props => props.theme.colors.primary};
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;

// Progress bar component
export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.pill};
  overflow: hidden;
  margin: 1rem 0;
`;

export const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${props => props.theme.colors.gradient};
  border-radius: ${props => props.theme.borderRadius.pill};
`;

// Tooltip component
export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    padding: 0.5rem;
    border-radius: ${props => props.theme.borderRadius.md};
    font-size: 0.85rem;
    white-space: nowrap;
    z-index: 1000;
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  &:hover::before {
    content: '';
    position: absolute;
    bottom: 115%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: ${props => props.theme.colors.dark};
  }
`;

// Page transition component
export const PageTransition = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

// Loading overlay component
export const LoadingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  
  ${Spinner} {
    width: 50px;
    height: 50px;
    border-width: 4px;
  }
`;
