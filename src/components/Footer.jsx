import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-primary dark:text-light-primary mb-4 md:mb-0">
            © {new Date().getFullYear()} Akshit Saxena. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Akshit406" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-primary dark:text-light-primary hover:text-accent-dark dark:hover:text-accent-light transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/akshit-saxena-48a496248/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-primary dark:text-light-primary hover:text-accent-dark dark:hover:text-accent-light transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/Akshitsaxena450" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-primary dark:text-light-primary hover:text-accent-dark dark:hover:text-accent-light transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;