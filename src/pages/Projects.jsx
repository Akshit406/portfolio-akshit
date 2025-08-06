import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects from '../lib/utils/projects.json'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 pb-20 md:pb-16 px-4"
    >
      <div className="container mx-auto pt-0 sm:py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-dark-primary dark:text-light-primary-text">
          My Projects
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-dark-secondary dark:text-light-secondary-text">
          Here's a collection of my recent work. Each project represents unique challenges and creative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>

        
      </div>
    </motion.div>
  );
};

export default Projects;