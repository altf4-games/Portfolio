import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Skills organized by category
const skillsByCategory = {
  "Frontend": {
    level: 70,
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Three.js"]
  },
  "Backend": {
    level: 65, 
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase"]
  },
  "AI/ML": {
    level: 70, // good
    skills: ["Python", "Scikit-learn", "TensorFlow", "PyTorch"]
  },
  "Game Development": {
    level: 90, // extraordinary
    skills: ["Unity", "Unreal Engine", "C#", "C++"]
  },
  "Blockchain": {
    level: 65, // mid
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"]
  },
  "Data Structures & Algorithms": {
    level: 65, // good
    skills: ["C++", "Java", "Python", "Problem Solving"]
  }
};

// Map level ranges to descriptive terms
const getLevelDescription = (level) => {
  if (level >= 90) return "Extraordinary";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Good";
  if (level >= 60) return "Intermediate";
  return "Beginner";
};

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-accent/80 to-background justify-center items-center flex">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.h2 
              className="text-4xl font-bold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Tech Skill Tree
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Experience points accumulated throughout my development journey
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsByCategory).map(([category, data], categoryIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black/5 p-6 rounded-lg shadow-sm border border-primary/10"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{category}</h3>
                    <span className="text-sm font-mono bg-background/50 px-2 py-1 rounded-md">
                      {hoveredCategory === category ? `${data.level}/100` : getLevelDescription(data.level)}
                    </span>
                  </div>
                  
                  <div className="h-3 bg-accent/50 rounded-full overflow-hidden relative">
                    <motion.div 
                      className={`absolute top-0 left-0 h-full rounded-full ${
                        data.level >= 90 ? 'bg-gradient-to-r from-purple-500 to-indigo-600' : 
                        data.level >= 80 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 
                        data.level >= 70 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 
                        'bg-gradient-to-r from-yellow-500 to-amber-500'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${data.level}%` }}
                      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute top-0 bottom-0 w-px bg-background/30" 
                        style={{ left: `${(i + 1) * 10}%` }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {data.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + (index * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm py-1 px-3 font-medium"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="text-sm py-1 px-3 bg-background/50 backdrop-blur-sm">
              Constantly leveling up
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}