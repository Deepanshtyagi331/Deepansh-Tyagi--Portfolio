import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.colors.gradient};
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      left: 12px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-left: 40px;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: ${props => props.theme.shadows.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 25px;
    height: 25px;
    font-size: 0.8rem;
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

const JobPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.secondary};
`;

const JobDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ResponsibilitiesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ResponsibilityItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  
  &:before {
    content: '•';
    color: ${props => props.theme.colors.primary};
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Junior Data Analyst",
      company: "Tanvika Software Pvt. Ltd.",
      period: "Jun 2025-Ongoing",
      description: "Ongoing hands-on Junior Data Analyst Training Program focused on data analysis, data visualization, and Python programming. Developed end-to-end data analysis projects using libraries like Pandas, NumPy, Matplotlib, and Seaborn. Worked with CSV, Excel, and SQL databases for data extraction and transformation tasks.",
      responsibilities: [
        "Performed data cleaning and preprocessing using Python",
        "Created visualizations and reports using Matplotlib and Seaborn",
        "Extracted and transformed data from various sources",
        "Collaborated with team members on data analysis projects"
      ]
    },
    {
      id: 2,
      title: "Data Analysis Internship",
      company: "Appwars Technologies Pvt. Ltd.",
      period: "Feb 2025-Jun 2025",
      description: "Completed a data analyst internship program focused on data wrangling, visualization, and business insights using tools like Excel, SQL, and Power BI. Worked on real-world datasets to uncover insights and present findings using Power BI and Python during a 6-months data analyst internship.",
      responsibilities: [
        "Analyzed business data to identify trends and patterns",
        "Created interactive dashboards using Power BI",
        "Performed SQL queries for data extraction and analysis",
        "Presented findings and insights to stakeholders"
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
          Work Experience
        </SectionTitle>
        
        <Timeline
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {experiences.map(exp => (
            <TimelineItem key={exp.id} variants={item}>
              <TimelineIcon>
                <FaBriefcase />
              </TimelineIcon>
              <TimelineContent>
                <JobTitle>{exp.title} ({exp.company})</JobTitle>
                <JobPeriod>
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </JobPeriod>
                <JobDescription>{exp.description}</JobDescription>
                <h4>Key Responsibilities:</h4>
                <ResponsibilitiesList>
                  {exp.responsibilities.map((resp, index) => (
                    <ResponsibilityItem key={index}>{resp}</ResponsibilityItem>
                  ))}
                </ResponsibilitiesList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Experience;