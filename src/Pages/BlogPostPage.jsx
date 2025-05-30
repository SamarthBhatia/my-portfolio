import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogPostBySlug } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
            Go back to home
          </Link>
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
            <Link to="/" className="text-primary text-xl font-bold hover:text-primary/80 transition-colors">
              Samarth Bhatia
            </Link>
            <Link 
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
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
              transition={{ delay: 0.8 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-xl border-l-4 border-primary mb-8">
                <p className="text-xl text-gray-300 leading-relaxed font-medium m-0">
                  {post.content.intro}
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                {post.content.problem}
              </p>

              {/* Sections */}
              {post.content.sections.map((section, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="space-y-6 mt-12"
                >
                  <h2 className="text-3xl font-bold text-primary border-b border-primary/20 pb-3">
                    {section.title}
                  </h2>
                  
                  <div className="space-y-6">
                    {section.content.split('\n\n').map((paragraph, pIndex) => {
                      if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                        return (
                          <blockquote key={pIndex} className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                            <p className="italic text-xl text-primary font-medium m-0">
                              {paragraph}
                            </p>
                          </blockquote>
                        );
                      }
                      if (paragraph.includes('•')) {
                        const items = paragraph.split('•').filter(Boolean);
                        return (
                          <ul key={pIndex} className="space-y-3 my-6">
                            {items.map((item, iIndex) => (
                              <li key={iIndex} className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
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
                  
                  {/* Table */}
                  {section.hasTable && (
                    <div className="my-12">
                      <div className="overflow-hidden rounded-xl border border-primary/20 shadow-2xl">
                        <table className="w-full">
                          <thead className="bg-gradient-to-r from-primary/20 to-primary/10">
                            <tr>
                              <th className="px-6 py-4 text-left text-primary font-bold text-lg">Mode</th>
                              <th className="px-6 py-4 text-left text-primary font-bold text-lg">Time(s)</th>
                              <th className="px-6 py-4 text-left text-primary font-bold text-lg">Writes to NVM</th>
                            </tr>
                          </thead>
                          <tbody className="bg-dark/50">
                            {section.tableData.map((row, rowIndex) => (
                              <tr key={rowIndex} className="border-t border-primary/10 hover:bg-primary/5 transition-colors">
                                <td className="px-6 py-4 text-white font-semibold text-lg">{row.mode}</td>
                                <td className="px-6 py-4 text-gray-300 text-lg">{row.time}</td>
                                <td className="px-6 py-4 text-gray-300 text-lg">{row.writes}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {section.afterTable && (
                        <div className="mt-8 space-y-6">
                          {section.afterTable.split('\n\n').map((paragraph, pIndex) => {
                            if (paragraph.includes('•')) {
                              const items = paragraph.split('•').filter(Boolean);
                              return (
                                <ul key={pIndex} className="space-y-3">
                                  {items.map((item, iIndex) => (
                                    <li key={iIndex} className="flex items-start gap-3">
                                      <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
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

            {/* Footer */}
            <motion.footer 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="pt-12 mt-16 border-t border-gray-800"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">SB</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Samarth Bhatia</p>
                    <p className="text-gray-400 text-sm">Systems Developer & Full Stack Engineer</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="https://github.com/SamarthBhatia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/samarthbhatia89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.footer>
          </motion.article>
        </div>
      </main>
    </div>
  );
};

export default BlogPostPage;