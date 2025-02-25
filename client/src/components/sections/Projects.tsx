import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Calendar, ArrowUpRight, Loader2, Code } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fixedAltF4Project = {
    name: "AltF4 Games",
    description: 
      "My indie game development studio where I've developed over 20 unique games spanning genres from horror to fast-paced action. The games have collectively achieved 150k+ downloads and a dedicated community of 750+ followers.",
    created_at: "Ongoing",
    topics: ["Unity", "C#", "JavaScript", "Game-Development"],
    languages: { "C#": 65, "JavaScript": 25, "HTML": 5, "CSS": 5 },
    html_url: "https://github.com/altf4-games",
    homepage: "https://altf4games.vercel.app/"
  };

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/altf4-games/repos');
        
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        let repos = await reposResponse.json();
        
        // Filter out forked repositories and the AltF4 Games repository
        repos = repos.filter(repo => !repo.fork && repo.name !== "altf4-games");
        
        // Get 2 random projects
        const shuffled = repos.sort(() => 0.5 - Math.random());
        const selectedRepos = shuffled.slice(0, 2);
        
        // Fetch languages for each repository
        const reposWithLanguages = await Promise.all(
          selectedRepos.map(async (repo) => {
            try {
              const langResponse = await fetch(repo.languages_url);
              if (langResponse.ok) {
                const languages = await langResponse.json();
                
                // Calculate percentages
                const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
                const languagePercentages = {};
                
                Object.entries(languages).forEach(([language, bytes]) => {
                  languagePercentages[language] = Math.round((bytes / totalBytes) * 100);
                });
                
                return { ...repo, languages: languagePercentages };
              }
              return { ...repo, languages: {} };
            } catch (err) {
              console.error(`Error fetching languages for ${repo.name}:`, err);
              return { ...repo, languages: {} };
            }
          })
        );
        
        // Add the fixed AltF4 Games project at the beginning
        const finalProjects = [fixedAltF4Project, ...reposWithLanguages];
        
        setProjects(finalProjects);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError(err.message);
        // Fallback to some static projects in case of API failure
        setProjects([
          fixedAltF4Project,
          {
            name: "CodeSnip",
            description: "Web platform for instant code sharing with syntax highlighting and multi-language support.",
            created_at: "2024-03-15T00:00:00Z",
            topics: ["HTML", "JavaScript", "CSS"],
            languages: { "JavaScript": 60, "HTML": 25, "CSS": 15 },
            html_url: "https://github.com/altf4-games/CodeSnip",
            homepage: "https://code-snip.vercel.app/"
          },
          {
            name: "Portfolio-Template",
            description: "A modern, responsive portfolio template built with React and Tailwind CSS.",
            created_at: "2023-11-10T00:00:00Z",
            topics: ["React", "Tailwind", "Portfolio", "Template"],
            languages: { "JavaScript": 70, "HTML": 15, "CSS": 15 },
            html_url: "https://github.com/altf4-games/Portfolio-Template",
            homepage: ""
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Helper function to format dates
  const formatDate = (dateString) => {
    if (dateString === "Ongoing") return "Ongoing";
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    });
  };

  // Helper function to get language color
  const getLanguageColor = (language) => {
    const colors = {
      "JavaScript": "#f1e05a",
      "TypeScript": "#3178c6",
      "HTML": "#e34c26",
      "CSS": "#563d7c",
      "Python": "#3572A5",
      "Java": "#b07219",
      "C#": "#178600",
      "C++": "#f34b7d",
      "PHP": "#4F5D95",
      "Ruby": "#701516",
      "Go": "#00ADD8",
      "Swift": "#ffac45",
      "Kotlin": "#A97BFF",
      "Rust": "#dea584"
    };
    
    return colors[language] || "#6e7681";
  };

  return (
    <section id="projects" className="py-24 bg-accent justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="mb-3">Portfolio</Badge>
          <h2 className="text-4xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Loading projects...</span>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-500">Failed to load projects. Please try again later.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 border-transparent bg-card/50 backdrop-blur-sm group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-primary">{project.name}</CardTitle>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(project.created_at)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-5 text-muted-foreground leading-relaxed">
                      {project.description || "No description available"}
                    </p>
                    
                    {/* Language breakdown */}
                    {Object.keys(project.languages || {}).length > 0 && (
                      <div className="mb-5">
                        <div className="flex items-center gap-1 mb-2 text-xs text-muted-foreground">
                          <Code className="h-3 w-3" />
                          <span>Languages</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden flex">
                          {Object.entries(project.languages).map(([language, percentage], i) => (
                            <div 
                              key={language}
                              className="h-full"
                              style={{ 
                                width: `${percentage}%`, 
                                backgroundColor: getLanguageColor(language)
                              }} 
                              title={`${language}: ${percentage}%`}
                            />
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3 mt-2">
                          {Object.entries(project.languages).map(([language, percentage]) => (
                            <div key={language} className="flex items-center text-xs">
                              <div 
                                className="w-2 h-2 rounded-full mr-1"
                                style={{ backgroundColor: getLanguageColor(language) }}
                              />
                              <span>{language}</span>
                              <span className="text-muted-foreground ml-1">{percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Topics/tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {(project.topics || []).map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-primary/5 text-xs">
                          {tech.replace(/-/g, ' ')}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex gap-3">
                    {project.html_url && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    )}
                    {project.homepage && (
                      <Button asChild size="sm" className="flex-1 group/button">
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <span>Live Demo</span>
                          <ArrowUpRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button asChild variant="outline" className="group">
            <a href="https://github.com/altf4-games?tab=repositories" target="_blank" rel="noopener noreferrer">
              <span>View All Projects</span>
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}