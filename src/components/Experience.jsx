import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const Experience = () => {
  const workExperience = [
    {
      title: "Full Stack Developer Intern",
      company: "Achintya Solutions",
      period: "Oct 2023 - Jan 2024",
      location: "Delhi, India",
      description: "Optimized backend performance and developed real-time features",
      achievements: [
        "Enhanced backend data processing efficiency by optimizing database queries and implementing server-side caching, reducing data retrieval times by 30%",
        "Redesigned the platform's architecture to support modular and scalable deployments, leading to a 15% boost in user retention",
        "Built and deployed a low-latency real-time messaging system using WebSockets",
        "Integrated a high-throughput payment processing service with enhanced security protocols"
      ],
      skills: ["Node.js", "React.js", "MongoDB", "WebSocket", "Redis"],
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  const education = [
    {
      degree: "Master of Science - Computer Science and Engineering",
      school: "Politecnico di Milano",
      period: "Sept 2024 - Jun 2026 (Expected)",
      location: "Milan, Italy",
      courses: ["Databases", "Advanced Computer Architectures", "Computing Infrastructures", "Computer Security", "Advanced Algorithms"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      degree: "Bachelor of Technology - Information Technology",
      school: "Maharaja Agrasen Institute of Technology",
      period: "Dec 2020 - Jul 2024",
      location: "New Delhi, India",
      gpa: "GPA: 9.38/10",
      courses: ["Data Structures", "Operating Systems", "Computer Networks", "Web Development"],
      gradient: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="relative py-16">
      <SectionBackground variant="1" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold mb-12 flex items-center gap-4"
            variants={itemVariants}
          >
            My <span className="text-primary">Experience</span>
            <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-grow ml-4"></div>
          </motion.h2>

          {/* Work Experience */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-gray-200"
              variants={itemVariants}
            >
              Work Experience
            </motion.h3>
            
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-xl overflow-hidden bg-gradient-to-r ${exp.gradient} p-1 mb-8`}
              >
                <div className="bg-dark rounded-lg p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-medium">{exp.period}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-gray-200 font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <svg className="w-5 h-5 mt-1 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-dark/50 text-primary text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-gray-200"
              variants={itemVariants}
            >
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`rounded-xl overflow-hidden bg-gradient-to-r ${edu.gradient} p-1`}
                >
                  <div className="bg-dark rounded-lg p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                        <p className="text-gray-400">{edu.school}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-medium">{edu.period}</p>
                        <p className="text-gray-400">{edu.location}</p>
                        {edu.gpa && (
                          <p className="text-emerald-400 font-semibold mt-1">{edu.gpa}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="text-gray-200 font-medium mb-2">Relevant Courses:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-dark/50 text-gray-300 text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;