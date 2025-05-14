import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Decentralized Art Marketplace",
    description: "A blockchain-based platform for artists to mint and sell digital artwork as NFTs with royalty tracking.",
    image: "https://picsum.photos/600/400",
    category: "Web3",
    technologies: ["Solidity", "React", "IPFS", "Hardhat"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "AI Content Moderator",
    description: "Machine learning system that automatically filters inappropriate content using natural language processing.",
    image: "https://picsum.photos/600/400",
    category: "AI",
    technologies: ["Python", "TensorFlow", "Flask", "NLTK"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Health Tracker Dashboard",
    description: "Interactive dashboard for tracking fitness metrics with data visualization and personalized recommendations.",
    image: "https://picsum.photos/600/400",
    category: "Web App",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Smart Home Controller",
    description: "Mobile app for managing IoT devices with voice control integration and automation scenarios.",
    image: "https://picsum.photos/600/400",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "MQTT", "AWS IoT"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "E-commerce Analytics",
    description: "Real-time sales analytics platform with predictive modeling for inventory management.",
    image: "https://picsum.photos/600/400",
    category: "Data",
    technologies: ["Python", "Pandas", "Tableau", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "AR Furniture Preview",
    description: "Augmented reality application that lets users visualize furniture in their space before purchasing.",
    image: "https://picsum.photos/600/400",
    category: "AR",
    technologies: ["Unity", "ARKit", "Swift", "Firebase"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 pb-20 md:pb-16 px-4"
    >
      <div className="container mx-auto pt-0 sm:py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-dark-primary dark:text-light-primary">
          My Projects
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-dark-secondary dark:text-light-secondary">
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