import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  @keyframes floatingParticles {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(108, 92, 231, 0.7);
    }
    70% {
      transform: scale(1.02);
      box-shadow: 0 0 0 10px rgba(108, 92, 231, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(108, 92, 231, 0);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  body {
    font-family: 'Poppins', 'Montserrat', sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    background-attachment: fixed;
    position: relative;
    overflow-x: hidden;
    font-size: 16px;
    font-weight: 400;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 10% 20%, rgba(108, 92, 231, 0.15) 0%, rgba(15, 15, 26, 0) 20%),
                  radial-gradient(circle at 90% 80%, rgba(0, 206, 201, 0.15) 0%, rgba(15, 15, 26, 0) 20%);
      background-size: 200% 200%;
      animation: gradientAnimation 15s ease infinite;
      z-index: -1;
    }
    
    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at 20% 30%, rgba(108, 92, 231, 0.1) 0%, transparent 30%),
        radial-gradient(ellipse at 80% 70%, rgba(0, 206, 201, 0.1) 0%, transparent 30%);
      z-index: -2;
      animation: floatingParticles 20s ease-in-out infinite;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 15px;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 14px;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.light};
    letter-spacing: -0.5px;
    font-weight: 700;
    line-height: 1.2;
  }
  
  h1 {
    font-size: 3rem;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 2rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.8rem;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.3rem;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 1.2rem;
    }
  }
  
  h4 {
    font-size: 1.25rem;
  }
  
  h5 {
    font-size: 1.1rem;
  }
  
  h6 {
    font-size: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.7;
    color: ${props => props.theme.colors.text};
    opacity: 0.9;
    font-weight: 400;
    
    @media (max-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 1rem;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 0.95rem;
      line-height: 1.6;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.standard};
    position: relative;
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
      transform: translateY(-2px);
    }
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
  
  ul {
    list-style-type: disc;
  }
  
  ol {
    list-style-type: decimal;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: ${props => props.theme.colors.gradient};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: ${props => props.theme.shadows.small};
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: ${props => props.theme.shadows.glow};
      animation: pulse 1.5s infinite;
    }
    
    &:active {
      transform: translateY(-1px);
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.3);
    }
  }
  
  section {
    padding: 4rem 0;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: 3rem 0;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      padding: 2rem 0;
    }
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  /* Page transition fade */
  .page-transition {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(30, 30, 46, 0.5);
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Scroll margin for anchor links */
  [id] {
    scroll-margin-top: 100px;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      scroll-margin-top: 80px;
    }
  }
`;

export default GlobalStyle;