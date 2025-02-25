import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-accent justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="flex justify-center gap-4 p-6">
              <Button asChild variant="outline" size="icon">
                <a href="https://linkedin.com/in/pradyum-mistry" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/altf4-games" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.youtube.com/@altf4-games" target="_blank" rel="noopener noreferrer">
                  <SiYoutube className="h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
