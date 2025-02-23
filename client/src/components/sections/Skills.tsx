import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  "C/C++", "C#", "JavaScript", "Python", "Java", "HTML", "CSS", "Rust",
  "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB",
  "Firebase", "Scikit-learn", "Three.js", "Docker", "Unity", "Unreal Engine", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-accent">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
