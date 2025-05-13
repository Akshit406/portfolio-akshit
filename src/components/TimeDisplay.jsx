import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-sm font-mono px-3 py-1 rounded-full text-black bg-opacity-20 bg-gray-500 dark:bg-gray-300">
      {format(currentTime, 'HH:mm:ss')}
    </div>
  );
};

export default TimeDisplay;