import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "AltF4 Games",
    description:
      "My indie game development studio AltF4 Games where I've developed over 20 unique games spanning genres from horror to fast-paced action. The games have collectively achieved 150k+ downloads and a dedicated community of 750+ followers.",
    date: "Ongoing",
    tech: ["Unity", "C#", "JavaScript", "Game Development"],
    links: {
      github : "https://github.com/altf4-games",
      site: "https://altf4games.vercel.app/"
    }
  },
  {
    title: "Code Snip",
    description:
      "Web platform for instant code sharing with syntax highlighting and multi-language support.",
    date: "March 2024",
    tech: ["HTML", "JavaScript", "CSS"],
    links: {
      github : "https://github.com/altf4-games/CodeSnip",
      site: "https://code-snip.vercel.app/"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-accent">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    {project.date && (
                      <CardDescription>{project.date}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Source
                          </a>
                        </Button>
                      )}
                      {project.links.site && (
                        <Button asChild size="sm">
                          <a href={project.links.site} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
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
