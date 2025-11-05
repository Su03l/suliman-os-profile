import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50"
      style={{
        background: 'linear-gradient(135deg, hsl(210 100% 35%), hsl(210 100% 25%))',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* User Avatar */}
          <motion.div
            className="mx-auto mb-4 sm:mb-6 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <User className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </motion.div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-2 px-4">
            Suliman Yousef
          </h1>
          
          {/* Title */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 px-4 text-center">
            Software Engineer • Full-Stack Developer
          </p>

          {/* Login Button */}
          <motion.button
            onClick={onLogin}
            className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-lg text-white text-base sm:text-lg font-medium transition-all duration-300 mx-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2 sm:gap-3">
              Enter SulimanOS
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          {/* Hint */}
          <motion.p
            className="mt-8 text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Click to explore the portfolio
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        SulimanOS v1.0
      </div>
    </motion.div>
  );
};
