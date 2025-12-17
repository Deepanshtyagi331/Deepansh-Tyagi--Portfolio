import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { EnhancedCard, AnimatedButton } from '../components/UIComponents';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(EnhancedCard)``;

const ContactForm = styled(EnhancedCard)``;

const ContactHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.secondary};
    min-width: 1.5rem;
  }
  
  a {
    color: ${props => props.theme.colors.text};
    transition: color 0.3s ease;
    text-decoration: none;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  p {
    margin: 0;
    color: ${props => props.theme.colors.text};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 30, 46, 0.5);
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.main};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 30, 46, 0.5);
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.main};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
  }
`;

const SubmitButton = styled(AnimatedButton)`
  width: 100%;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const SuccessMessage = styled.div`
  background: rgba(46, 213, 115, 0.2);
  color: #2ed573;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background: rgba(255, 71, 87, 0.2);
  color: #ff4757;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        error: true
      });
      return;
    }
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Deepansh Tyagi',
    };
    
    // Send email using EmailJS
    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID, 
      EMAILJS_CONFIG.TEMPLATE_ID, 
      templateParams, 
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setFormStatus({
          submitted: true,
          success: true,
          error: false
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setFormStatus({
          submitted: true,
          success: false,
          error: true
        });
      });
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </SectionTitle>
        
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactHeading>Get In Touch</ContactHeading>
            
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:tyagideepansh60@gmail.com">tyagideepansh60@gmail.com</a>
            </ContactItem>
            
            <ContactItem>
              <FaPhone />
              <a href="tel:+917728076303">+91 7728076303</a>
            </ContactItem>
            
            <ContactItem>
              <FaMapMarkerAlt />
              <p>Ghaziabad, Uttar Pradesh, India</p>
            </ContactItem>
            
            <ContactItem>
              <FaLinkedin />
              <a href="http://www.linkedin.com/in/deepansh-tyagi-03110927a" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/deepansh-tyagi-03110927a
              </a>
            </ContactItem>
            
            <ContactItem>
              <FaGithub />
              <a href="http://github.com/Deepanshtyagi331" target="_blank" rel="noopener noreferrer">
                github.com/Deepanshtyagi331
              </a>
            </ContactItem>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactHeading>Send me a message</ContactHeading>
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                />
              </FormGroup>
              
              <SubmitButton 
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Submit
                          </SubmitButton>
              
              {formStatus.submitted && formStatus.success && (
                <SuccessMessage>Thank you for your message! I'll get back to you soon.</SuccessMessage>
              )}
              
              {formStatus.submitted && formStatus.error && (
                <ErrorMessage>{formData.name && formData.email && formData.message ? 'Failed to send message. Please try again later.' : 'Please fill in all fields.'}</ErrorMessage>
              )}
            </form>
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Contact;