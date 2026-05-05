import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const brandName = "MAGMAZOES";

  useEffect(() => {
    let completeTimeout: ReturnType<typeof setTimeout>;
    let exitTimeout: ReturnType<typeof setTimeout>;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          exitTimeout = setTimeout(() => {
            setIsLoaded(true);
            completeTimeout = setTimeout(() => {
              if (typeof onComplete === 'function') {
                onComplete();
              }
            }, 600);
          }, 400);
          return 100;
        }
        const next = prev + Math.random() * 20;
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => {
      clearInterval(timer);
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  const containerVariants: Variants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.77, 0, 0.175, 1]
      }
    }
  };

  const letterVariants: Variants = {
    initial: { 
      y: 100,
      opacity: 0
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.03,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            {/* Brand Name - Bold Adidas Style Reveal */}
            <div className="overflow-hidden mb-8">
              <div className="flex items-center justify-center">
                {brandName.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Simple Progress Bar */}
            <div className="w-48 md:w-64 h-[4px] bg-white/10 relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="mt-6 font-black text-[10px] tracking-[0.4em] uppercase text-white"
            >
              LOADING / {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
