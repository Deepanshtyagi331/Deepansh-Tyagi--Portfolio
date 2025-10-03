import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaCertificate } from 'react-icons/fa';

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

const SubSectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin: 2rem 0;
  color: ${props => props.theme.colors.primary};
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 100%;
`;

const CardHeader = styled.div`
  background: ${props => props.theme.colors.gradient};
  padding: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    font-size: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
  
  svg {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
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

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B. Tech (Computer Science Engineering)",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "NITRA Technical Campus, Ghaziabad",
      period: "Nov 2022-Ongoing"
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Lady A Singhania Ednl Academy, Jhalawar, Rajasthan",
      period: "Apr 2020-Mar 2021",
      score: "Percentage: 70%"
    },
    {
      id: 3,
      degree: "Highschool",
      institution: "Holy Child Academy, Bagpath, Uttar Pradesh",
      period: "Apr 2018-Mar 2019",
      score: "Percentage: 75%"
    }
  ];
  
  const certifications = [
    {
      id: 1,
      title: "Advanced Python Course",
      issuer: "Udemy",
      period: "Nov 2024-Jan 2025",
      description: "Completed an intensive Advanced Python training program focusing on object-oriented programming, decorators, generators, and multithreading. Built scalable Python applications with in-depth understanding of memory management, performance tuning, and error handling."
    },
    {
      id: 2,
      title: "Python Training Program",
      issuer: "Intershala",
      period: "July 2023-Aug 2023",
      description: "Completed a comprehensive Basic Python Training Program covering core programming fundamentals including variables, data types, loops, functions, and file handling."
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
          Education & Certifications
        </SectionTitle>
        
        <SubSectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Education
        </SubSectionTitle>
        
        <EducationGrid
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {education.map(edu => (
            <EducationCard key={edu.id} variants={item}>
              <CardHeader>
                <FaGraduationCap />
                <div>
                  <CardTitle>{edu.degree}</CardTitle>
                  {edu.specialization && <CardSubtitle>{edu.specialization}</CardSubtitle>}
                </div>
              </CardHeader>
              <CardContent>
                <CardInfo>
                  <FaCalendarAlt />
                  <span>{edu.period}</span>
                </CardInfo>
                <CardDescription>{edu.institution}</CardDescription>
                {edu.score && <CardDescription>{edu.score}</CardDescription>}
              </CardContent>
            </EducationCard>
          ))}
        </EducationGrid>
        
        <SubSectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Certifications
        </SubSectionTitle>
        
        <EducationGrid
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {certifications.map(cert => (
            <EducationCard key={cert.id} variants={item}>
              <CardHeader>
                <FaCertificate />
                <div>
                  <CardTitle>{cert.title}</CardTitle>
                  <CardSubtitle>{cert.issuer}</CardSubtitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardInfo>
                  <FaCalendarAlt />
                  <span>{cert.period}</span>
                </CardInfo>
                <CardDescription>{cert.description}</CardDescription>
              </CardContent>
            </EducationCard>
          ))}
        </EducationGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Education;