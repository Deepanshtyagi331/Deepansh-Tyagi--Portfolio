import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaCertificate, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "NITRA Technical Campus, Ghaziabad",
      period: "Nov 2022 - Ongoing",
      type: "undergraduate",
      icon: <FaGraduationCap className="text-purple-500" />,
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped
            my expertise in AI/ML and software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-purple-500" />
              Academic Background
            </h2>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                      <FaGraduationCap className="text-xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {edu.specialization}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{edu.institution}</span>
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-sm" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Currently pursuing Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning.
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {edu.achievements && edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-600 dark:text-gray-400">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaCertificate className="text-purple-500" />
              Certifications
            </h2>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                        <FaAward className="text-lg" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          <span>{cert.date}</span>
                        </div>
                        <span>•</span>
                        <span className="font-mono text-xs">{cert.credential}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Academic Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span>Dean's List - 3 Semesters</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🥇</span>
                  <span>1st Place - College Hackathon 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span>Top 5% - Machine Learning Course</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <span>Published Research Paper on NLP</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
