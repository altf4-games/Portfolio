import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background pt-16" id="home">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <motion.div 
            className="flex flex-col justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Hi, I'm Pradyum
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl mx-auto">
                Computer Engineering student and creator of Alt F4 Games, passionate about web development, AI/ML, blockchain, and game development.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button asChild>
                <a href="#games">View My Games</a>
              </Button>
              <Button variant="outline">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
