import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Back-End Developer",
      company: "Truwix Tech Solution Pvt. Ltd.",
      location: "Remote",
      period: "Sep 2025 - Ongoing",
      description: "Developing and maintaining RESTful APIs using Node.js (Express) and Python (Flask/FastAPI) for seamless frontend-backend communication. Implementing secure authentication and authorization using JWT and OAuth2 standards. Designing and optimizing database schemas in MongoDB / MySQL / PostgreSQL for efficient data storage and retrieval. Contributing to data-driven features by integrating analytical scripts in Python for real-time insights.",
      achievements: [
        "Developed scalable REST APIs supporting high-volume requests",
        "Implemented secure authentication systems with JWT and OAuth2",
        "Optimized database queries for improved performance",
        "Integrated real-time data processing and analytics"
      ],
      technologies: ["Node.js", "Express", "Python", "Flask", "FastAPI", "MongoDB", "MySQL", "PostgreSQL", "JWT", "OAuth2"]
    },
    {
      title: "Junior Data Analyst",
      company: "Tanvika Software Pvt. Ltd.",
      location: "Remote",
      period: "May 2025 - Sept 2025",
      description: "Completed a hands-on Junior Data Analyst Training Program focused on data analysis, data visualization, and Python programming. Developed end-to-end data analysis projects using libraries like Pandas, NumPy, Matplotlib, and Seaborn. Worked with CSV, Excel, and SQL databases for data extraction and transformation tasks.",
      achievements: [
        "Completed comprehensive data analysis training program",
        "Built multiple end-to-end data analysis projects",
        "Mastered data visualization with Matplotlib and Seaborn",
        "Gained proficiency in SQL database operations"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Excel", "CSV"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impactful projects I've contributed to
            in the field of AI/ML and software development.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-purple-500 to-blue-500" />
              )}

              {/* Content */}
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                    <FaBriefcase className="text-xl" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-sm" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-sm" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-purple-500 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
