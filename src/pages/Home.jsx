import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import LoadingScreen from '../components/LoadingScreen';
import ProjectCard from '../components/ProjectCard';
import SkillCarousel from '../components/SkillCarousel';
import WorkExperience from '../components/WorkExperience';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
  }
  ];

  return (
    <>
      
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="pt-16 pb-20 md:pb-16"
      >
        {/* Hero Section */}
        <section className="container mx-auto px-8 py-12 md:py-24 md:px-4 flex flex-col md:flex-row items-center">
          <motion.div variants={fadeInLeft} className="md:w-1/2 mb-8 md:mb-0 lg:ml-[40px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-dark-primary dark:text-light-primary">
              Building seamless digital experiences and forging trust in decentralized systems
            </h2>
            <p className="text-md md:text-lg font-normal mb-0 mt-2 text-dark-secondary dark:text-light-secondary">
              Hey! I'm Akshit Saxena—Full-Stack Web Developer, DApp Builder, and Python Enthusiast. I craft seamless web experiences and trust-driven decentralized systems, blending creativity, efficiency, and cutting-edge tech to solve real-world challenges. 🚀
            </p>
          </motion.div>
          <motion.div
            variants={scaleFade}
            className="md:w-1/2 h-100 w-[100vw] sm:h-60 h-[40vh] mt-0 md:h-96 lg:ml-[-50px] "
          >
            <Spline scene="https://prod.spline.design/r0v2dxnLnPogbbRY/scene.splinecode" />
          </motion.div>
        </section>

        {/* Projects Section */}
        <motion.section variants={containerVariants} className="container md:px-4 mx-auto px-8 sm:px-6 py-12">
          <motion.h2 variants={fadeInLeft} className="text-3xl font-bold mb-8 text-center text-dark-primary dark:text-light-primary">
            Recent Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={fadeInLeft}>
                <ProjectCard project={project} delay={index * 0.1} />
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInLeft} className="text-center mt-8">
            <button className="px-6 py-3 rounded-full bg-accent-light dark:bg-accent-dark text-black dark:text-white font-medium
                              hover:opacity-90 transition-opacity
                              bg-white/10 backdrop-blur-md
                              border border-white/20
                              shadow-lg
                              hover:scale-105
                              hover:bg-white/20
                                dark:hover:bg-accent-dark">
              View More Projects
            </button>
          </motion.div>



        </motion.section>

        {/* Skills Section */}
        <motion.section variants={containerVariants} className=" px-8 py-12">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInLeft}
              className="text-3xl font-bold mb-4 text-center text-dark-primary dark:text-light-primary"
            >
              Skills
            </motion.h2>
            <motion.div variants={fadeInLeft} className=" p-6">
              <SkillCarousel />
            </motion.div>
          </div>
        </motion.section>


        {/* Work Experience */}
        <motion.section variants={containerVariants} className="container mx-auto md:px-4 px-8 py-12">
          <motion.h2 variants={fadeInLeft} className="text-3xl font-bold mb-8 text-center text-dark-primary dark:text-light-primary">
            Work Experience
          </motion.h2>
          <motion.div variants={fadeInLeft}>
            <WorkExperience />
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default Home;
