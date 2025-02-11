import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          Got a project in <span className="text-primary">mind?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-primary font-semibold mb-2">Email</h4>
                <p className="text-gray-300">samarth.bhatia@mail.polimi.it</p>
                <p className="text-gray-300">samarthbhatia700@gmail.com</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Milan, Italy</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SamarthBhatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/samarthbhatia89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-secondary/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-secondary/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-secondary/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact