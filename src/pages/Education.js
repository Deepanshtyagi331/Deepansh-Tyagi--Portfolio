import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaCertificate, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      location: "Lucknow, Uttar Pradesh, India",
      period: "2020 - 2024",
      grade: "8.5 CGPA",
      description: "Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering principles.",
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Database Management Systems",
        "Web Development",
        "Computer Networks",
        "Artificial Intelligence"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Science Stream (PCM)",
      institution: "Delhi Public School",
      location: "Ghaziabad, Uttar Pradesh, India",
      period: "2018 - 2020",
      grade: "92%",
      description: "Focused on Physics, Chemistry, and Mathematics with additional subjects in Computer Science.",
      coursework: [
        "Physics",
        "Chemistry", 
        "Mathematics",
        "Computer Science",
        "English"
      ]
    },
    {
      degree: "High School (10th Grade)",
      institution: "Delhi Public School",
      location: "Ghaziabad, Uttar Pradesh, India", 
      period: "2016 - 2018",
      grade: "88%",
      description: "Foundation education with focus on science and mathematics.",
      coursework: [
        "Science",
        "Mathematics",
        "Computer Science",
        "Social Studies",
        "English"
      ]
    }
  ];

  const certifications = [
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      credential: "TF-2023-DEV-001"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "AWS-CCP-2023-001"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2022",
      credential: "ML-SPEC-2022-001"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      credential: "FCC-FS-2022-001"
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
                        {edu.field}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{edu.institution}</span>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-sm" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-sm" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 inline-block">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">
                        Grade: {edu.grade}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
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
