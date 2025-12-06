import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SkillsCard = styled(motion.div)`
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

const SkillsHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const SkillItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  
  &:before {
    content: '•';
    color: ${props => props.theme.colors.secondary};
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const ChartContainer = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1.5rem;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.light};
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const Skills = () => {
  const chartData = {
    labels: ['Python', 'Node.js', 'MongoDB', 'SQL', 'REST APIs', 'Data Analysis', 'React', 'Git'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [90, 85, 80, 75, 85, 80, 70, 75],
        backgroundColor: [
          'rgba(108, 92, 231, 0.7)',
          'rgba(0, 206, 201, 0.7)',
          'rgba(108, 92, 231, 0.7)',
          'rgba(0, 206, 201, 0.7)',
          'rgba(108, 92, 231, 0.7)',
          'rgba(0, 206, 201, 0.7)',
          'rgba(108, 92, 231, 0.7)',
          'rgba(0, 206, 201, 0.7)',
        ],
        borderColor: [
          'rgba(108, 92, 231, 1)',
          'rgba(0, 206, 201, 1)',
          'rgba(108, 92, 231, 1)',
          'rgba(0, 206, 201, 1)',
          'rgba(108, 92, 231, 1)',
          'rgba(0, 206, 201, 1)',
          'rgba(108, 92, 231, 1)',
          'rgba(0, 206, 201, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Skills Proficiency',
        color: '#f0f0f0',
        font: {
          size: 18,
          family: "'Montserrat', sans-serif",
          weight: '600',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#f0f0f0',
          callback: function(value) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      x: {
        ticks: {
          color: '#f0f0f0'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </SectionTitle>
        
        <SkillsGrid
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <SkillsCard variants={item}>
            <SkillCategory>
              <CategoryTitle>Backend Technologies</CategoryTitle>
              <SkillsList>
                <SkillItem>Node.js & Express</SkillItem>
                <SkillItem>Python & Flask/Django</SkillItem>
                <SkillItem>REST API Development</SkillItem>
                <SkillItem>Microservices Architecture</SkillItem>
              </SkillsList>
            </SkillCategory>
            
            <SkillCategory>
              <CategoryTitle>Database Systems</CategoryTitle>
              <SkillsList>
                <SkillItem>MongoDB (NoSQL)</SkillItem>
                <SkillItem>PostgreSQL/MySQL (SQL)</SkillItem>
                <SkillItem>Database Design</SkillItem>
                <SkillItem>Query Optimization</SkillItem>
              </SkillsList>
            </SkillCategory>
          </SkillsCard>
          
          <SkillsCard variants={item}>
            <SkillCategory>
              <CategoryTitle>Development Practices</CategoryTitle>
              <SkillsList>
                <SkillItem>Version Control (Git)</SkillItem>
                <SkillItem>Agile Methodologies</SkillItem>
                <SkillItem>Code Review</SkillItem>
                <SkillItem>Testing & Debugging</SkillItem>
              </SkillsList>
            </SkillCategory>
            
            <SkillCategory>
              <CategoryTitle>Data & Analytics</CategoryTitle>
              <SkillsList>
                <SkillItem>Data Analysis & Visualization</SkillItem>
                <SkillItem>Pandas, NumPy</SkillItem>
                <SkillItem>Power BI</SkillItem>
                <SkillItem>Statistical Analysis</SkillItem>
              </SkillsList>
            </SkillCategory>
          </SkillsCard>
        </SkillsGrid>
        
        <ChartContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SkillsHeading>Skills Proficiency</SkillsHeading>
          <Bar data={chartData} options={chartOptions} />
        </ChartContainer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Skills;