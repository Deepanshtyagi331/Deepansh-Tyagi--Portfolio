import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SkillsHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
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
  
  &:before {
    content: '•';
    color: ${props => props.theme.colors.secondary};
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`;

const ChartContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid rgba(255, 255, 255, 0.2);
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
    labels: ['Python', 'SQL', 'Data Analysis', 'Streamlit', 'Flask', 'Pandas', 'Power BI', 'Excel'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [90, 85, 80, 75, 70, 85, 80, 75],
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
        color: '#2d3436',
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
          callback: function(value) {
            return value + '%';
          }
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
            <SkillsHeading>Programming Languages</SkillsHeading>
            <SkillsList>
              <SkillItem>Python</SkillItem>
              <SkillItem>SQL</SkillItem>
              <SkillItem>HTML/CSS</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>Node.js</SkillItem>
            </SkillsList>
            
            <SkillsHeading>Frameworks & Libraries</SkillsHeading>
            <SkillsList>
              <SkillItem>Flask</SkillItem>
              <SkillItem>Streamlit</SkillItem>
              <SkillItem>Pandas</SkillItem>
              <SkillItem>NumPy</SkillItem>
              <SkillItem>Matplotlib/Plotly</SkillItem>
              <SkillItem>Scikit-learn</SkillItem>
              <SkillItem>TensorFlow</SkillItem>
              <SkillItem>MongoDB</SkillItem>
            </SkillsList>
          </SkillsCard>
          
          <SkillsCard variants={item}>
            <SkillsHeading>Tools & Technologies</SkillsHeading>
            <SkillsList>
              <SkillItem>Git/GitHub</SkillItem>
              <SkillItem>VS Code</SkillItem>
              <SkillItem>SQLite</SkillItem>
              <SkillItem>PostgreSQL</SkillItem>
              <SkillItem>Power BI</SkillItem>
              <SkillItem>Excel</SkillItem>
              <SkillItem>Jupyter Notebooks</SkillItem>
              <SkillItem>PyCharm</SkillItem>
            </SkillsList>
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