import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';
import BlogPage from './BlogPage';

const Blog = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'post'
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Cache me before it's time: How LogStream rewrites the rules of NVM Logging",
      excerpt: "Non Volatile Memory is like Harry Maguire - full of potential but extremely unpredictable under pressure. Here's how LogStream changes the game...",
      date: "May 2025",
      readTime: "8 min read",
      tags: ["Systems Programming", "Memory Management", "Performance"],
      githubUrl: "https://github.com/SamarthBhatia/LogStream",
      content: {
        intro: "Non Volatile Memory is like Harry Maguire - full of potential but extremely unpredictable under pressure(Sorry non-football fans). Sure emerging NVMs like PCM, ReRAM, STT-RAM promises to remember everything, even after a power cut, but getting it to log things efficiently, that is the digital equivalent of herding cattle in some really difficult mountain terrain.",
        problem: "Part of the problem lies not in the NVM itself, but in the CPU cache, the overenthusiastic middleman, which receives data from the CPU Registers. While we rely on NVM for durability, the CPU cache often acts like a clueless intern: eager to help but unaware of the bigger picture. It may delay, reorder, or even drop writes before they reach the NVM, completely ignoring the concept of persistence. So when we naively trust the cache to handle writes reliably, we're essentially sabotaging the very durability that NVMs were meant to guarantee.",
        sections: [
          {
            title: "1. The Problem: Logging to NVM is a Hot Mess",
            content: "You want to update something, maybe like a document stored in the NVM? Multiple writes are required, consuming bandwidth and adding to latency. To ensure data is safely stored, each write is forced out of the cache, which is called a cache flush, further slowing things down. For example, simple undo-logging may perform two writes per update (old value and marker). To ensure a consistent log, pipeline flushes and stalls are introduced.\n\nWhat's the outcome bro? A sad CPU, tired NVM, and a performance chart that looks like a ski slope. The cost? High energy use, worn-out memory cells, and endless latency.\n\nThese traditional Logging Mechanisms are somewhat like attacking in Football with a wrong formation, you keep on attacking, lose energy and speed but you are able to score if you have the ability."
          },
          {
            title: "2. Damn bro there's a Solution: Using Cache Coherence Like a Pro",
            content: "\"Why not piggyback on the CPU's own cache coherence protocol to figure out when data is safely in NVM?\"\n\nThe idea, courtesy of Cohen et al. (OOPSLA 2017), is pure elegance.\n\nIn simpler words, why not use the fact that the CPU already knows when a cache line is evicted? The CPU follows a Cache Coherency Protocol that ensures consistency across its cores. So when a cache line is evicted, the CPU writes it back to memory. If that memory is non-volatile (like NVM), the data is safely stored. We can make this even better with a simple trick: write a small 'validity bit' at the end, after writing all the real data. Then, we only flush this bit. Because the CPU writes the real data parts in order, if the bit is in NVM, everything before it is too. This means we only need one flush to make a log entry safe — fast and easy. Think of this like a box of clothes(cache lines) closed with a tape(validity bit)."
          },
          {
            title: "3. LogStream into Action Finally:",
            content: "Instead of flushing everything like a nervous intern triple-checking an email, LogStream uses the cache's own store-order guarantees and a smart little trick: the validity bit. Built in C++, LogStream is a fully-loaded simulation platform featuring:\n\n• Separate Regions for DRAM and NVM because not all memory created is equal.\n• A custom MESI Cache Coherence Protocol Engine.\n• Multi-threaded logging chaos, beautifully orchestrated. Even though many threads are logging at once which can be quite messy, LogStream makes it work smoothly, like a well-run orchestra playing in perfect sync."
          },
          {
            title: "4. The Results: Less Flushing, More Thrushing:",
            content: "Now we'll talk data, the language that all memory systems understand.",
            hasTable: true,
            tableData: [
              { mode: "Traditional Logging", time: "0.45", writes: "1,000,000" },
              { mode: "LogStream", time: "0.25", writes: "500,000" }
            ],
            afterTable: "LogStream slashes writes by half and speeds things up by ~44%. It's like upgrading your log from a Fiat Punto to a Honda Civic.\n\nSo, apart from reduction in number of writes and speeds, what other benefits do we see?\n\n• Energy Savings: Fewer writes === Less Juice Used\n Yeah I did JavaScript too for a while, sadly :)\n\n• NVM Cells would live longer.\n\n• New Paradigms: Using existing hardware protocols for persistence is the software equivalent of finding money in your coat pocket."
          },
          {
            title: "5. Bonus Thoughts, If You are not yawning already:",
            content: "LogStream isn't just a tool. It's a mindset shift: less brute-force logging, more clever coherence. It points toward a future where persistence doesn't come at the cost of performance.\n\nSo next time someone tells you cache coherence is boring, show them LogStream. And maybe, just maybe, they'll stop flushing so much.\n\nPs: I don't have a personal problem with interns, but is the non appealing font on Instagram profile a work done by some talented intern? :)"
          }
        ]
      },
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setCurrentView('post');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedPost(null);
  };

  // If viewing a blog post, show the full page
  if (currentView === 'post') {
    return <BlogPage post={selectedPost} onBack={handleBackToList} />;
  }

  // Otherwise show the blog list
  return (
    <section id="blog" className="relative py-16">
      <SectionBackground variant="2" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold flex items-center gap-4 mb-12"
            variants={cardVariants}
          >
            My <span className="text-primary">Blog</span>
            <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
          </motion.h2>

          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                className="group cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className={`rounded-2xl overflow-hidden bg-gradient-to-r ${post.gradient} p-1 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="bg-dark rounded-xl p-8 h-full">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm text-gray-400">{post.date}</span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-400">{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        
                        {/* Note about GitHub link - removed the direct link to prevent conflicts */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-2 text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            <span className="text-sm font-medium">Click to read the full blog post</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg 
                          className="w-8 h-8 text-primary transform group-hover:translate-x-2 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;