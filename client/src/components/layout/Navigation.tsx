import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav 
      className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="/">
          <span className="font-bold text-xl cursor-pointer ml-6"></span>
        </a>

        <div className="flex items-center gap-6">
          <a href="#home">
            <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Home</span>
          </a>
          <a href="#projects">
            <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Projects</span>
          </a>
          <a href="#games">
            <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Games</span>
          </a>
          <a href="#achievements">
            <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Achievements</span>
          </a>
          <a href="#hackathons">
            <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Hackathons</span>
          </a>
          <a href="#resume">
            <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Resume</span>
          </a>
          <a href="#contact">
            <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">Contact</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}