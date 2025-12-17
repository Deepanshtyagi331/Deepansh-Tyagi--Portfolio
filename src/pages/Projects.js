import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { EnhancedCard, Tag } from '../components/UIComponents';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 5rem 1.5rem 1.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem 1rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 3rem 0.5rem 0.5rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    gap: 0.8rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.3rem;
  }
`;

const ProjectCard = styled(EnhancedCard)`
  &:hover {
    ${ProjectTitle} {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1.25rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1rem;
  }
`;

const ProjectTech = styled.div`
  margin-bottom: 1rem;
  
  ${Tag} {
    margin: 0.25rem 0.25rem 0.25rem 0;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
`;

const ProjectFeatures = styled.div`
  margin-top: 1rem;
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.light};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 30px;
      height: 2px;
      background: ${props => props.theme.colors.gradient};
      border-radius: 1px;
    }
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
    transition: all 0.3s ease;
    
    &:before {
      content: '▶';
      color: ${props => props.theme.colors.primary};
      position: absolute;
      left: 0;
      font-size: 0.8rem;
      top: 2px;
      transition: all 0.3s ease;
    }
    
    &:hover {
      color: ${props => props.theme.colors.light};
      transform: translateX(5px);
      
      &:before {
        color: ${props => props.theme.colors.secondary};
        transform: translateX(2px);
      }
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
      title: "E-Commerce Backend API",
      tech: "Node.js, Express, MongoDB, JWT",
      description: "A comprehensive backend API for an e-commerce platform featuring user authentication, product management, shopping cart, and order processing. Implemented RESTful endpoints with proper validation and error handling.",
      features: [
        "User authentication with JWT tokens",
        "Product catalog with search and filtering",
        "Shopping cart and checkout functionality",
        "Order management system",
        "Admin dashboard for product management"
      ]
    },
    {
      id: 2,
      title: "Task Management System",
      tech: "Python, Flask, PostgreSQL, SQLAlchemy",
      description: "A full-featured task management application with user authentication, project organization, and real-time collaboration features. Built with a clean REST API and documented with Swagger.",
      features: [
        "User authentication and role-based access control",
        "Project and task creation with due dates",
        "Real-time task updates with WebSocket",
        "File attachment support",
        "Export functionality to PDF and CSV"
      ]
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      tech: "Python, Pandas, Plotly, Dash",
      description: "An interactive dashboard for visualizing business metrics and KPIs. Processes large datasets and presents insights through various chart types and filters. Supports real-time data updates.",
      features: [
        "Interactive data visualizations with Plotly",
        "Customizable dashboards with drag-and-drop widgets",
        "Real-time data processing and updates",
        "Export reports to multiple formats",
        "User authentication and access control"
      ]
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      tech: "React, Node.js, MongoDB, Chart.js",
      description: "A personal finance tracking application that helps users monitor income, expenses, and savings goals. Features budget planning, categorization, and detailed reporting.",
      features: [
        "Income and expense tracking with categories",
        "Budget planning and goal setting",
        "Monthly and yearly financial reports",
        "Data visualization with charts",
        "Secure user authentication"
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
            <ProjectCard 
              key={project.id} 
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ProjectContent>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ProjectTitle>{project.title}</ProjectTitle>
                </motion.div>
                <ProjectTech>
                                  {project.tech.split(', ').map((tech, index) => (
                                    <Tag key={index}>{tech}</Tag>
                                  ))}
                                </ProjectTech>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectFeatures>
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {feature}
                      </motion.li>
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