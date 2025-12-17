import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const BreadcrumbContainer = styled.nav`
  padding: 1rem 0;
  font-size: 0.9rem;
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  box-shadow: ${props => props.theme.shadows.small};
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0.5rem 0;
  }
`;

const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  
  &:not(:last-child)::after {
    content: '/';
    margin: 0 0.5rem;
    color: ${props => props.theme.colors.text};
    opacity: 0.5;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    opacity: 1;
    background: rgba(108, 92, 231, 0.1);
    transform: translateY(-1px);
  }
  
  &.active {
    color: ${props => props.theme.colors.primary};
    opacity: 1;
    font-weight: 500;
    background: rgba(108, 92, 231, 0.1);
  }
`;

const BreadcrumbSpan = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;

const breadcrumbNames = {
  '/': 'Home',
  '/about': 'About',
  '/projects': 'Projects',
  '/skills': 'Skills',
  '/experience': 'Experience',
  '/education': 'Education',
  '/contact': 'Contact'
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            <FaHome style={{ marginRight: '0.25rem' }} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <BreadcrumbItem key={routeTo}>
              {isLast ? (
                <BreadcrumbSpan>{breadcrumbNames[routeTo] || pathname}</BreadcrumbSpan>
              ) : (
                <BreadcrumbLink to={routeTo} className={location.pathname === routeTo ? 'active' : ''}>
                  {breadcrumbNames[routeTo] || pathname}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;