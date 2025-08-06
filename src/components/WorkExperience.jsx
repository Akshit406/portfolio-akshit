import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Python Developer',
    company: 'Sahas',
    period: 'June 2025 – Present (Bangalore, India - Remote)',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Designed and implemented a cloud-native automated call system to deliver monthly reminders to over 10,000 migrant workers, improving outreach efficiency for an NGO initiative.</li>
        <li>Developed a fault-tolerant AWS Lambda workflow triggered by EventBridge, fetching pending call records from PostgreSQL and marking them as "in progress" before initiating outbound calls.</li>
        <li>Integrated Plivo’s voice API to place calls and handle asynchronous callbacks via API Gateway and Lambda, dynamically updating call statuses based on real-time delivery feedback (success, no answer/busy, or permanent failure)</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Blockdudes',
    period: 'September 2024 – February 2025 (Faridabad, India)',
    description: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Collaborated with the team on the Alchemix website, contributing to both frontend and backend development, including responsive UI in React.js/Tailwind CSS and server-side logic in Node.js/Express.</li>
        <li>Built and deployed ERC-20 and ERC-721 tokens using Solidity and Hardhat, gaining hands-on experience in token standards, smart contract design, and gas optimization.</li>
        <li>Integrated Ethers.js to enable wallet connectivity, real-time on-chain data retrieval, and seamless smart contract interactions across the dApp.</li>
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
