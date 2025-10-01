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
      className={`w-full ${side === 'left' ? 'md:pr-8 pr-4' : 'md:pl-8 pl-4'}`}
    >
      <Card
        className={`bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-card/90 transition-all duration-300 shadow-md ${
          isHighlighted ? 'ring-2 ring-primary ring-opacity-60' : ''
        }`}
      >
        <CardHeader className="cursor-pointer relative p-4 md:p-6" onClick={onToggle}>
          {hasAchievement && (
            <div className="absolute -top-2 -right-2 bg-amber-400/90 text-black p-1 rounded-full" title="Achievement">
              <Award className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          )}
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg md:text-xl font-bold leading-tight">{hackathon.name}</CardTitle>
            <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </motion.div>
          </div>
          {/* Replaced CardDescription with a div */}
          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
              <span className="text-xs md:text-sm break-words">{hackathon.date}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
              <Badge variant="secondary" className="text-xs max-w-full truncate">{hackathon.location}</Badge>
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
                <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">{hackathon.description}</p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {Object.entries(hackathon.links).map(([type, url]) =>
                    url ? (
                      <a
                        key={type}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs md:text-sm text-primary hover:text-primary/80 transition-colors bg-primary/10 px-2 py-1 md:px-3 md:py-1.5 rounded-full"
                      >
                        <LinkIcon type={type as keyof Hackathon['links']} />
                        <span className="hidden sm:inline">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                        <span className="sm:hidden">{type.charAt(0).toUpperCase()}</span>
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
    name: 'Brackeys Game Jam 2023.2',
    date: '20 Aug 2023 - 27 Aug 2023',
    description:
      'Developed The Outer Limits, a horror game inspired by Iron Lung and made in 7 days. Set in a future where the sun is dying and humanity has only days left, players take on the role of a lone explorer sent to investigate a mysterious Mass Relay discovered two years prior. Piloting a spacecraft through the outer reaches of space, the mission is to find a new home for humanity before time runs out. The game ranked #87 Overall, and placed #35 in Graphics, #43 in Innovation, and #83 in Audio.',
    location: 'International (Online)',
    links: {
      github: 'https://github.com/altf4-games/The-Outer-Limits',
      itch: 'https://altf4-games.itch.io/the-outer-limits',
    },
  },
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
  {
    name: 'Road To Game Jam',
    date: '19 Dec 2024 - 17 Feb 2025',
    description:
      'Developed UNO Way Out, a unique survival card-based FPS where the player is trapped in a deadly UNO game against a rogue bot. Each card color grants powerful abilities: Blue for SMG, Red for rockets, Green for sniper, and Yellow for healing. The challenge lies in managing your hand—collecting more than 10 cards results in instant defeat. The battlefield collapses as you play, and victory can only be achieved by calling UNO or depleting the bot’s health. The game tied directly into the jam’s themes “Everything Falls Apart” and “Stuck Together.”',
    location: 'India (Online)',
    links: {
      github: 'https://github.com/altf4-games/UnoWayOut',
      itch: 'https://altf4-games.itch.io/uno-way-out',
    },
  },
  {
    name: "Datathon 2025: AdFlow AI",
    date: "15 Feb 2025 - 16 Feb 2025",
    location: "KJSCE",
    description: "Developed AdFlow AI, a comprehensive marketing platform featuring A/B testing, automated uploads to Twitter and Bluesky, KPI tracking, and AI-generated marketing post summaries.",
    links: 
    {
      github: "https://github.com/altf4-games/Datathon25",
    }
    
  },
  {
    name: "IDEA Hackathon: Catch Phish",
    date: "17 March 2025 - 18 March 2025",
    location: "KJSCE",
    description: "Developed Catch Phish, a one-stop solution to combat phishing sites. Built an AI engine to extract key features and generate phishing confidence scores, and created a browser add-on to block phishing sites on startup.",
    links: 
    {
      github: "https://github.com/altf4-games/CatchPhish",
    }
  },
  {
    name: "Hack 8",
    date: "12 April 2025 - 13 April 2025",
    location: "KJSSE",
    description: "Built LearnIt.ai, a comprehensive edtech platform featuring AI-powered flashcards, revision material, Unity-based virtual labs, AR games, and interactive courses. Secured a top 6 position.",
    links: {
      github: "https://github.com/altf4-games/Hack8"
    }
  },
  {
    name: "Forge the Future Game Jam by 8th Wall",
    date: "6 May 2025 - 30 June 2025",
    location: "Online (International)",
    description:
      "Created Hyperloop, an endless runner with a twist, during my internship at Vyuxr Immersive Studios Pvt Ltd. Instead of controlling the spaceship, players control the obstacles—changing the flow, speed, and shape of the challenge in real time. Won the 'Most Addictive Game' award.",
    links: {
      site: "https://www.8thwall.com/blog/post/192402948989/announcing-the-winners-forge-the-future-game-jam"
    }
  },
  {
    name: 'SIH 2025',
    date: '1 Sept 2025',
    description:
      'Built Tour Raksha, a smart tourist safety and incident response system leveraging AI, geo-fencing, and blockchain-based digital IDs to ensure safer travel experiences.',
    location: 'India',
    links: {
      github: 'https://github.com/altf4-games/Tour-Raksha',
    },
  },
  {
    name: 'ETHGlobal New Delhi 2025',
    date: '26 Sept 2025 - 28 Sept 2025',
    description:
      'Co-created Runft, a Web3 fitness platform that transforms every run into a unique generative NFT. The solution integrates Strava/GPS syncing to capture distance, route, and timestamp data, deterministic art generation to mint collectible assets, an NFT marketplace for trading runs, and on-chain provenance for verifiable digital history. Secured seamless login with MetaMask and deployed smart contracts on Arbitrum Sepolia.',
    location: 'New Delhi',
    links: {
      github: 'https://github.com/altf4-games/RunFT',
      site: 'https://runft.vercel.app/',
    },
  },
  {
    name: '💀 SCREAM JAM 2021 💀',
    date: '14 Oct 2021 - 24 Oct 2021',
    description:
      'Developed The Night of \'87, a PS1-style horror game. Players take on the role of Robert Williams, who wakes up in a bathroom with no memory of recent events. As you explore, you must piece together what truly happened on the night of \'87. The story blurs the line between hero and villain—because waking up next to a dead body is very suspicious.',
    location: 'International (Online)',
    links: {
      github: 'https://github.com/altf4-games/The-night-of-87',
      itch: 'https://altf4-games.itch.io/the-night-of-87',
    },
  },
  {
    name: '💀 SCREAM JAM 2019 💀',
    date: '11 Oct 2019 - 21 Oct 2019',
    description:
      'Developed Something In The Shadows, a short home invasion horror game and continuation of Midnight Nightmare. After moving to a secluded house in the forest, the protagonist discovers that Hunter, who was believed dead, has survived. Joined by Felix, they set a deadly trap to end you once and for all. The story challenges players to survive against relentless pursuers in a tense and isolated setting.',
    location: 'International (nline)',
    links: {
      itch: 'https://altf4-games.itch.io/something-in-the-shadows',
    },
  },



];

export default function Hackathons(): JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeYear, setActiveYear] = useState<string>('2025');
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

  // Flatten hackathons for easier indexing - only for active year
  const flattenedHackathons = hackathonsByYear[activeYear] || [];

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
            <h2 className="text-3xl md:text-4xl font-bold text-center">Hackathon Journey</h2>
            <div className="h-1 w-16 md:w-24 bg-primary rounded-full mt-2"></div>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl px-4 text-sm md:text-base">
              A chronological journey through my hackathon experiences, showcasing projects and achievements across various domains and technologies.
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-10 flex-wrap px-4">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-full transition-all ${
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

          {/* Year Marker */}
          <div className="relative" ref={timelineRef}>
            <div className="mb-16">
              {/* Year Marker */}
              <div 
                id={`year-marker-${activeYear}`} 
                className="flex justify-center items-center relative mb-8"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-background border-2 border-primary z-10 rounded-full px-6 py-2">
                  <span className="text-xl font-bold">{activeYear}</span>
                </div>
              </div>

              {/* Hackathons for this year */}
              <div className="space-y-8 md:space-y-12">
                {flattenedHackathons.map((hackathon, index) => {
                  const side = index % 2 === 0 ? 'left' : 'right';
                  return (
                    <div key={`${activeYear}-${index}`} className="relative">
                      {/* Timeline Point */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                        <TimelinePoint 
                          isActive={expandedIndex === index}
                          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                          id={`point-${activeYear}-${index}`}
                        />
                      </div>

                      {/* Card - alternating sides on desktop, centered on mobile */}
                      <div className={`flex ${side === 'left' ? 'md:justify-end justify-center' : 'md:justify-start justify-center'} relative`}>
                        <div className={`w-full md:w-1/2 ${side === 'left' ? 'md:pr-8 px-4' : 'md:pl-8 px-4'} max-w-lg md:max-w-none`}>
                          <HackathonCard
                            hackathon={hackathon}
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

          {/* Journey Start Marker - only show for 2019 */}
          {activeYear === '2019' && (
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -mb-8 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-primary animate-pulse"></div>
              <p className="mt-2 text-sm text-muted-foreground">Journey Begins</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}