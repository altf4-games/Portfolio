import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-background justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <h3 className="text-2xl font-semibold">K.J. Somaiya College of Engineering</h3>
              <p className="text-sm text-muted-foreground">2023 - 2027</p>
            </CardHeader>
            <CardContent>
              <p>B.Tech in Computer Engineering</p>
              <p className="text-sm text-muted-foreground mt-2">CGPA: 9.50</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
