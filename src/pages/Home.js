import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1.5rem;
    padding-top: 70px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem;
    padding-top: 70px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0.5rem;
    padding-top: 60px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    gap: 2.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    gap: 1.5rem;
  }
`;

const InfoSection = styled(motion.div)`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: ${props => props.theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100px;
      height: 4px;
      background: ${props => props.theme.colors.gradient};
      border-radius: 2px;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 2.5rem;
    }
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${props => props.theme.colors.secondary};
      border-radius: 2px;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text};
    opacity: 0.9;
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 1rem;
    }
  }
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled(motion.div)`
  background: ${props => props.theme.colors.gradient};
  border-radius: 50%;
  padding: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.shadows.glow};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
    transform: rotate(30deg);
    opacity: 0.3;
  }
  
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    background: ${props => props.theme.colors.cardBg};
    position: relative;
    z-index: 1;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      width: 250px;
      height: 250px;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      width: 200px;
      height: 200px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border-radius: 50px;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
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
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: white;
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.glow};
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
    
    svg {
      transform: scale(1.2);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
    z-index: 2;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0.5rem;
    
    span {
      display: none;
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
  color: ${props => props.theme.colors.light};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${props => props.theme.colors.gradient};
    border-radius: 2px;
  }
`;

const Highlight = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
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
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Deepansh Tyagi
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Backend Developer & Data Analyst
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Passionate <Highlight>backend developer</Highlight> focused on building efficient server-side applications 
            and scalable web solutions. Experienced in designing <Highlight>REST APIs</Highlight>, 
            <Highlight> database management</Highlight>, and modern development practices.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SectionTitle>Let's Connect</SectionTitle>
            <SocialLinks>
              <SocialIcon 
                href="mailto:tyagideepansh60@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                <span>Email</span>
              </SocialIcon>
              <SocialIcon 
                href="http://www.linkedin.com/in/deepansh-tyagi-03110927a" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </SocialIcon>
              <SocialIcon 
                href="http://github.com/Deepanshtyagi331" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                <span>GitHub</span>
              </SocialIcon>
            </SocialLinks>
          </motion.div>
        </InfoSection>
        
        <ProfileSection
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProfileImage
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.4 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/profile.jpg" 
              alt="Deepansh Tyagi" 
            />
          </ProfileImage>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <SectionTitle>Contact Information</SectionTitle>
            <p>
              <FaPhone style={{ marginRight: '0.5rem' }} />
              +91 7728076303
            </p>
            <p>
              <FaEnvelope style={{ marginRight: '0.5rem' }} />
              tyagideepansh60@gmail.com
            </p>
            <p>Ghaziabad, Uttar Pradesh, India</p>
          </motion.div>
        </ProfileSection>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;