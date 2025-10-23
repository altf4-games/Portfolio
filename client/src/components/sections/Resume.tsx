import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Resume() {
  const resumeUrl = "https://drive.google.com/file/d/1WJZYsH1f2h4fkkIyumXEgVdQCsqmQQVU/preview";
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-background to-accent/10 justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-3"
            >
              My Resume
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              A comprehensive overview of my experience, skills, and qualifications
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-2 border-primary/10 shadow-xl">
              <div
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="aspect-[16/9] overflow-hidden bg-accent/5">
                  <iframe
                    src={resumeUrl}
                    className="w-full h-full"
                    allow="autoplay"
                  ></iframe>
                </div>
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0"
                  animate={{ opacity: isHovering ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    size="lg" 
                    variant="secondary"
                    asChild
                    className="mr-3"
                  >
                    <a href={resumeUrl.replace('/preview', '/view')} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-5 w-5" />
                      View Full Screen
                    </a>
                  </Button>
                </motion.div>
              </div>
              
              <CardContent className="p-6 bg-gradient-to-b from-background to-accent/5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-1">Professional Experience & Education</h3>
                    <p className="text-muted-foreground text-sm">Updated October 2025</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" asChild>
                      <a href={resumeUrl.replace('/preview', '/view')} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </a>
                    </Button>
                    
                    <Button asChild>
                      <a 
                        href={resumeUrl.replace('/preview', '/view')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative overflow-hidden group"
                      >
                        <span className="flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download Resume
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>Need a different format? Contact me for additional versions</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
