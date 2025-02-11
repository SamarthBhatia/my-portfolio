
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Achintya Solutions",
      period: "Oct 2023 - Jan 2024",
      location: "Delhi, India",
      achievements: [
        "Enhanced backend data processing efficiency by optimizing database queries and implementing server-side caching, reducing data retrieval times by 30%",
        "Redesigned the platform's architecture to support modular and scalable deployments, leading to a 15% boost in user retention",
        "Built and deployed a low-latency real-time messaging system using WebSockets",
        "Integrated a high-throughput payment processing service with enhanced security protocols"
      ]
    }
  ]

  const education = [
    {
      degree: "Master of Science - Computer Science and Engineering",
      school: "Politecnico di Milano",
      period: "Sept 2024 - Jun 2026 (Expected)",
      location: "Milan, Italy"
    },
    {
      degree: "Bachelor of Technology - Information Technology",
      school: "Maharaja Agrasen Institute of Technology",
      period: "Dec 2020 - Jul 2024",
      location: "New Delhi, India",
      gpa: "GPA: 9.38/10"
    }
  ]

  return (
    <section id="experience" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* Work Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 bg-secondary/30 rounded-lg p-6">
              <div className="flex flex-wrap justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">{exp.period}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-secondary/30 rounded-lg p-6">
                <div className="flex flex-wrap justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{edu.period}</p>
                    <p className="text-gray-400">{edu.location}</p>
                    {edu.gpa && <p className="text-primary font-semibold">{edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience