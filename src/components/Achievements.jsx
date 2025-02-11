import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "1st and 3rd positions in the IT Department at MAIT in 4th and 5th Semesters with CGPA 9.58 and 9.57 respectively.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "LeetCode Proficiency",
      description: "Solved over 220 LeetCode problems using C++ and MySQL, achieving an impressive acceptance rate of 63.7%.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "G20 MAIT Hackathon",
      description: "Secured Runner-Up position for developing Scrap Sage, a memory allocation snapshot tool.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "SIH MAIT Hackathon",
      description: "Won the hackathon for creation of a Smart Drone for object detection.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
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

  const cardVariants = {
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
    <section id="achievements" className="relative py-16">
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
            variants={cardVariants}
          >
            My <span className="text-primary">Achievements</span>
            <div className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-grow ml-4"></div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl overflow-hidden bg-gradient-to-r ${achievement.gradient} p-1`}
              >
                <div className="bg-dark rounded-lg p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;