import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WorkExperience() {
  return (
    <section id="work" className="py-16 bg-background justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
          <Card className="max-w-3xl mx-auto backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300 group mt-8 mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="group-hover:text-primary transition-colors">VyuXR Immersive Studios Pvt Ltd</CardTitle>
                  <CardDescription>Game Development & XR Intern • May 2025 – Present<br />Mumbai, India</CardDescription>
                </div>
                <Badge variant="secondary" className="group-hover:bg-primary/20">Current</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Developed and optimized mixed reality features in Unity, reducing crash rates by 30%.</li>
                <li>Built a game jam project, supporting rapid prototyping and internal innovation.</li>
                <li>Fixed key bugs in XR/game modules, improving performance and workflow.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="max-w-3xl mx-auto backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="group-hover:text-primary transition-colors">Team Vision: AR/VR Club</CardTitle>
                  <CardDescription>Tech Head • July 2024 - May 2025</CardDescription>
                </div>
                <Badge variant="secondary" className="group-hover:bg-primary/20">Current</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Led the development of immersive AR/VR experiences. Organized workshops and managed the club website to enhance user engagement.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}