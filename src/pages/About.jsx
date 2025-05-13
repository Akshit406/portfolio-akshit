import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';

const skills = [
  { name: "Frontend Development", level: 90, icon: <FiLayers className="w-6 h-6" /> },
  { name: "Backend Development", level: 85, icon: <FiDatabase className="w-6 h-6" /> },
  { name: "Blockchain/Smart Contracts", level: 80, icon: <FiCode className="w-6 h-6" /> },
  { name: "UI/UX Design", level: 75, icon: <FiCpu className="w-6 h-6" /> },
  { name: "DevOps & Deployment", level: 70, icon: <FiAward className="w-6 h-6" /> }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 pb-20 md:pb-16 px-4"
    >
      <div className="container mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-dark-primary dark:text-light-primary">
              About Me
            </h1>
            <div className="space-y-6 text-dark-secondary dark:text-light-secondary">
              <p className="text-lg">
                Hello! I'm Akshit Saxena, a Full-Stack Developer specializing in building exceptional digital experiences and decentralized applications.
              </p>
              <p>
                With over 3 years of experience in web development, I've worked with startups and established companies to build scalable, performant applications that users love.
              </p>
              <p>
                My journey in tech began when I built my first website at 16. Since then, I've immersed myself in everything from React ecosystems to smart contract development on Ethereum.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new technologies in the Web3 space.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-dark-primary dark:text-light-primary">
                My Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-1">
                      <span className="mr-3 text-accent-light dark:text-accent-dark">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-dark-primary dark:text-light-primary">
                        {skill.name}
                      </span>
                      <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-accent-light dark:bg-accent-dark h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-dark-primary dark:text-light-primary">
                Professional Timeline
              </h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-accent-light dark:border-accent-dark">
                  <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-accent-light dark:bg-accent-dark"></div>
                  <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-white dark:bg-dark-primary"></div>
                  <h3 className="text-xl font-bold text-dark-primary dark:text-light-primary">
                    Full Stack Developer @ Blockdudes
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Dec 2023 - Present
                  </p>
                  <p className="text-dark-secondary dark:text-light-secondary">
                    Led frontend architecture decisions, implemented Web3 integrations, and mentored junior developers.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-600">
                  <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-500"></div>
                  <h3 className="text-xl font-bold text-dark-primary dark:text-light-primary">
                    Freelance Web Developer
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Jan 2022 - Nov 2023
                  </p>
                  <p className="text-dark-secondary dark:text-light-secondary">
                    Built custom solutions for clients across industries, from e-commerce platforms to SaaS applications.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-600">
                  <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-500"></div>
                  <h3 className="text-xl font-bold text-dark-primary dark:text-light-primary">
                    Computer Science Degree
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    2018 - 2022
                  </p>
                  <p className="text-dark-secondary dark:text-light-secondary">
                    Graduated with honors while working on side projects and open-source contributions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-dark-primary dark:text-light-primary">
                Get In Touch
              </h2>
              <p className="mb-6 text-dark-secondary dark:text-light-secondary">
                Interested in working together or have questions about my work? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <button className="px-6 py-3 rounded-full bg-accent-light dark:bg-accent-dark text-white font-medium hover:opacity-90 transition-opacity">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;