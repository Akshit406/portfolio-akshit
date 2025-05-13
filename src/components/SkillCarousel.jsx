import { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚂' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Photon', icon: '📸' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Solidity', icon: 'Ξ' },
  { name: 'Motoko', icon: '🦌' },
  { name: 'Hardhat', icon: '⛑️' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '➕➕' },
  { name: 'Flask', icon: '🍶' },
  { name: 'Django', icon: '🎸' },
  { name: 'RESTful APIs', icon: '🔌' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Git', icon: '🐙' },
  { name: 'GitHub', icon: '🐱' },
  { name: 'Netlify', icon: '🕸️' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Photon.js', icon: '⚡' },
  { name: 'Vite', icon: '⚡' },
  { name: 'VSCode', icon: '💻' },
  { name: 'Postman', icon: '📬' },
  { name: 'Hashing', icon: '🔐' },
];

const SkillCarousel = () => {
  const [replicatedSkills] = useState([...skills, ...skills]);

  return (
    <div className="relative overflow-hidden py-6">
      <motion.div
        className="flex w-max space-x-0"
        animate={{
          x: ['0%', '-20%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {replicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-36 h-36 text-center"
          >
            <div className="flex glass flex-col items-center justify-center gap-2 h-full p-4 border-[1px] border-gray-300 dark:border-gray-500 rounded-xl bg-white bg-opacity-20 dark:bg-dark-bg dark:bg-opacity-20 backdrop-blur-md shadow-md">
              <span className="text-5xl">{skill.icon}</span>
              <span className="text-base font-semibold text-dark-primary dark:text-light-primary">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCarousel;
