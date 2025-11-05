import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

const bootMessages = [
  'Initializing hardware...',
  'Loading user profile: Suliman Yousef',
  'Loading portfolio modules...',
  'Starting desktop environment...',
  'System Ready ✅',
];

export const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < bootMessages.length - 1) {
          return prev + 1;
        }
        clearInterval(messageInterval);
        return prev;
      });
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md px-4 sm:px-8">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Starting SulimanOS
        </motion.h1>

        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 min-h-[100px] sm:min-h-[120px]">
          {bootMessages.slice(0, currentMessage + 1).map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-400 text-xs sm:text-sm font-mono"
            >
              {message}
            </motion.div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-gray-500 text-xs text-center font-mono">
            {progress}%
          </div>
        </div>

        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <button
              onClick={onComplete}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Press ➜ to continue
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
