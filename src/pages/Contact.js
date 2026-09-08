import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Toast from '../components/Toast';
import PageBackground3D from '../components/common/PageBackground3D';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const hideToast = () => {
    setToast(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getApiUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return 'https://deepanshtyagi.vercel.app/api/contact';
    } else {
      return 'http://localhost:5001/api/contact';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        showToast('success', 'Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        showToast('error', 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('error', 'Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] py-16 px-4 sm:px-6 lg:px-8">
      {/* Interactive 3D Ambient Background */}
      <PageBackground3D variant="contact" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={hideToast}
          />
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-500">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Let's Build Something Together
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects, technical challenges, and full-stack opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Social */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-8 space-y-6">
              <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                Contact Information
              </h2>
              
              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 dark:bg-white/10 rounded-xl flex items-center justify-center text-amber-500 border border-white/10">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:tyagideepansh60@gmail.com" className="font-medium text-gray-900 dark:text-white hover:text-amber-500 transition-colors">
                      tyagideepansh60@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 dark:bg-white/10 rounded-xl flex items-center justify-center text-amber-500 border border-white/10">
                    <FaPhone className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</p>
                    <p className="font-medium text-gray-900 dark:text-white">+91 7728076303</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 dark:bg-white/10 rounded-xl flex items-center justify-center text-amber-500 border border-white/10">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">Ghaziabad, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-8 space-y-4">
              <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                Social Profiles
              </h2>
              <div className="flex items-center gap-4 pt-2">
                <motion.a
                  href="https://github.com/Deepanshtyagi331"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-white/5 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all border border-white/10"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-base" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/deepansh-tyagi-03110927a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-white/5 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all border border-white/10"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-base" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-white/5 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all border border-white/10"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-base" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-8 sm:p-9"
          >
            <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry / Collaboration"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your idea or project..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: '#ffffff', color: '#0c0c0e' }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-8 rounded-full border border-gray-400 text-white font-medium text-sm transition-all duration-300 cursor-pointer select-none disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;