import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { SiSteam } from 'react-icons/si';
import { ChevronRight, Github, Globe, Gamepad } from 'lucide-react';

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
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  hackathon,
  isExpanded,
  onToggle,
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

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-card/70 transition-all duration-300">
      <CardHeader className="cursor-pointer" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{hackathon.name}</CardTitle>
          <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronRight className="w-5 h-5 text-primary" />
          </motion.div>
        </div>
        <CardDescription className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline">{hackathon.date}</Badge>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <Badge variant="secondary">{hackathon.location}</Badge>
        </CardDescription>
      </CardHeader>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent>
              <p className="text-muted-foreground mb-4">{hackathon.description}</p>
              <div className="flex gap-4">
                {Object.entries(hackathon.links).map(([type, url]) =>
                  url ? (
                    <a
                      key={type}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
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
  );
};

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
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const hackathonsByYear = hackathons.reduce<Record<string, Hackathon[]>>((acc, hackathon) => {
    const parts = hackathon.date.split(' ');
    const year = parts[parts.length - 1] || '';
    if (!acc[year]) acc[year] = [];
    acc[year].push(hackathon);
    return acc;
  }, {});

  return (
    <section id="hackathons" className="py-16 bg-accent">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-12">
            <h2 className="text-4xl font-bold text-center">Hackathon Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ScrollArea className="h-[600px] pr-4">
              {Object.entries(hackathonsByYear)
                .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                .map(([year, yearHackathons]) => (
                  <div key={year} className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-8 bg-primary rounded" />
                      <h3 className="text-2xl font-bold">{year}</h3>
                    </div>
                    <div className="space-y-4">
                      {yearHackathons.map((hackathon, index) => {
                        const uniqueIndex = `${year}-${index}`;
                        return (
                          <motion.div
                            key={uniqueIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <HackathonCard
                              hackathon={hackathon}
                              isExpanded={expandedIndex === uniqueIndex}
                              onToggle={() =>
                                setExpandedIndex(expandedIndex === uniqueIndex ? null : uniqueIndex)
                              }
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </ScrollArea>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
