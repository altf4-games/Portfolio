import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Globe, Gamepad, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';

interface Hackathon {
  name: string;
  date: string;
  description: string;
  location: string;
  links: Partial<Record<'github' | 'itch' | 'site', string>>;
}

interface HackathonCardProps {
  hackathon: Hackathon;
  isExpanded: boolean;
  onToggle: () => void;
  side: 'left' | 'right';
  isHighlighted: boolean;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  hackathon,
  isExpanded,
  onToggle,
  side,
  isHighlighted,
}) => {
  const LinkIcon: React.FC<{ type: keyof Hackathon['links'] }> = ({ type }) => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'site':
        return <Globe className="w-4 h-4" />;
      case 'itch':
        return <Gamepad className="w-4 h-4" />;
      default:
        return null;
    }
  };

  // Check if this hackathon has an achievement (mentions placement or award)
  const hasAchievement = hackathon.description.toLowerCase().includes('top') ||
    hackathon.description.toLowerCase().includes('honorable mention') ||
    hackathon.description.toLowerCase().includes('award') ||
    hackathon.description.toLowerCase().includes('placement') ||
    hackathon.description.toLowerCase().includes('secured');

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-full ${side === 'left' ? 'pr-8' : 'pl-8'}`}
    >
      <Card
        className={`bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-card/90 transition-all duration-300 shadow-md ${
          isHighlighted ? 'ring-2 ring-primary ring-opacity-60' : ''
        }`}
      >
        <CardHeader className="cursor-pointer relative" onClick={onToggle}>
          {hasAchievement && (
            <div className="absolute -top-2 -right-2 bg-amber-400/90 text-black p-1 rounded-full" title="Achievement">
              <Award className="w-4 h-4" />
            </div>
          )}
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">{hackathon.name}</CardTitle>
            <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronRight className="w-5 h-5 text-primary" />
            </motion.div>
          </div>
          {/* Replaced CardDescription with a div */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{hackathon.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <Badge variant="secondary">{hackathon.location}</Badge>
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
              <CardContent className="pb-4">
                <p className="text-muted-foreground mb-4">{hackathon.description}</p>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(hackathon.links).map(([type, url]) =>
                    url ? (
                      <a
                        key={type}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors bg-primary/10 px-3 py-1.5 rounded-full"
                      >
                        <LinkIcon type={type as keyof Hackathon['links']} />
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </a>
                    ) : null
                  )}
                </div>
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

const hackathons: Hackathon[] = [
  {
    name: 'Winter MelonJam 2023 ❄️🍈',
    date: '28 Dec 2023 - 31 Dec 2023',
    description:
      'Developed a first-person shooter called Heart Quake in just three days for Winter MelonJam 2023, where the player charms enemies with the Charm-inator 3000 to turn them into allies. I received an honorable mention for it!',
    location: 'International',
    links: {
      github: 'https://github.com/altf4-games/Heart-Quake',
      itch: 'https://altf4-games.itch.io/heart-quake',
    },
  },
  {
    name: 'Karnataka State Police Datathon',
    date: 'Jan 2024 - Apr 2024',
    description:
      'Designed and implemented a dashboard using AI for real-time accident prediction and data analysis. Achieved top 50 placement in the hackathon.',
    location: 'Bangalore',
    links: {
      github: 'https://github.com/altf4-games/KSP-DA-Dashboard',
      site: 'https://ksp-da-dashboard.vercel.app/',
    },
  },
  {
    name: 'Devopia',
    date: 'Apr 2024 - Apr 2024',
    description:
      'Developed a blockchain-powered ride-hailing app ensuring fair pricing and secure payments with Metamask integration for crypto transactions.',
    location: 'KJSCE, Mumbai',
    links: {
      github: 'https://github.com/altf4-games/savaaree-ride-app',
      site: 'https://savaaree-ride-app.vercel.app/',
    },
  },
  {
    name: 'HumanAIze Hackathon <FinTech Edition>',
    date: 'June 2024 - July 2024',
    description:
      'Developed an app for predicting credit scores and loan approvals using AI. Included comprehensive financial health assessments and credit scoring.',
    location: 'India',
    links: {
      github: 'https://github.com/altf4-games/CreditPredict',
    },
  },
  {
    name: 'Cosmic Craftathon',
    date: 'Sept 2024 - Oct 2024',
    description:
      'Co-developed a thrilling 2D space exploration game, Starlight Escape, where a scientist is on the run from space bandits, navigating new planets and upgrading my customizable ship in a dynamic environment. Our team made it to the top 4!',
    location: 'IIIT Nagpur',
    links: {
      github: 'https://github.com/altf4-games/Starlight-Escape',
      itch: 'https://altf4-games.itch.io/starlight-escape',
    },
  },
  {
    name: 'Based India',
    date: '27 Sep 2024 - 21 Oct 2024',
    description:
      'Developed Grid4Good, a collaborative digital art platform that enhances community engagement by allowing users to buy pixels for a shared canvas, with proceeds supporting charities and raising awareness of local issues through blockchain technology.',
    location: 'India',
    links: {
      github: 'https://github.com/altf4-games/Grid4Good',
      site: 'https://grid4good.vercel.app/',
    },
  },
  {
    name: 'Smart City Hackathon',
    date: 'Oct 2024 - Oct 2024',
    description:
      'Created SafeCommute, an app designed to enhance urban navigation by providing accident heatmaps, real-time traffic and weather updates, and safer route recommendations, prioritizing commuter safety.',
    location: 'International',
    links: {
      github: 'https://github.com/altf4-games/SafeCommute',
      site: 'https://safecommute.vercel.app/',
    },
  },
  {
    name: 'Mumbai Hacks',
    date: '25 Oct 2024 - 26 Oct 2024',
    description:
      "Co-developed an AI-driven marketing platform, Cultur.AI, tailored to India's diverse market for creating culturally relevant ads, bridging AI with local traditions.",
    location: 'Atlas SkillTech University, Mumbai',
    links: {
      github: 'https://github.com/altf4-games/MumbaiHacks',
      site: 'https://culturai.vercel.app/',
    },
  },
  {
    name: 'PlayCraft (Game Development Hackathon)',
    date: '7 Nov 2024 - 11 Nov 2024',
    description:
      'Developed a 2.5D platformer, 9 - 5, capturing the day-in-the-life of a college student, integrating relatable tasks, social interactions, and a unique blend of 2D/3D visual design to create an immersive, culturally resonant experience.',
    location: 'IIT BBS (Online)',
    links: {
      github: 'https://github.com/altf4-games/Nine_To_Five',
    },
  },
  {
    name: 'Cyberguard AI Hackathon',
    date: '22 Nov 2024 - 8 Dec 2024',
    description:
      'Co-developed Sentinel, an AI-driven platform for automated cybercrime report classification, integrating NLP and OCR to efficiently detect and categorize threats, sensitive data, and cyber patterns.',
    location: 'IndiaAI (Online)',
    links: {
      github: 'https://github.com/altf4-games/Sentinel',
    },
  },
  {
    name: 'I ❤️ Hackathon: Pune Web3 Edition',
    date: '21 Dec 2024 - 22 Dec 2024',
    description:
      'Co-developed Voyage3, an innovative Web3 travel solution, which secured a Top 10 finish. The solution integrates blockchain-powered bookings for secure, transparent transactions, NFT tickets for seamless ownership and resale, on-chain AI agents for autonomous, personalized flight bookings, and crypto & fiat payment options for ultimate flexibility.',
    location: 'VIT Pune',
    links: {
      github: 'https://github.com/altf4-games/I-Hackathon',
      site: 'https://voyage3.vercel.app/',
    },
  },
];

export default function Hackathons(): JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeYear, setActiveYear] = useState<string>('2024');
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Organize hackathons by year
  const hackathonsByYear = hackathons.reduce<Record<string, Hackathon[]>>((acc, hackathon) => {
    const parts = hackathon.date.split(' ');
    const year = parts[parts.length - 1] || '';
    if (!acc[year]) acc[year] = [];
    acc[year].push(hackathon);
    return acc;
  }, {});

  // Create a list of years from the data
  const years = Object.keys(hackathonsByYear).sort((a, b) => Number(b) - Number(a));

  // Auto-scroll to active year marker
  // useEffect(() => {
  //   // Prevent auto-scrolling if the user has already interacted (scrolled or clicked).
  //   if (!isScrolling && !timelineRef.current?.scrollTop) {
  //     const yearMarker = document.getElementById(`year-marker-${activeYear}`);
  //     if (yearMarker) {
  //       yearMarker.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //       setIsScrolling(true); // Prevent further scrolling until after the current scroll.
  //       setTimeout(() => setIsScrolling(false), 800); // Reset scrolling status after a brief timeout.
  //     }
  //   }
  // }, [activeYear, isScrolling]);

  // Flatten hackathons for easier indexing
  const flattenedHackathons = years.flatMap(year => hackathonsByYear[year]);

  return (
    <section id="hackathons" className="py-16 bg-gradient-to-b from-background to-accent/30 justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <h2 className="text-4xl font-bold text-center">Hackathon Journey</h2>
            <div className="h-1 w-24 bg-primary rounded-full mt-2"></div>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl">
              A chronological journey through my hackathon experiences, showcasing projects and achievements across various domains and technologies.
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeYear === year
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'bg-accent/50 hover:bg-accent text-foreground'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform -translate-x-1/2 rounded-full" />

          {/* Year Markers on Timeline */}
          <div className="relative" ref={timelineRef}>
            {years.map((year, yearIndex) => (
              <div key={year} className="mb-16">
                {/* Year Marker */}
                <div 
                  id={`year-marker-${year}`} 
                  className="flex justify-center items-center relative mb-8"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-background border-2 border-primary z-10 rounded-full px-6 py-2">
                    <span className="text-xl font-bold">{year}</span>
                  </div>
                </div>

                {/* Hackathons for this year */}
                <div className="space-y-12">
                  {hackathonsByYear[year].map((hackathon, index) => {
                    const globalIndex = flattenedHackathons.findIndex(h => h === hackathon);
                    const side = index % 2 === 0 ? 'left' : 'right';
                    return (
                      <div key={`${year}-${index}`} className="relative">
                        {/* Timeline Point */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                          <TimelinePoint 
                            isActive={expandedIndex === globalIndex}
                            onClick={() => setExpandedIndex(expandedIndex === globalIndex ? null : globalIndex)}
                            id={`point-${year}-${index}`}
                          />
                        </div>

                        {/* Card - alternating sides */}
                        <div className={`flex ${side === 'left' ? 'justify-end' : 'justify-start'} relative`}>
                          <div className={`w-1/2 ${side === 'left' ? 'pr-8' : 'pl-8'}`}>
                            <HackathonCard
                              hackathon={hackathon}
                              isExpanded={expandedIndex === globalIndex}
                              onToggle={() => setExpandedIndex(expandedIndex === globalIndex ? null : globalIndex)}
                              side={side}
                              isHighlighted={expandedIndex === globalIndex}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Journey Start Marker */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -mb-8 flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-primary animate-pulse"></div>
            <p className="mt-2 text-sm text-muted-foreground">Journey Begins</p>
          </div>
        </div>
      </div>
    </section>
  );
}