import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import PageBackground3D from '../components/common/PageBackground3D';

const Experience = () => {
  const experiences = [
    {
      title: "Back-End Developer",
      company: "Truwix Tech Solution Pvt. Ltd.",
      location: "On-site",
      type: "Full Time",
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
      location: "On-site",
      type: "Full Time",
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
    <div className="relative min-h-[calc(100vh-5rem)] py-16 px-4 sm:px-6 lg:px-8">
      {/* Interactive 3D Ambient Background */}
      <PageBackground3D variant="experience" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-500">
            Career Journey
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            Work Experience
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Hands-on professional roles in backend development, API design, and data analytics.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#121215]/90 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-white/5 shadow-xl p-8 hover:border-white/15 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-gray-100 dark:border-white/5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    {exp.type && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/30 tracking-wide">
                        {exp.type}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-amber-500 mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 sm:pt-1">
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-amber-500" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-amber-500" />
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="pt-5 space-y-4">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Key Contributions:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2.5">
                        <span className="text-amber-500 font-bold">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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
