import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { useState } from "react"; // Import React's useState hook for toggling

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle function for the mobile menu

  return (
    <motion.nav
      className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="/">
          <span className="font-bold text-xl cursor-pointer ml-6">Your Logo</span>
        </a>

        {/* Hamburger Icon (Visible only on mobile) */}
        <div className="md:hidden flex items-center mr-5">
          <button
            className="text-xl"
            onClick={toggleMenu} // Toggle dropdown on click
          >
            {isOpen ? '✖' : '☰'} {/* Display '✖' if menu is open, '☰' for closed */}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur p-6 flex flex-col items-center gap-4`}
        >
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
