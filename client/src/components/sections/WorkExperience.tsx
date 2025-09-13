import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ChevronRight, Building } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  date: string;
  location: string;
  description: string[];
  current?: boolean;
}

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
  side: 'left' | 'right';
  isHighlighted: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isExpanded,
  onToggle,
  side,
  isHighlighted,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-full ${side === 'left' ? 'md:pr-8 pr-4' : 'md:pl-8 pl-4'}`}
    >
      <Card
        className={`bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-card/90 transition-all duration-300 shadow-md ${
          isHighlighted ? 'ring-2 ring-primary ring-opacity-60' : ''
        }`}
      >
        <CardHeader className="cursor-pointer relative p-4 md:p-6" onClick={onToggle}>
          {experience.current && (
            <div className="absolute -top-2 -right-2 bg-green-400/90 text-black p-1 rounded-full" title="Current">
              <Building className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          )}
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg md:text-xl font-bold leading-tight">{experience.company}</CardTitle>
            <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </motion.div>
          </div>
          <div className="space-y-2 mt-2">
            <div className="text-base md:text-lg font-semibold text-primary">{experience.position}</div>
            <div className="flex items-center gap-2 flex-wrap">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
              <span className="text-xs md:text-sm break-words">{experience.date}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
              <Badge variant="secondary" className="text-xs max-w-full truncate">{experience.location}</Badge>
            </div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pb-4 px-4 md:px-6">
                <ul className="list-disc pl-4 md:pl-5 text-muted-foreground space-y-2 text-sm md:text-base">
                  {experience.description.map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

const TimelinePoint: React.FC<{ isActive: boolean; onClick: () => void; id: string }> = ({ 
  isActive, 
  onClick, 
  id 
}) => (
  <motion.div
    id={id}
    className={`w-4 h-4 rounded-full cursor-pointer z-10 transition-all duration-300 ${
      isActive ? 'bg-primary scale-125' : 'bg-primary/40 hover:bg-primary/60'
    }`}
    whileHover={{ scale: 1.2 }}
    onClick={onClick}
  />
);

const experiences: Experience[] = [
  {
    company: 'VyuXR Immersive Studios Pvt Ltd',
    position: 'Game Development & XR Intern',
    date: 'May 2025 – June 2025',
    location: 'Mumbai, India',
    description: [
      'Developed and optimized mixed reality features in Unity, reducing crash rates by 30%.',
      'Built a game jam project, supporting rapid prototyping and internal innovation.',
      'Fixed key bugs in XR/game modules, improving performance and workflow.'
    ]
  },
  {
    company: 'Team Vision: AR/VR Club',
    position: 'Tech Head',
    date: 'July 2024 - May 2025',
    location: 'KJSCE, Mumbai',
    description: [
      'Led the development of immersive AR/VR experiences.',
      'Organized workshops and managed the club website to enhance user engagement.',
      'Coordinated technical activities and mentored junior members in AR/VR development.'
    ]
  }
];

export default function WorkExperience(): JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-16 bg-gradient-to-b from-background to-accent/30 justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Experience</h2>
            <div className="h-1 w-16 md:w-24 bg-primary rounded-full mt-2"></div>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl px-4 text-sm md:text-base">
              Building innovative solutions across web development and game development
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform -translate-x-1/2 rounded-full" />

          {/* Experiences */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => {
              const side = index % 2 === 0 ? 'left' : 'right';
              return (
                <div key={index} className="relative">
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <TimelinePoint 
                      isActive={expandedIndex === index}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      id={`point-${index}`}
                    />
                  </div>

                  {/* Card - alternating sides on desktop, centered on mobile */}
                  <div className={`flex ${side === 'left' ? 'md:justify-end justify-center' : 'md:justify-start justify-center'} relative`}>
                    <div className={`w-full md:w-1/2 ${side === 'left' ? 'md:pr-8 px-4' : 'md:pl-8 px-4'} max-w-lg md:max-w-none`}>
                      <ExperienceCard
                        experience={experience}
                        isExpanded={expandedIndex === index}
                        onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        side={side}
                        isHighlighted={expandedIndex === index}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}