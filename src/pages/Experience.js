import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem 1rem;
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
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1.5rem;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.3rem;
  }
`;

const CompanyName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

const JobPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
`;

const JobDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

const ResponsibilitiesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ResponsibilityItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.text};
  
  &:before {
    content: '•';
    color: ${props => props.theme.colors.primary};
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`;

const SectionHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.light};
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
      title: "Back-End Developer Trainee",
      company: "Truwix",
      period: "September 2025 - Present (3 months)",
      description: "Specializing in Node.js and Python development, focusing on efficient server-side applications and REST API architecture. Managing databases for scalable web solutions while continuously learning new technologies and contributing to meaningful projects.",
      responsibilities: [
        "Building and maintaining efficient backend applications using Node.js and Python frameworks",
        "Designing and implementing RESTful APIs for seamless client-server communication",
        "Managing and optimizing databases to ensure scalability and performance",
        "Analyzing technical challenges and implementing innovative solutions for complex requirements"
      ]
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Tanvika Software",
      period: "May 2025 - September 2025 (5 months)",
      location: "Noida, Uttar Pradesh, India",
      description: "Gained valuable experience in data analysis, working with large datasets and contributing to data-driven decision-making processes.",
      responsibilities: [
        "Performed data cleaning and preprocessing using Python",
        "Created visualizations and reports using Matplotlib and Seaborn",
        "Extracted and transformed data from various sources",
        "Collaborated with team members on data analysis projects"
      ]
    },
    {
      id: 3,
      title: "Data Analysis Internship",
      company: "Appwars Technologies Pvt. Ltd.",
      period: "Feb 2025 - Jun 2025 (5 months)",
      description: "Completed a data analyst internship program focused on data wrangling, visualization, and business insights using tools like Excel, SQL, and Power BI. Worked on real-world datasets to uncover insights and present findings using Power BI and Python.",
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
                <JobTitle>{exp.title}</JobTitle>
                <CompanyName>{exp.company}</CompanyName>
                <JobPeriod>
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </JobPeriod>
                {exp.location && <JobPeriod>{exp.location}</JobPeriod>}
                <JobDescription>{exp.description}</JobDescription>
                <SectionHeading>Key Responsibilities:</SectionHeading>
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