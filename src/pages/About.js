import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 6rem 1.5rem 1.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 5rem 1rem 1rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 4rem 0.75rem 0.75rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  background: ${props => props.theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
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
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: '•';
    color: ${props => props.theme.colors.primary};
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  list-style: none;
  padding: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
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
          Professional Overview
        </SectionTitle>
        
        <AboutSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionHeading>About Me</SectionHeading>
          <AboutText>
            Passionate <Highlight>backend developer</Highlight> focused on building efficient server-side applications 
            and scalable web solutions. Experienced in designing <Highlight>REST APIs</Highlight>, 
            <Highlight> database management</Highlight>, and modern development practices. 
            Currently advancing skills in <Highlight>Node.js</Highlight> and <Highlight>Python</Highlight> 
            while contributing to impactful projects.
          </AboutText>
          
          <SectionHeading>Background</SectionHeading>
          <AboutText>
            I am a dedicated Backend Developer with expertise in <Highlight>Python</Highlight>, 
            <Highlight> Node.js</Highlight>, and <Highlight>MongoDB</Highlight>. My journey in technology 
            started with a strong foundation in Computer Science Engineering (Artificial Intelligence and 
            Machine Learning) at NITRA Technical Campus, Ghaziabad.
          </AboutText>
          <AboutText>
            I enjoy building robust backend systems, working with databases, and creating efficient data 
            pipelines. My experience includes developing RESTful APIs, working with SQL and NoSQL databases, 
            and implementing data processing workflows.
          </AboutText>
        </AboutSection>
        
        <AboutSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeading>Core Expertise</SectionHeading>
          <SkillsList>
            <ListItem>Server-side application development</ListItem>
            <ListItem>REST API design and implementation</ListItem>
            <ListItem>Database architecture and management</ListItem>
            <ListItem>Problem-solving and optimization</ListItem>
          </SkillsList>
        </AboutSection>
        
        <AboutSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionHeading>Development Philosophy</SectionHeading>
          <SkillsList>
            <ListItem>
              <strong>Innovation:</strong> Embracing new technologies and approaches to solve complex problems efficiently.
            </ListItem>
            <ListItem>
              <strong>Continuous Learning:</strong> Committed to ongoing skill development and staying current with industry trends.
            </ListItem>
            <ListItem>
              <strong>Impact-Driven:</strong> Focusing on creating meaningful solutions that deliver real value to users and businesses.
            </ListItem>
            <ListItem>
              <strong>Collaboration:</strong> Working effectively with teams to build scalable, maintainable applications.
            </ListItem>
          </SkillsList>
        </AboutSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default About;