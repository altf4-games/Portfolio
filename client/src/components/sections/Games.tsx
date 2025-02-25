import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const games = [
  {
    title: "Fragments of Fear: Not Alone",
    description:
      "You're walking home late at night on the streets with a serial killer on the loose.",
    links: {
      play: "https://altf4-games.itch.io/not-alone"
    }
  },
  {
    title: "Midnight Visitor",
    description:
      "In this detective horror game, solve a murder mystery within a haunted house.",
    links: {
      play: "https://altf4-games.itch.io/midnight-visitor"
    }
  },
  {
    title: "Dead Inside",
    description:
      "A short horror experience about being stranded inside your house stuck in a time loop.",
    links: {
      play: "https://altf4-games.itch.io/dead-inside"
    }
  },
  {
    title: "Captive",
    description:
      "Silence your fears, and outwit the killer in 'Captive'—where survival is your only escape, and every step could be your last.",
    links: {
      play: "https://altf4-games.itch.io/captive"
    }
  },
  {
    title: "Silent House",
    description:
      "In the chilling depths of Silent House, survival is the only melody as you navigate the haunting echoes of a PS1-style nightmare.",
    links: {
      play: "https://altf4-games.itch.io/silent-house"
    }
  },
  {
    title: "Night Watch",
    description:
      "Your objective in Night Watch is to carefully observe the live feeds from various cameras placed strategically throughout the location.",
    links: {
      play: "https://altf4-games.itch.io/night-watch"
    }
  },
  {
    title: "Heart Quake",
    description:
      "Heart Quake is first person shooter with 1-bit graphics developed in 3 days for Winter MelonJam 2023. Received Honorable Mention",
    links: {
      play: "https://altf4-games.itch.io/heart-quake"
    }
  },
  {
    title: "The Outer Limits",
    description:
      "A horror game inspired by Iron Lung made in 7 days for Brackeys Game Jam 2023.2 Ranked #87 Overall & #35, #43 in Graphics & Innovation.",
    links: {
      play: "https://altf4-games.itch.io/the-outer-limits"
    }
  },
  {
    title: "Echoes of Fear (Prototype)",
    description:
      "Echoes of Fear is a realistic first person shooter game, You're tasked with rescuing all the hostages. But not everything is as what it seems.",
    links: {
      play: "https://altf4-games.itch.io/echoes-of-fear"
    }
  },
  {
    title: "Welcome To The Dark Web",
    description:
      "You just joined your new job as the deep web moderator.",
    links: {
      play: "https://altf4-games.itch.io/wttdw"
    }
  },
  {
    title: "Hotel Nightmare",
    description:
      "Hotel Nightmare is a short horror game inspired by IMSCARED.",
    links: {
      play: "https://altf4-games.itch.io/hotel-nightmare"
    }
  },
  {
    title: "The night of '87",
    description:
      "A PSX horror game featuring a lot of zombies.",
    links: {
      play: "https://altf4-games.itch.io/the-night-of-87"
    }
  },
  {
    title: "Fragments of Fear: Wash and Watch",
    description: "A short episodic horror game",
    links: {
      play: "https://altf4-games.itch.io/fragments-of-fear-wash-and-watch"
    }
  },
  {
    title: "Game.exe",
    description:
      "What happens when you get stuck playing a game inside of a game.",
    links: {
      play: "https://altf4-games.itch.io/game-exe"
    }
  }
];

export default function Games() {
  return (
    <section id="games" className="py-16 bg-background justify-center items-center flex">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Featured Games</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {games.map((game, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>{game.title}</CardTitle>
                      <CardDescription>{game.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-4">
                      <Button asChild>
                        <a href={game.links.play} target="_blank" rel="noopener noreferrer">
                          Play Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
