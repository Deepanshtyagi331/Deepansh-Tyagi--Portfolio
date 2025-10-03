import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const HomeContainer = styled.div`
  padding-left: 250px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-left: 0;
    padding-top: 70px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const InfoSection = styled(motion.div)`
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    background: ${props => props.theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 600px;
    line-height: 1.8;
  }
`;

const ProfileImage = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 100pc;
  height: 300px;
  width: 300px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 50px;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: ${props => props.theme.colors.gradient};
    color: white;
    transform: translateY(-3px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0.5rem;
    
    span {
      display: none;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <ContentWrapper>
        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Deepansh Tyagi</h1>
          <h3>Backend Developer & Data Analyst</h3>
          <p>
            Detail-oriented data analytics professional with a strong foundation in quantitative analysis 
            and a passion for transforming raw data into actionable insights. Skilled in various data 
            manipulation and visualization tools, committed to driving business growth through evidence-based 
            decision making.
          </p>
          
          <SocialLinks>
            <SocialIcon href="mailto:tyagideepansh60@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
              <span>Email</span>
            </SocialIcon>
            <SocialIcon href="http://www.linkedin.com/in/deepansh-tyagi-03110927a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </SocialIcon>
            <SocialIcon href="http://github.com/Deepanshtyagi331" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </SocialIcon>
            <SocialIcon href="tel:+917728076303">
              <FaPhone />
              <span>Phone</span>
            </SocialIcon>
          </SocialLinks>
        </InfoSection>
        
        <ProfileImage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/Deepansh.png" 
            alt="Deepansh Tyagi" 
          />
        </ProfileImage>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;