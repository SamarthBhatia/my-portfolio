// src/components/Projects.jsx
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const Projects = () => {
  const projects = [
    
    {
      title: "Qupiler",
      period: "Apr 2025",
      location: "Milan, Italy",
      description: "C-to-Quantum Circuit Compiler emitting QMLIR and Qiskit",
      githubUrl: "https://github.com/SamarthBhatia/Qupiler",
      points: [
        "Engineered a compiler pipeline that parses C-style JSON AST and emits gate-level QMLIR & Qiskit circuits",
        "Unified classical arithmetic, dynamic qubit allocation, and core quantum ops in an extensible IR",
        "Designed modular backend/dialect framework supporting custom quantum logic and optimizations",
        "Integrated optimizations: constant folding, gate fusion, commutation reordering, and T-count reduction"
      ],
      tags: ["Quantum Computing", "Compiler Design", "Qiskit", "xDSL", "MLIR"],
      gradient: "from-[#F6AD55] to-[#ED8936]"
    },
    {
      title: "Flowatch",
      period: "Mar 2025",
      location: "Delhi, India",
      description: "Intelligent firewall with dynamic traffic analysis and low overhead",
      githubUrl: "https://github.com/SamarthBhatia/Flowatch",
      points: [
        "Built a C++ network firewall that filters malicious connections with 95% accuracy and <5% CPU usage",
        "Designed intelligent app-behavior analysis reducing false positives by 75% over traditional firewalls",
        "Implemented modular packet inspection and logging subsystems with real-time alerting"
      ],
      tags: ["C++", "Network Security", "Firewall", "Traffic Analysis"],
      gradient: "from-[#F687B3] to-[#D53F8C]"
    },
    {
      title: "MercuryTrade",
      period: "Nov 2024",
      location: "Milan, Italy",
      description: "High-performance trading platform with custom memory allocator",
      githubUrl: "https://github.com/SamarthBhatia/mercuryTrade/tree/develop",
      points: [
        "Designed a custom lock-free memory allocator achieving <500ns allocation latencies",
        "Engineered an order book management system with thread-safe concurrent access",
        "Developed a real-time trading platform with atomic operations and WebSocket streams"
      ],
      tags: ["C++", "Memory Management", "Concurrent Programming", "WebSockets"],
      gradient: "from-[#63B3ED] to-[#4299E1]"
    }
  ];

  return (
    <section id="projects" className="relative py-16">
      <SectionBackground variant="2" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold flex items-center gap-4 mb-12"
          >
            My Recent <span className="text-primary">Works</span>
            <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-primary/20 bg-[#1E2A3A] overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-primary">
                        {project.title}
                      </h3>
                      <div className="text-right text-sm text-gray-400">
                        <p>{project.period}</p>
                        <p>{project.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg">
                      {project.description}
                    </p>

                    <ul className="space-y-3 text-gray-400">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm text-primary bg-[#1A2634] rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;