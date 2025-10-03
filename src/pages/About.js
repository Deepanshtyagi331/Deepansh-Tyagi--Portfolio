import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  padding-left: 250px;
  min-height: 100vh;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-left: 0;
    padding-top: 70px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100px;
    height: 4px;
    background: ${props => props.theme.colors.gradient};
    border-radius: 2px;
  }
`;

const AboutSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SectionHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const About = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        
        <AboutSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading>Objectives</SectionHeading>
          <AboutText>
            Detail-oriented data analytics professional with a strong foundation in quantitative analysis and a passion for transforming raw data into 
            actionable insights. Skilled in various data manipulation and visualization tools, committed to driving business growth through evidence-based 
            decision making. Eager and motivated individual from Ghaziabad with a solid educational background seeking to contribute analytical 
            skills and problem-solving abilities in a dynamic data analytics role. Dedicated to continuous learning and applying innovative techniques to 
            enhance data-driven outcomes.
          </AboutText>
        </AboutSection>
        
        <AboutSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeading>Background</SectionHeading>
          <AboutText>
            I am a passionate Backend Developer with expertise in Python, SQL, and data analysis. My journey in technology started with a strong 
            foundation in Computer Science Engineering (Artificial Intelligence and Machine Learning) at NITRA Technical Campus, Ghaziabad.
          </AboutText>
          <AboutText>
            I enjoy building robust backend systems, working with databases, and creating efficient data pipelines. My experience includes 
            developing RESTful APIs, working with SQL and NoSQL databases, and implementing data processing workflows.
          </AboutText>
        </AboutSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default About;