export const blogPosts = {
  'cache-me-before-its-time': {
    id: 1,
    slug: 'cache-me-before-its-time',
    title: "Cache me before it's time: How LogStream rewrites the rules of NVM Logging",
    excerpt: "Non Volatile Memory is like Harry Maguire - full of potential but extremely unpredictable under pressure. Here's how LogStream changes the game...",
    date: "December 2024",
    readTime: "8 min read",
    tags: ["Systems Programming", "Memory Management", "Performance"],
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
          afterTable: "LogStream slashes writes by half and speeds things up by ~44%. It's like upgrading your log from a Fiat Punto to a Honda Civic.\n\nSo, apart from reduction in number of writes and speeds, what other benefits do we see?\n\n• Energy Savings: Fewer writes === Less Juice Used\nYeah I did JavaScript too for a while, sadly :)\n\n• NVM Cells would live longer.\n\n• New Paradigms: Using existing hardware protocols for persistence is the software equivalent of finding money in your coat pocket."
        },
        {
          title: "5. Bonus Thoughts, If You are not yawning already:",
          content: "LogStream isn't just a tool. It's a mindset shift: less brute-force logging, more clever coherence. It points toward a future where persistence doesn't come at the cost of performance.\n\nSo next time someone tells you cache coherence is boring, show them LogStream. And maybe, just maybe, they'll stop flushing so much.\n\nPs: I don't have a personal problem with interns, but is the non appealing font on Instagram profile a work done by some talented intern? :)"
        }
      ]
    },
    gradient: "from-purple-500/20 to-pink-500/20"
  }
};

export const getBlogPostBySlug = (slug) => {
  return blogPosts[slug] || null;
};

export const getAllBlogPosts = () => {
  return Object.values(blogPosts);
};