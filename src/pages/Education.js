import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa';
import PageBackground3D from '../components/common/PageBackground3D';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "NITRA Technical Campus, Ghaziabad",
      period: "Nov 2022 - Ongoing",
      type: "undergraduate",
      achievements: [
        "Specializing in AI/ML with focus on practical applications",
        "Building strong foundation in computer science fundamentals",
        "Developing expertise in machine learning algorithms and neural networks"
      ]
    },
  ];

  const certifications = [
    {
      name: "Python Training Program",
      issuer: "Internshala",
      date: "July 2023 - Aug 2023",
      credential: "Completed comprehensive Basic Python Training Program covering core programming fundamentals including variables, data types, loops, functions, and file handling."
    },
    {
      name: "Advance Python Course",
      issuer: "Udemy", 
      date: "Nov 2024 - Jan 2025",
      credential: "Completed an intensive Advanced Python training program focusing on object-oriented programming, decorators, generators, and multithreading. Built scalable Python applications with in-depth understanding of memory management, performance tuning, and error handling."
    },
    {
      name: "Data Analysis Training",
      issuer: "Appwars Technologies Pvt. Ltd.",
      date: "June 2025 - Sep 2025",
      credential: "Completed a data analyst internship program focused on data wrangling, visualization, and business insights using tools like Excel, SQL, and Power BI. Worked on real-world datasets to uncover insights and present findings using Power BI and Python during a 4-months data analyst internship."
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] py-16 px-4 sm:px-6 lg:px-8">
      {/* Interactive 3D Ambient Background */}
      <PageBackground3D variant="education" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-4"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-500">
            Academics & Credentials
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Education & Certifications
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Academic grounding and professional certifications underpinning my software engineering and data analytics journey.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white flex items-center gap-2.5">
            <FaGraduationCap className="text-amber-500 text-lg" />
            Formal Education
          </h2>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-8 hover:border-white/15 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100 dark:border-white/5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-amber-500 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="text-amber-500" />
                    {edu.period}
                  </span>
                </div>

                <div className="pt-5 space-y-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Specialization: <span className="text-gray-900 dark:text-white font-semibold">{edu.specialization}</span>
                  </p>
                  <ul className="space-y-2">
                    {edu.achievements.map((item, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2.5">
                        <span className="text-amber-500 font-bold">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold font-display text-gray-900 dark:text-white flex items-center gap-2.5">
            <FaCertificate className="text-amber-500 text-base" />
            Certifications & Training
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-7 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-semibold text-amber-500 uppercase tracking-wider">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {cert.credential}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
