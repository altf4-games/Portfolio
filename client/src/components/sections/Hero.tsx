import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Gamepad2, Mail } from "lucide-react";

const InteractiveGrid = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCell, setHoveredCell] = useState(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Create grid cells - use responsive calculations
  const gridSize = 40; // Size of each cell
  const cols = 30; // Fixed number of columns for mobile compatibility
  const rows = 20; // Fixed number of rows for mobile compatibility

  return (
    <div 
      ref={gridRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0"
        style={{ filter: 'blur(0.5px)' }}
      >
        <defs>
          <radialGradient id="mouseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.2)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
          </radialGradient>
          <radialGradient id="mouseGlowDark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </radialGradient>
        </defs>
        
        {/* Grid lines */}
        <g className="opacity-20 dark:opacity-10">
          {/* Vertical lines */}
          {Array.from({ length: cols + 1 }, (_, i) => (
            <line
              key={`v-${i}`}
              x1={i * gridSize}
              y1="0"
              x2={i * gridSize}
              y2="100%"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted-foreground"
            />
          ))}
          {/* Horizontal lines */}
          {Array.from({ length: rows + 1 }, (_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * gridSize}
              x2="100%"
              y2={i * gridSize}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted-foreground"
            />
          ))}
        </g>

        {/* Mouse glow effect */}
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="150"
          fill="url(#mouseGlow)"
          className="opacity-0 dark:opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: mousePos.x > 0 || mousePos.y > 0 ? 0.6 : 0
          }}
        />
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="150"
          fill="url(#mouseGlowDark)"
          className="opacity-0 dark:opacity-60 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: mousePos.x > 0 || mousePos.y > 0 ? 0.6 : 0
          }}
        />

        {/* Interactive cells around mouse */}
        {mousePos.x > 0 && mousePos.y > 0 && (
          <g className="pointer-events-none">
            {Array.from({ length: 15 }, (_, i) => {
              const angle = (i / 15) * Math.PI * 2;
              const radius = 80 + Math.sin(Date.now() / 1000 + i) * 20;
              const x = mousePos.x + Math.cos(angle) * radius;
              const y = mousePos.y + Math.sin(angle) * radius;
              
              return (
                <motion.circle
                  key={`particle-${i}`}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="rgba(99, 102, 241, 0.6)"
                  className="dark:fill-purple-400"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.8 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    delay: i * 0.05,
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}
                />
              );
            })}
          </g>
        )}
      </svg>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute w-2 h-2 bg-primary/20 dark:bg-primary/30"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i * 8)}%`,
              transform: i % 2 === 0 ? 'rotate(45deg)' : 'none',
              borderRadius: i % 3 === 0 ? '50%' : '2px'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-x-hidden bg-background dark:bg-background" 
      id="home"
    >
      {/* Interactive Grid Background */}
      <InteractiveGrid />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background dark:from-background/50 dark:via-background/80 dark:to-background z-10" />

      {/* Additional atmospheric effects */}
      <div className="absolute inset-0 z-10">
        <motion.div 
          className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-80 h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-20 py-16">
        <motion.div
          className="flex flex-col justify-center space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {/* Name and role */}
          <motion.div className="space-y-4 mt-16 md:mt-0" variants={itemVariants}>
            <motion.div 
              className="inline-block mx-auto mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-3 py-1 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground rounded-full border border-primary/20 dark:border-primary/30 backdrop-blur-sm">
                Game Developer • Web Developer • Tech Enthusiast
              </div>
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary dark:from-primary dark:via-purple-400 dark:to-secondary font-extrabold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgba(99, 102, 241, 0.5)"
                }}
              >
                Pradyum
              </motion.span>
            </h1>
            <motion.p 
              className="max-w-[800px] text-base md:text-xl text-muted-foreground dark:text-muted-foreground mx-auto leading-relaxed backdrop-blur-sm"
              variants={itemVariants}
            >
              Computer Engineering student and creator of <span className="font-bold text-foreground dark:text-foreground bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded">Alt F4 Games</span>, 
              passionate about web development, AI/ML, blockchain, and game development.
            </motion.p>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 mb-8" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="group bg-primary/90 hover:bg-primary backdrop-blur-sm">
                <a href="#games" className="flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>View My Games</span>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm border-primary/30 hover:border-primary/50 bg-background/50 dark:bg-background/30">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Technologies stack pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 pt-6 max-w-2xl mx-auto w-full"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              'MERN', 'UNITY', 'UNREAL', 'FLUTTER', 'BLOCKCHAIN', 'C++', 'DSA', 'COMPETITIVE PROGRAMMING', 'AI/ML'
            ].map((tech, index) => (
              <motion.span 
                key={tech}
                className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-xs font-medium bg-primary/10 dark:bg-primary/20 text-foreground dark:text-foreground rounded-full border border-primary/20 dark:border-primary/30 backdrop-blur-sm cursor-pointer whitespace-nowrap"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'hsl(var(--primary) / 0.2)',
                  borderColor: 'hsl(var(--primary) / 0.4)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned outside main container */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 md:bottom-16 left-0 right-0 flex justify-center z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center backdrop-blur-sm bg-background/30 dark:bg-background/20 px-2 py-1 sm:px-3 sm:py-2 rounded-full border border-muted-foreground/20"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}