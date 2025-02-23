import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function Resume() {
  const resumeUrl = "https://drive.google.com/file/d/1jYF6NXAdQo4bhV7UA9PW06Zecz3Ds23a/preview";
  
  return (
    <section id="resume" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <iframe
                  src={resumeUrl}
                  className="w-full h-full"
                  allow="autoplay"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <Button asChild>
                  <a href={resumeUrl.replace('/preview', '/view')} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
