import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            CREATIVE UI
            <span className="block text-primary">DESIGNER</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/resume.pdf"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition-colors"
              download
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero