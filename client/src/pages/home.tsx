import Hero from "@/components/sections/Hero";
import WorkExperience from "@/components/sections/WorkExperience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Games from "@/components/sections/Games";
import Achievements from "@/components/sections/Achievements";
import Hackathons from "@/components/sections/Hackathons";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <Games />
      <Achievements />
      <Hackathons />
      <Resume />
      <Contact />
    </main>
  );
}