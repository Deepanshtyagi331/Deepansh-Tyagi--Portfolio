import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
    transform: translateY(-50vh) translateX(10vw) rotate(180deg);
  }
  100% {
    transform: translateY(-100vh) translateX(20vw) rotate(360deg);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;

const Particle = styled.div`
  position: fixed;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$color};
  border-radius: 50%;
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
  opacity: 0.3;
  animation: ${float} ${props => props.$duration}s linear infinite;
  z-index: -1;
  box-shadow: 0 0 10px ${props => props.$glowColor};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
    transform: scale(1.5);
    z-index: 0;
    animation: ${pulse} 1s ease infinite;
  }
  
  /* Add subtle interaction on click */
  &:active {
    transform: scale(2);
    opacity: 1;
    animation: none;
  }
`;

const BackgroundParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const particleArray = [];
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      particleArray.push({
        id: i,
        size: Math.random() * 20 + 5,
        color: i % 4 === 0 ? 'rgba(108, 92, 231, 0.7)' : 
               i % 4 === 1 ? 'rgba(0, 206, 201, 0.7)' : 
               i % 4 === 2 ? 'rgba(255, 107, 107, 0.7)' :
               'rgba(255, 255, 255, 0.7)',
        glowColor: i % 4 === 0 ? 'rgba(108, 92, 231, 0.5)' :
                  i % 4 === 1 ? 'rgba(0, 206, 201, 0.5)' :
                  i % 4 === 2 ? 'rgba(255, 107, 107, 0.5)' :
                  'rgba(255, 255, 255, 0.5)',
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 40 + 20,
        delay: Math.random() * 10,
        shape: i % 5 === 0 ? 'square' : 'circle'
      });
    }
    
    setParticles(particleArray);
  }, []);

  return (
    <>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          $size={particle.size}
          $color={particle.color}
          $glowColor={particle.glowColor}
          $top={particle.top}
          $left={particle.left}
          $duration={particle.duration}
          style={{ 
            animationDelay: `${particle.delay}s`,
            borderRadius: particle.shape === 'square' ? '20%' : '50%',
            transform: particle.shape === 'square' ? 'rotate(45deg)' : 'rotate(0deg)'
          }}
        />
      ))}
    </>
  );
};

export default BackgroundParticles;