import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiCode, FiBook, FiImage, FiHome } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';
import TimeDisplay from './TimeDisplay';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed w-full bg-none z-10 ${isMobile ? 'bottom-0' : 'top-0'}`}>
      <div className={`flex ${isMobile ? 'flex-row' : 'flex-row'} items-center justify-between p-4`}>
        <div className='fixed right-4 top-4 text-black glass'>{isMobile && <TimeDisplay />}</div>
        <div className='fixed left-4 top-3 text-black glass'>{isMobile && (<Link to="/" className="flex items-center"><img className="w-8 h-8 rounded-full" src='https://avatars.githubusercontent.com/u/87021091?v=4'/></Link>)}</div>

        {!isMobile && (
          <Link to="/" className="flex items-center">
            <img 
              src="https://avatars.githubusercontent.com/u/87021091?v=4" 
              alt="Logo" 
              className="w-8 h-8 rounded-full"
            />
          </Link>
        )}

      {!isMobile && (
        <div className="flex items-center text-sm space-x-4 px-6 py-2 rounded-full bg-white dark:bg-dark-secondary bg-opacity-50 dark:bg-opacity-40 shadow-md dark:border-white/10 border border-black/10 backdrop-blur-md glass">
          <Link to="/about" className="flex items-center gap-2 text-dark-primary dark:text-light-primary hover:text-accent-dark dark:hover:text-accent-light transition-colors font-bold">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            About
          </Link>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div> 
          <Link to="/projects" className="flex items-center gap-2 text-dark-primary dark:text-light-primary hover:text-accent-dark dark:hover:text-accent-light transition-colors font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            Projects
          </Link>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
          <Link to="/blogs" className="flex items-center gap-2 text-dark-primary dark:text-light-primary hover:text-accent-dark dark:hover:text-accent-light transition-colors font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book"><path d="M4 19.5v-15A3.5 3.5 0 0 1 7.5 1H20v22H7.5a3.5 3.5 0 0 1 0-7H4z"></path></svg>
            Blogs
          </Link>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
          <Link to="/gallery" className="flex items-center gap-2 text-dark-primary dark:text-light-primary hover:text-accent-dark dark:hover:text-accent-light transition-colors font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="22" height="16" x="1" y="4" rx="3" ry="3"></rect><path d="M3 10h18"></path><path d="M8 15a6 6 0 0 1 6-6"></path></svg>
            Gallery
          </Link>
        </div>
      )}



        <div className="flex items-center space-x-2">
          {!isMobile && <DarkModeToggle /> }
          {!isMobile && <TimeDisplay /> }
        </div>

        {isMobile && (
          <div className="w-[70%] mx-auto text-sm flex dark:text-white text-black justify-around bg-white dark:bg-dark-secondary bg-opacity-40 dark:bg-opacity-90 backdrop-blur-md rounded-full border border-white/20 mb-4 p-2">
            <DarkModeToggle />
            <Link to="/" className="p-2"><FiHome className="w-4 h-4" /></Link>
            <Link to="/about" className="p-2"><FiUser className="w-4 h-4" /></Link>
            <Link to="/projects" className="p-2"><FiCode className="w-4 h-4" /></Link>
            <Link to="/blogs" className="p-2"><FiBook className="w-4 h-4" /></Link>
            <Link to="/gallery" className="p-2"><FiImage className="w-4 h-4" /></Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;