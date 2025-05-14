import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiBookmark } from 'react-icons/fi';

const blogs = [
  {
    id: 1,
    title: "The Future of Web3 Development",
    excerpt: "Exploring the emerging trends and technologies shaping decentralized applications in 2024.",
    image: "https://picsum.photos/800/600",
    date: "May 15, 2024",
    readTime: "8 min read",
    tags: ["Web3", "Blockchain", "Development"]
  },
  {
    id: 2,
    title: "Optimizing React Performance",
    excerpt: "Practical techniques to improve rendering performance in large-scale React applications.",
    image: "https://picsum.photos/800/600",
    date: "April 28, 2024",
    readTime: "12 min read",
    tags: ["React", "Performance", "Frontend"]
  },
  {
    id: 3,
    title: "Building Secure Smart Contracts",
    excerpt: "Best practices for writing secure and gas-efficient Solidity code with real-world examples.",
    image: "https://picsum.photos/800/600",
    date: "March 10, 2024",
    readTime: "15 min read",
    tags: ["Solidity", "Security", "Smart Contracts"]
  },
  {
    id: 4,
    title: "CSS Architecture for Scale",
    excerpt: "How we implemented a maintainable CSS architecture for our design system at Blockdudes.",
    image: "https://picsum.photos/800/600",
    date: "February 22, 2024",
    readTime: "10 min read",
    tags: ["CSS", "Design Systems", "Frontend"]
  },
  {
    id: 5,
    title: "Python for Data Engineering",
    excerpt: "Comparing Pandas, Polars, and PySpark for different data processing workloads.",
    image: "https://picsum.photos/800/600",
    date: "January 5, 2024",
    readTime: "14 min read",
    tags: ["Python", "Data", "Engineering"]
  },
  {
    id: 6,
    title: "DevOps for Small Teams",
    excerpt: "Implementing CI/CD pipelines on a budget with GitHub Actions and Docker.",
    image: "https://picsum.photos/800/600",
    date: "December 18, 2023",
    readTime: "9 min read",
    tags: ["DevOps", "CI/CD", "Docker"]
  }
];

const Blogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 pb-20  md:pb-16 px-4"
    >
      <div className="container pt-0 mx-auto sm:py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-dark-primary dark:text-light-primary">
          My Blog
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-dark-secondary dark:text-light-secondary">
          Thoughts, tutorials, and insights about web development, blockchain, and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: blog.id * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-[1px] border-opacity-[40%] border-gray-600 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-accent-light dark:hover:bg-accent-dark transition-colors">
                  <FiBookmark className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <FiCalendar className="mr-2" />
                  <span className="mr-4">{blog.date}</span>
                  <FiClock className="mr-2" />
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark-primary dark:text-light-primary">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </motion.div>
  );
};

export default Blogs;