import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Gamepad2, Mail } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden" 
      id="home"
    >
      {/* Background with mesh gradient that works in both dark and light modes */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background dark:from-primary/10 dark:via-background/80 dark:to-background z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjAyIiBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTYwIDYwTDAgME02MCAwaC02MHY2MGg2MHoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9Ii4wMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10" />

      <div className="container px-4 md:px-6 relative z-10 py-16">
        <motion.div
          className="flex flex-col justify-center space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {/* Name and role */}
          <motion.div className="space-y-4 mt-16 md:mt-0" variants={itemVariants}>
            <div className="inline-block mx-auto mb-2">
              <div className="px-3 py-1 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground rounded-full">
                Game Developer • Web Developer • Tech Enthusiast
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary font-extrabold">
                Pradyum
              </span>
            </h1>
            <motion.p 
              className="max-w-[800px] text-base md:text-xl text-muted-foreground dark:text-muted-foreground mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Computer Engineering student and creator of <span className="font-bold text-foreground dark:text-foreground">Alt F4 Games</span>, 
              passionate about web development, AI/ML, blockchain, and game development.
            </motion.p>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 mb-8" variants={itemVariants}>
            <Button asChild size="lg" className="group">
              <a href="#games" className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                <span>View My Games</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="backdrop-blur-sm border-primary/20">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </Button>
          </motion.div>

          {/* Technologies stack pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 pt-6 max-w-2xl mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {['React', 'Unity', 'Unreal', 'C++', 'Python', 'AI/ML', 'Blockchain', 'Express'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-muted/80 dark:bg-muted/30 text-muted-foreground dark:text-muted-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-2 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-xs text-muted-foreground">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}