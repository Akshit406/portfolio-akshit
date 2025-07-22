import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, delay }) => {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white glass dark:bg-dark-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-gray/20 transition-shadow border-[1px] border-opacity-[40%] border-gray-600 dark:border-gray-700 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2 z-20"> 
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 border border-solid border-gray-300 backdrop-blur-md hover:bg-accent-light dark:hover:bg-accent-dark transition-colors"
              title="View on GitHub"
            >
              <FiGithub className="w-5 h-5 text-gray-500" />
            </a>
          )}

          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/50 border border-solid border-gray-300 backdrop-blur-md hover:bg-accent-light dark:hover:bg-accent-dark transition-colors"
              title="View Live Demo"
            >
              <FiExternalLink className="w-5 h-5 text-gray-500" />
            </a>
          ) : (
            <span
              className="p-2 rounded-full bg-white/30 backdrop-blur-md transition-colors cursor-not-allowed relative group"
              title="Work in progress"
            >
              <FiExternalLink className="w-5 h-5 text-gray-500" />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                Work in Progress
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-dark-primary dark:text-light-primary">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project?.technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;