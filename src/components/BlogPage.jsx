import { motion } from 'framer-motion';

const BlogPage = ({ post, onBack }) => {
  if (!post) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button 
            onClick={onBack}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Go back to blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation Header */}
      <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-primary text-xl font-bold">
              Samarth Bhatia
            </h1>
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </button>
              <button 
                onClick={onBack}
                className="p-2 text-gray-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                title="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <header className="text-center space-y-6 pb-8 border-b border-gray-800">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                {post.title}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-4 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center gap-2 flex-wrap"
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm text-primary bg-primary/10 rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              
            </header>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-xl border-l-4 border-primary mb-12">
                <p className="text-xl text-gray-300 leading-relaxed font-medium m-0">
                  {post.content.intro}
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-12">
                {post.content.problem}
              </p>

              {/* Sections */}
              {post.content.sections.map((section, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.3 }}
                  className="space-y-8 mb-16"
                >
                  <h2 className="text-3xl font-bold text-primary border-b border-primary/20 pb-4 mb-8">
                    {section.title}
                  </h2>
                  
                  <div className="space-y-6">
                    {section.content.split('\n\n').map((paragraph, pIndex) => {
                      if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                        return (
                          <blockquote key={pIndex} className="border-l-4 border-primary pl-8 py-6 bg-primary/5 rounded-r-xl my-8">
                            <p className="italic text-xl text-primary font-medium m-0 leading-relaxed">
                              {paragraph}
                            </p>
                          </blockquote>
                        );
                      }
                      if (paragraph.includes('•')) {
                        const items = paragraph.split('•').filter(Boolean);
                        return (
                          <ul key={pIndex} className="space-y-4 my-8">
                            {items.map((item, iIndex) => (
                              <li key={iIndex} className="flex items-start gap-4">
                                <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-300 text-lg leading-relaxed">{item.trim()}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={pIndex} className="text-gray-300 leading-relaxed text-lg mb-6">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                  
                  {/* Table */}
                  {section.hasTable && (
                    <div className="my-16">
                      <div className="overflow-hidden rounded-xl border border-primary/20 shadow-2xl">
                        <table className="w-full">
                          <thead className="bg-gradient-to-r from-primary/20 to-primary/10">
                            <tr>
                              <th className="px-8 py-6 text-left text-primary font-bold text-lg">Mode</th>
                              <th className="px-8 py-6 text-left text-primary font-bold text-lg">Time (seconds)</th>
                              <th className="px-8 py-6 text-left text-primary font-bold text-lg">Writes to NVM</th>
                            </tr>
                          </thead>
                          <tbody className="bg-dark/50">
                            {section.tableData.map((row, rowIndex) => (
                              <tr key={rowIndex} className="border-t border-primary/10 hover:bg-primary/5 transition-colors">
                                <td className="px-8 py-6 text-white font-semibold text-lg">{row.mode}</td>
                                <td className="px-8 py-6 text-gray-300 text-lg font-mono">{row.time}</td>
                                <td className="px-8 py-6 text-gray-300 text-lg font-mono">{row.writes}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {section.afterTable && (
                        <div className="mt-12 space-y-6">
                          {section.afterTable.split('\n\n').map((paragraph, pIndex) => {
                            if (paragraph.includes('•')) {
                              const items = paragraph.split('•').filter(Boolean);
                              return (
                                <ul key={pIndex} className="space-y-4">
                                  {items.map((item, iIndex) => (
                                    <li key={iIndex} className="flex items-start gap-4">
                                      <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                      <span className="text-gray-300 text-lg leading-relaxed">{item.trim()}</span>
                                    </li>
                                  ))}
                                </ul>
                              );
                            }
                            return (
                              <p key={pIndex} className="text-gray-300 leading-relaxed text-lg">
                                {paragraph}
                              </p>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* LogStream Link Footer */}
            <motion.footer 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="pt-16 mt-20 border-t border-gray-800"
            >
              <div className="flex flex-col items-center gap-6">
                <a
                  href={post.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 rounded-xl text-primary hover:text-primary/80 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <div className="text-left">
                    <p className="font-bold text-xl">Explore LogStream</p>
                    <p className="text-sm opacity-80">View the complete implementation on GitHub</p>
                  </div>
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                {/* Close Button */}
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/10 group"
                >
                  <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to Blog List</span>
                </button>
              </div>
            </motion.footer>
          </motion.article>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;