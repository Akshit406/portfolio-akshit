import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi'; 

const skills = [
  { name: "Frontend Development", level: 90, icon: <FiLayers className="w-6 h-6" /> },
  { name: "Backend Development", level: 95, icon: <FiDatabase className="w-6 h-6" /> },
  { name: "Blockchain/Smart Contracts", level: 80, icon: <FiCode className="w-6 h-6" /> },
  { name: "UI/UX Design", level: 75, icon: <FiCpu className="w-6 h-6" /> }, 
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 pb-20 md:pb-16 px-4"
    >
      <div className="container mx-auto pt-0 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-12">

       
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-dark-primary dark:text-light-primary-text">
              About Me
            </h1>
            <div className="space-y-6 text-dark-secondary dark:text-light-secondary-text">
              <p className="text-base">
                I'm a highly motivated and results-oriented Full-Stack Developer with a passion for architecting and implementing robust, user-centric web applications, including advanced decentralized applications (DApps). My expertise lies in translating complex requirements into elegant, efficient, and scalable solutions.
              </p>
              <p className="text-base">
                My comprehensive technical skill set encompasses the MERN stack (MongoDB, Express.js, React, Node.js), complemented by foundational knowledge of Redis for data handling. I am adept in multiple programming languages, including JavaScript, Python, Java, and C++ Language, enabling me to navigate diverse development environments and frameworks. Furthermore, I possess in-depth knowledge of blockchain technologies, specifically Solidity for smart contract development and Hardhat for efficient DApp development and testing.
              </p>
              <p className="text-base">
                Beyond my strong technical foundation, I bring a keen eye for design and user experience to my development work. Proficient in Adobe Illustrator and Figma, I excel at creating intuitive and aesthetically pleasing user interfaces. This blend of technical proficiency and design sensibility allows me to deliver holistic solutions that are not only functionally superior but also visually compelling and user-friendly, ensuring a seamless and engaging digital experience.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-dark-primary dark:text-light-primary-text">
                My Skills
              </h2>
              <div className="space-y-4 text-dark-secondary dark:text-light-secondary-text">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-primary dark:text-light-primary-text">Programming Languages:</h3>
                  <p className="text-base">JavaScript, Python, Solidity, Java, C++ Language</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-primary dark:text-light-primary-text">Web Technologies:</h3>
                  <p className="text-base">HTML/CSS, React.js, Node.js, Express.js</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-primary dark:text-light-primary-text">Databases & Data Stores:</h3>
                  <p className="text-base">MongoDB, Redis</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-primary dark:text-light-primary-text">Blockchain:</h3>
                  <p className="text-base">Hardhat, Blockchain Technologies</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-primary dark:text-light-primary-text">Tools & Version Control:</h3>
                  <p className="text-base">Git, GitHub, VS Code</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-primary dark:text-light-primary-text">Soft Skills:</h3>
                  <p className="text-base">Problem-Solving, Teamwork/Collaboration, Communication Skills</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-primary dark:text-light-primary-text">Design Tools:</h3>
                  <p className="text-base">Adobe Illustrator, Figma</p>
                </div>
              </div>
            </div>
          </div>

      
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-xl mb-8"> 
             
              <div className="flex justify-center mb-6">
                <img
                  src="./AkshitPFP.png" 
                  alt="Akshit Saxena"
                  className="w-80 h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" 
                />
              </div>

              {/* Resume Button */}
              <a
              href='https://docs.google.com/document/d/1GfL8exO21MPB2Og2uUSsP5dB1t1941iv/edit?usp=sharing&ouid=105960646403903531778&rtpof=true&sd=true'
                className="px-6 py-3 rounded-full bg-accent-dark dark:bg-accent-light text-white dark:text-black font-medium hover:opacity-90 transition-opacity flex items-center justify-center mb-4"
              >
                <FiAward className="mr-2" /> Resume
              </a>

              {/* Contact Details */}
              <div className="space-y-2 text-dark-secondary dark:text-light-secondary-text text-sm">
                <p className="flex items-center">
                  <span className="mr-2 text-accent-light dark:text-accent-dark">📞</span>
                  <a href="tel:+919599434696" className="hover:underline">+91 9599434696</a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2 text-accent-light dark:text-accent-dark">📧</span>
                  <a href="mailto:akshitsaxena450@gmail.com" className="hover:underline">akshitsaxena450@gmail.com</a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2 text-accent-light dark:text-accent-dark">📍</span>
                  Faridabad, India
                </p>
              
              </div>
            </div>

            {/* Professional Timeline */}
            <div className="bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-xl"> 
              <h2 className="text-2xl font-bold mb-6 text-dark-primary dark:text-light-primary-text">
                Professional Timeline
              </h2>
              <div className="space-y-8 ">
                {/* Sahas Internship */}
                <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"> 
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent-dark dark:bg-accent-light flex items-center justify-center text-white text-xs font-bold"></div> 
                  <h3 className="text-xl font-bold text-dark-primary dark:text-light-primary-text">
                    Python Developer @ Sahas
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    June 2025 - Present (Faridabad, India - Remote)
                  </p>
                  <ul className="list-disc list-inside text-dark-secondary dark:text-light-secondary-text space-y-1 text-sm">
                    <li>Developed an automated phone call system for an NGO, facilitating monthly pre-recorded reminders to over 10,000 migrant workers.</li>
                    <li>Engineered the system using PostgreSQL for data, AWS Lambda for call logic, micro EC2 for database hosting, and Twilio API for call functionality.</li>
                  </ul>
                </div>

                {/* Blockdudes Internship */}
                <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"> 
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent-dark dark:bg-accent-light flex items-center justify-center text-white text-xs font-bold"></div> 
                  <h3 className="text-xl font-bold text-dark-primary dark:text-light-primary-text">
                    Fullstack Developer @ Blockdudes
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    September 2023 - February 2024 (Faridabad, India)
                  </p>
                  <ul className="list-disc list-inside text-dark-secondary dark:text-light-secondary-text space-y-1 text-sm">
                    <li>Contributed to the full-stack development of decentralized applications (DApps), integrating both frontend and backend components.</li>
                    <li>Implemented and deployed secure smart contracts utilizing Solidity and Hardhat.</li>
                    <li>Built scalable web application features using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
                    <li>Enhanced user experience by seamlessly integrating blockchain functionalities with web interfaces.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
