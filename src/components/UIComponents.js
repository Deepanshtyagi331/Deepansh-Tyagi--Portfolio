import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Enhanced Card Component with glassmorphism design
export const EnhancedCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.glass};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  transition: all ${props => props.theme.transitions.smooth};
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
    transition: opacity ${props => props.theme.transitions.smooth};
    border-radius: inherit;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.6s;
    opacity: 0;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary};
    
    &::before {
      opacity: 0.05;
    }
    
    &::after {
      opacity: 1;
      animation: shimmer 0.6s ease-out;
    }
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }
`;

// Animated Button with modern glassmorphism styling
export const AnimatedButton = styled(motion.button)`
  background: ${props => props.theme.colors.gradient};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.pill};
  padding: 0.875rem 2rem;
  font-family: ${props => props.theme.fonts.main};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.smooth};
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: ${props => props.theme.shadows.colored};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: ${props => props.theme.shadows.glow};
    
    &::before {
      left: 100%;
    }
    
    &::after {
      width: 300px;
      height: 300px;
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

// Enhanced Section Title with modern effects
export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  color: ${props => props.theme.colors.text};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${props => props.theme.colors.gradient};
    border-radius: 2px;
    transition: width ${props => props.theme.transitions.smooth};
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100px;
    height: 1px;
    background: ${props => props.theme.colors.primary}40;
    border-radius: 1px;
  }
  
  &:hover {
    &::after {
      width: 100px;
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

// Glass Card for modern sections
export const GlassCard = styled(motion.div)`
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all ${props => props.theme.transitions.smooth};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.glass};
    border-color: ${props => props.theme.colors.primary}40;
  }
`;

// Floating Action Button
export const FloatingActionButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gradient};
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.large};
  transition: all ${props => props.theme.transitions.smooth};
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  &:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: ${props => props.theme.shadows.glow};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

// Enhanced Text Gradient component
export const GradientText = styled(motion.span)`
  background: ${props => props.theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  
  &:hover {
    background: ${props => props.theme.colors.gradientSecondary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

// Modern Badge component
export const Badge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.glassBorder};
  border-radius: ${props => props.theme.borderRadius.pill};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  transition: all ${props => props.theme.transitions.standard};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.small};
    background: ${props => props.theme.colors.primary}20;
  }
`;

// Enhanced Input Field
export const EnhancedInput = styled(motion.input)`
  width: 100%;
  padding: 1rem 1.25rem;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid ${props => props.theme.colors.glassBorder};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.main};
  font-size: 1rem;
  transition: all ${props => props.theme.transitions.standard};
  
  &::placeholder {
    color: ${props => props.theme.colors.text}60;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
    transform: translateY(-2px);
  }
  
  &:hover {
    border-color: ${props => props.theme.colors.primary}60;
  }
`;

// Enhanced Tag component for skills and technologies
export const Tag = styled(motion.span)`
  display: inline-block;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.glassBorder};
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border-radius: ${props => props.theme.borderRadius.pill};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  transition: all ${props => props.theme.transitions.standard};
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: ${props => props.theme.colors.primary}20;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

// Loading spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${props => props.theme.colors.glassBorder};
  border-top: 4px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }
`;

// Progress bar component
export const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 8px;
  background: ${props => props.theme.colors.glass};
  border-radius: ${props => props.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${props => props.theme.colors.gradient};
    border-radius: inherit;
    transition: width ${props => props.theme.transitions.smooth};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 6px;
  }
`;

// Notification system components
export const NotificationContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 9999;
  pointer-events: none;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    top: 80px;
    right: 10px;
    left: 10px;
  }
`;

export const Notification = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.colors.glassBorder};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  min-width: 300px;
  max-width: 400px;
  box-shadow: ${props => props.theme.shadows.xl};
  pointer-events: auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => 
      props.$type === 'success' ? props.theme.colors.success :
      props.$type === 'error' ? props.theme.colors.error :
      props.$type === 'warning' ? props.theme.colors.warning :
      props.theme.colors.info
    };
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    min-width: auto;
    max-width: none;
  }
`;

export const NotificationContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const NotificationIcon = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => 
    props.$type === 'success' ? props.theme.colors.success :
    props.$type === 'error' ? props.theme.colors.error :
    props.$type === 'warning' ? props.theme.colors.warning :
    props.theme.colors.info
  };
`;

export const NotificationText = styled.div`
  flex: 1;
  
  h4 {
    margin: 0 0 0.25rem 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${props => props.theme.colors.light};
  }
  
  p {
    margin: 0;
    font-size: 0.85rem;
    color: ${props => props.theme.colors.text};
    opacity: 0.9;
    line-height: 1.4;
  }
`;

export const NotificationClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  opacity: 0.6;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${props => props.theme.colors.gradient};
  border-radius: inherit;
  transition: width ${props => props.theme.transitions.smooth};
`;

// Tooltip component
export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    padding: 0.5rem 1rem;
    border-radius: ${props => props.theme.borderRadius.md};
    font-size: 0.875rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all ${props => props.theme.transitions.standard};
    z-index: 1000;
  }
  
  &:hover::after {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-5px);
  }
`;

// Page transition component
export const PageTransition = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

// Loading overlay component
export const LoadingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
