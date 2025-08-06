import { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'MongoDB', image: '/mongoDb.png' },
    { name: 'Express', image: '/expressJS.png' },
    { name: 'React', image: '/reactJS.png' },
    { name: 'Node.js', image: '/nodeJS.png' },
    { name: 'Electron', image: '/electronJS.png' },
    { name: 'PostgreSQL', image: '/postgreSQL.png' },
    { name: 'Tailwind CSS', image: '/tailwindCSS.png' },
    { name: 'Solidity', image: '/solidity.png' },
    { name: 'Motoko', image: '/motoko.png' },
    { name: 'Hardhat', image: '/hardhat.png' },
    { name: 'Python', image: '/python.png' },
    { name: 'C++', image: '/c++.png' },
    { name: 'Flask', image: '/flask.png' },
    { name: 'Django', image: '/django.png' },
    { name: 'RESTful APIs', image: '/restAPIS.png' },
    { name: 'MySQL', image: '/mySQL.png' },
    { name: 'Firebase', image: '/firebase.png' },
    { name: 'Git', image: '/git.png' },
    { name: 'GitHub', image: '/github.png' },
    { name: 'Netlify', image: '/netlify.png' },
    { name: 'Vercel', image: '/vercel.png' },
    { name: 'Vite', image: '/vite.png' },
    { name: 'VSCode', image: '/vscode.png' },
    { name: 'Postman', image: '/postman.png' },
    { name: 'Hashing', image: '/hashing.png' },
];

const SkillCarousel = () => {
    const [replicatedSkills] = useState([...skills, ...skills]);

    return (
        <div className="relative overflow-hidden py-6">
            <motion.div
                className="flex w-max space-x-6"
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
                        className="flex-shrink-0 w-36 h-36 text-center  "
                    >
                        <div className="flex glass flex-col items-center justify-center gap-2 h-full p-4 border-[1px] border-gray-300 dark:border-gray-500 rounded-xl bg-white bg-opacity-10 dark:bg-dark-bg dark:bg-opacity-20 backdrop-blur-sm shadow-md">
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-16 h-16 object-contain"
                            />
                            <span className="text-base font-semibold text-dark-primary dark:text-light-primary-text">
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
