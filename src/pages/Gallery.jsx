import { motion } from 'framer-motion';
import { FiDownload, FiHeart, FiShare2 } from 'react-icons/fi';

const galleryItems = [
  { id: 1, image: "https://picsum.photos/800/600", title: "Code Session", category: "Development" },
  { id: 2, image: "https://picsum.photos/800/600", title: "Blockchain Workshop", category: "Web3" },
  { id: 3, image: "https://picsum.photos/800/600", title: "Team Collaboration", category: "Work" },
  { id: 4, image: "https://picsum.photos/800/600", title: "Hackathon 2023", category: "Event" },
  { id: 5, image: "https://picsum.photos/800/600", title: "Tech Conference", category: "Speaking" },
  { id: 6, image: "https://picsum.photos/800/600", title: "Open Source Day", category: "Community" },
  { id: 7, image: "https://picsum.photos/800/600", title: "UI Design", category: "Design" },
  { id: 8, image: "https://picsum.photos/800/600", title: "Prototyping", category: "Process" },
  { id: 9, image: "https://picsum.photos/800/600", title: "Project Demo", category: "Showcase" },
];

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 pb-20 md:pb-16 px-4"
    >
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-dark-primary dark:text-light-primary">
          Visual Gallery
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-dark-secondary dark:text-light-secondary">
          A collection of moments from my work, events, and creative process.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{item.category}</p>
                <div className="flex space-x-3">
                  <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-accent-light transition-colors">
                    <FiHeart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-accent-light transition-colors">
                    <FiShare2 className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-accent-light transition-colors">
                    <FiDownload className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark font-medium hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors">
            View Full Gallery
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;