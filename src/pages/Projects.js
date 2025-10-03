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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ProjectTech = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectFeatures = styled.div`
  margin-top: 1rem;
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    
    &:before {
      content: '•';
      color: ${props => props.theme.colors.primary};
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Expense Tracker",
      tech: "Python, Streamlit, SQLite, Altair",
      description: "A fully functional personal expense tracker is a Python-based web application designed to help individuals manage and analyze their day-to-day expenses. The system provides an intuitive interface for adding, viewing, and visualizing expenses, ensuring users can track their financial activities effectively.",
      features: [
        "Expense tracking with categories and date filters",
        "Data visualization with charts and graphs",
        "SQLite database for persistent storage",
        "Responsive UI built with Streamlit"
      ]
    },
    {
      id: 2,
      title: "Language Translator",
      tech: "Python, Speech Recognition, NumPy, PyAudio",
      description: "Developed a real-time speech-to-speech translator using SpeechRecognition, NumPy, and PyAudio, enabling seamless translation between multiple languages. Used PyAudio to capture live audio input and output translated speech, achieving low latency and real-time performance.",
      features: [
        "Real-time speech recognition",
        "Translation between multiple languages",
        "Low-latency audio processing"
      ]
    },
    {
      id: 3,
      title: "Cricket Scoring Board",
      tech: "Python, Pandas, Streamlit, Matplotlib",
      description: "Built an interactive cricket scoring system using Streamlit for real-time manual score entry and visualization. Designed a digital scoreboard to track runs, wickets, overs, and extras with user-friendly input forms. Utilized Pandas DataFrames to store, process, and manage match statistics dynamically.",
      features: [
        "Real-time score tracking and updates",
        "Interactive data visualization",
        "Match statistics and analysis"
      ]
    },
    {
      id: 4,
      title: "Iris Flower Classification",
      tech: "Python, Pandas, Scikit-learn, KNN",
      description: "Developed a machine learning pipeline for Iris flower classification using the K-Nearest Neighbours (KNN) algorithm. Utilized Python, Pandas, and Scikit-learn to load and prepare the dataset, including mapping target values to flower names with a lambda function.",
      features: [
        "Data preprocessing and feature engineering",
        "KNN model implementation and training",
        "Model evaluation and performance metrics"
      ]
    }
  ];

  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </SectionTitle>
        
        <ProjectsGrid
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map(project => (
            <ProjectCard key={project.id} variants={item}>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectTech>{project.tech}</ProjectTech>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectFeatures>
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </ProjectFeatures>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Projects;