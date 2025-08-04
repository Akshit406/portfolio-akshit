import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Python Developer',
    company: 'Sahas',
    period: 'June 2025 – Present (Faridabad, India - Remote)',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Built an automated calling system to deliver monthly reminders to 10,000+ migrant workers.</li>
        <li>Used AWS Lambda and Twilio for serverless call workflows.</li>
        <li>Managed recipient data securely via PostgreSQL hosted on a micro EC2 instance.</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Blockdudes',
    period: 'September 2023 – February 2024 (Faridabad, India)',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Developed and deployed smart contracts using Solidity and Hardhat.</li>
        <li>Built responsive React.js frontends with wallet integration via Ethers.js.</li>
        <li>Connected IPFS-based NFT metadata to backend APIs built with Node.js + Express.</li>
      </ul>
    ),
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
            {exp.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkExperience;
