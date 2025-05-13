import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed inset-0 bg-dark-primary dark:bg-light-primary z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="text-4xl font-bold text-accent-light dark:text-accent-dark"
      >
        Welcome
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;