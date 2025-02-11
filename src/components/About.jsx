import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { category: "Languages", items: ["C/C++", "Java", "Rust", "Python", "JavaScript", "MySQL"] },
    { category: "Frameworks", items: ["React.js", "Express.js", "Node.js", "MongoDB"] },
    { category: "Other", items: ["Bootstrap", "Tailwind CSS", "JIRA", "Linux", "Git/GitHub"] }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">
            About <span className="text-primary">me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 mb-6">
                I'm a Computer Science and Engineering student at Politecnico di Milano,
                specializing in full-stack development and system architecture. With a strong
                foundation in various programming languages and frameworks, I focus on creating
                efficient and scalable solutions.
              </p>
              <p className="text-gray-400">
                My experience includes developing high-performance trading systems, operating systems,
                and cross-platform applications. I'm passionate about optimization and creating
                robust software solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-primary mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="bg-secondary px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About