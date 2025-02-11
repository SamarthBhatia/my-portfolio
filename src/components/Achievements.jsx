import { motion } from 'framer-motion'

const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "1st and 3rd positions in the IT Department at MAIT in 4th and 5th Semesters with CGPA 9.58 and 9.57 respectively."
    },
    {
      title: "LeetCode Proficiency",
      description: "Solved over 220 LeetCode problems using C++ and MySQL, achieving an impressive acceptance rate of 63.7%."
    },
    {
      title: "G20 MAIT Hackathon",
      description: "Secured Runner-Up position for developing Scrap Sage, a memory allocation snapshot tool."
    },
    {
      title: "SIH MAIT Hackathon",
      description: "Won the hackathon for creation of a Smart Drone for object detection."
    }
  ]

  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          My <span className="text-primary">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 rounded-lg p-6 hover:bg-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Achievements