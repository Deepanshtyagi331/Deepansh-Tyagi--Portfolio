import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { EnhancedCard } from '../components/UIComponents';

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
  background: rgba(30, 30, 46, 0.8);
  color: ${props => props.theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  position: relative;
  z-index: 10;
  pointer-events: auto;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
    background: rgba(30, 30, 46, 0.9);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 30, 46, 0.8);
  color: ${props => props.theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  position: relative;
  z-index: 11; /* Changed from 10 to 11 */
  pointer-events: auto;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: ${props => props.theme.colors.gradient};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 2rem;
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.smooth};
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: ${props => props.theme.shadows.colored};
  z-index: 10;
  pointer-events: auto;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(108, 92, 231, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.3);
  }
`;

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const PopupModal = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.colors.glassBorder};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: ${props => props.theme.shadows.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

const PopupClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  opacity: 0.6;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const PopupIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => 
    props.$type === 'success' ? 'rgba(46, 213, 115, 0.2)' :
    props.$type === 'error' ? 'rgba(255, 71, 87, 0.2)' :
    'rgba(255, 193, 7, 0.2)'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${props => 
    props.$type === 'success' ? '#2ed573' :
    props.$type === 'error' ? '#ff4757' :
    '#ffc107'
  };
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const PopupTitle = styled.h2`
  text-align: center;
  margin: 0 0 1rem 0;
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
`;

const PopupMessage = styled.p`
  text-align: center;
  margin: 0;
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  font-size: 1rem;
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

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  max-width: 90%;
`;

const PopupButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    type: 'success',
    title: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const showPopup = (type, title, message) => {
    setPopup({
      show: true,
      type,
      title,
      message
    });
  };
  
  const closePopup = () => {
    setPopup(prev => ({ ...prev, show: false }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      showPopup(
        'warning',
        'Validation Error',
        'Please fill in all required fields before submitting.'
      );
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showPopup(
        'error',
        'Invalid Email',
        'Please enter a valid email address.'
      );
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Deepansh Tyagi',
    };
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      if (result.status === 200) {
        showPopup(
          'success',
          'Message Sent Successfully!',
          'Thank you for reaching out. I\'ll get back to you soon.'
        );
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      showPopup(
        'error',
        'Failed to Send Message',
        'There was an error sending your message. Please try again or contact me directly via email.'
      );
    } finally {
      setIsSubmitting(false);
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
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </SubmitButton>
            </form>
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>
      <AnimatePresence>
        {popup.show && (
          <PopupOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <PopupModal
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <PopupClose onClick={closePopup}>
                <FaTimes />
              </PopupClose>
              
              <PopupIcon $type={popup.type}>
                {popup.type === 'success' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                )}
                {popup.type === 'error' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                )}
                {popup.type === 'warning' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                )}
              </PopupIcon>
              
              <PopupTitle>{popup.title}</PopupTitle>
              <PopupMessage>{popup.message}</PopupMessage>
            </PopupModal>
          </PopupOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default Contact;