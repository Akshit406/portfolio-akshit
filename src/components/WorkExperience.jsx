import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Python Developer',
    company: 'Sahas',
    period: 'June 2025 – Present (Faridabad, India - Remote)',
    description:
      'Developed an automated phone call system for an NGO, facilitating monthly pre-recorded reminders to over 10,000 migrant workers. Engineered the system using PostgreSQL for data, AWS Lambda for call logic, micro EC2 for database hosting, and Twilio API for call functionality.',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Blockdudes',
    period: 'September 2023 – February 2024 (Faridabad, India)',
    description:
      'Contributed to the full-stack development of decentralized applications (DApps), integrating both frontend and backend components. Implemented and deployed secure smart contracts utilizing Solidity and Hardhat. Built scalable web application features using the MERN stack (MongoDB, Express.js, React, Node.js). Enhanced user experience by seamlessly integrating blockchain functionalities with web interfaces.',
  },
];

const WorkExperience = () => {
  return (
    <div className="relative py-10">
      <div className="absolute left-1/2 top-0 h-full w-1 bg-zinc-200 dark:bg-zinc-700 transform -translate-x-1/2" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`relative mb-12 w-full md:w-1/2 px-4 ${
            index % 2 === 0 ? 'md:pr-10 md:mr-auto text-left' : 'md:pl-10 md:ml-auto text-left'
          }`}
        >
          <div
            className={`absolute top-6 w-5 h-5 rounded-full border-4 border-white dark:border-dark-bg bg-accent-dark dark:bg-accent-light ${
              index % 2 === 0 ? 'right-[-12px]' : 'left-[-12px]'
            }`}
          />

          {/* Experience Card */}
          <div className="bg-white dark:bg-dark-secondary shadow-xl rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-xl font-semibold text-dark-primary dark:text-light-primary mb-1">{exp.title}</h3>
            <p className="text-accent-dark dark:text-accent-light font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkExperience;
