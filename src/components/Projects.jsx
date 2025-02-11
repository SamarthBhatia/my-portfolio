// src/components/Projects.jsx
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "MercuryTrade",
      period: "Nov 2024",
      location: "Milan, Italy",
      description: "High-performance trading platform with custom memory allocator",
      points: [
        "Designed a custom lock-free memory allocator achieving <500ns allocation latencies",
        "Engineered an order book management system with thread-safe concurrent access",
        "Developed a real-time trading platform with atomic operations and WebSocket streams"
      ],
      tags: ["C++", "Memory Management", "Concurrent Programming", "WebSockets"]
    },
    {
      title: "CoreLite-OS",
      period: "May, 2024",
      location: "Delhi, India",
      description: "Lightweight Rust-based operating system kernel",
      points: [
        "Developed a lightweight Rust-based kernel (640KB binary size) with essential functionalities",
        "Implemented paging and dynamic memory allocation with custom allocator",
        "Created reliable interrupt handling mechanisms with 1000 Hz timer resolution"
      ],
      tags: ["Rust", "OS Development", "Memory Management", "Interrupt Handling"]
    },
    {
      title: "Scrap-Sage",
      period: "Feb, 2023",
      location: "Delhi, India",
      description: "Cross-platform memory allocation analysis tool",
      points: [
        "Developed a cross-platform memory allocation snapshot tool in C++",
        "Engineered Windows-based diagnostic software that identified critical inefficiencies",
        "Implemented efficient process capture using Windows API"
      ],
      tags: ["C++", "Windows API", "Memory Analysis", "Diagnostics"]
    }
  ]

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          My Recent <span className="text-primary">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 rounded-lg p-6 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                <div className="text-right text-sm text-gray-400">
                  <p>{project.period}</p>
                  <p>{project.location}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects