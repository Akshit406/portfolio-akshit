import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Blockdudes',
    period: 'December 2023 – April 2024 (4 months)',
    description: 'Revamped the company website, gained knowledge about token creation, and contributed to Web3 infrastructure improvements.',
  },
];

const WorkExperience = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-1 bg-accent-light dark:bg-accent-dark transform -translate-x-1/2"></div>
      
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`relative mb-8 w-full md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
        >
          <div className="p-6 bg-white dark:bg-dark-secondary rounded-lg shadow-md relative">
            <div className={`absolute top-4 ${index % 2 === 0 ? '-right-2' : '-left-2'} w-4 h-4 bg-accent-light dark:bg-accent-dark rounded-full`}></div>
            <h3 className="text-xl font-bold text-dark-primary dark:text-light-primary">{exp.title}</h3>
            <p className="text-accent-light dark:text-accent-dark font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkExperience;