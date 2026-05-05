import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const brandName = "MAGMAZOES";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoaded(true);
            setTimeout(onComplete, 800); // Wait for fade out animation
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(20px)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const letterVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      filter: "blur(10px)"
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const textFillVariants = {
    initial: {
      WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
      color: "transparent",
    },
    animate: {
      WebkitTextStroke: "1px rgba(255, 255, 255, 0)",
      color: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          {/* Subtle Vignette */}
          <div className="absolute inset-0 bg-radial-vignette pointer-events-none"></div>

          <div className="relative flex flex-col items-center">
            {/* Brand Name */}
            <motion.div 
              className="flex items-center justify-center mb-12 relative"
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.4em", opacity: 1 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {brandName.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className="relative text-5xl md:text-8xl font-heading font-black uppercase inline-block"
                >
                  <motion.span
                    variants={textFillVariants}
                    initial="initial"
                    animate="animate"
                  >
                    {letter}
                  </motion.span>
                  
                  {/* Premium Glitch/Ghosting Effect */}
                  <motion.span
                    animate={{
                      opacity: [0, 0.4, 0],
                      x: [0, -1, 1, 0],
                      skewX: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 3 + 1,
                    }}
                    className="absolute inset-0 text-brand mix-blend-screen opacity-0 pointer-events-none filter blur-[1px]"
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
              
              {/* Shine Sweep Overlay */}
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "200%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
                className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] pointer-events-none blur-sm"
              />
            </motion.div>

            {/* Progress Container */}
            <div className="w-40 md:w-56 h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>

            {/* Status Indicator */}
            <div className="mt-6 flex flex-col items-center space-y-1">
              <motion.div 
                className="font-mono text-[8px] tracking-[0.5em] uppercase text-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                ESTABLISHING CONNECTION
              </motion.div>
              <motion.div 
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60"
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </div>

          {/* Background Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -bottom-24 -right-24 w-96 h-96 border border-white rounded-full pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
