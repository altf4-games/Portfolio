import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Game Developer",
    description: "Developed 20+ unique games with 150k+ downloads",
    icon: "🎮"
  },
  {
    title: "Community Builder",
    description: "Built a dedicated community of 750+ followers",
    icon: "👥"
  },
  {
    title: "Hackathon Veteran",
    description: "Participated in 11+ hackathons",
    icon: "🏆"
  },
  {
    title: "Top 10 Finalist",
    description: "Top 10 Finalist at I ❤️ Hackathon for building Voyage3",
    icon: "🌟"
  },
  {
    title: "Honorable Mention",
    description: "Winter MelonJam 2023 - Heart Quake",
    icon: "🎖️"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-background justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Trophy className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-center">Achievements</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
