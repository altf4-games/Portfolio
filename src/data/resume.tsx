import { Icons } from "@/components/icons";
import { HomeIcon, JoystickIcon } from "lucide-react";

export const DATA = {
  name: "Pradyum Mistry",
  initials: "PM",
  url: "https://pradyum.me",
  location: "Mumbai, Maharashtra",
  locationLink: "https://www.google.com/maps/place/Mumbai,+Maharashtra",
  description:
    "Computer Engineering student and creator of Alt F4 Games, passionate about web development, AI/ML, blockchain, and game development. Always exploring new ideas through projects and hackathons.",
  summary:
    "Computer Engineering student with a strong foundation in web development, AI/ML, blockchain, and game development. As the sole developer behind [Alt F4 Games](https://altf4games.vercel.app/), I create indie games reaching a wide audience. I've competed in numerous [hackathons](#hackathons) and developed [projects](#projects) that push the boundaries of technology through innovative solutions to complex problems.",
  avatarUrl: "",
  skills: [
    "C/C++",
    "C#",
    "JavaScript",
    "Python",
    "Java",
    "HTML",
    "CSS",
    "Rust",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "Firebase",
    "Scikit-learn",
    "Three.js",
    "Docker",
    "Unity",
    "Unreal Engine",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://altf4games.vercel.app/", icon: JoystickIcon, label: "Games" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "xxx-xxx-xxxx",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/altf4-games",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/pradyum-mistry",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@altf4-games",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pradyum.g@somaiya.edu",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Team Vision: AR/VR Club",
      href: "",
      badges: ["Tech Head"],
      location: "Mumbai, Maharashtra",
      title: "Tech Head",
      start: "July 2024",
      end: "Present",
      description:
        "Led the development of immersive AR/VR experiences. Organized workshops and managed the club website to enhance user engagement.",
    },
  ],
  education: [
    {
      school: "K.J. Somaiya College of Engineering",
      href: "https://kjsce.somaiya.edu/",
      degree: "B.Tech in Computer Engineering",
      logoUrl: "https://lms-kjsce.somaiya.edu/pluginfile.php/1/theme_essential/logo/1716970170/engg-logo.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects:
  [
    {
      title: "AltF4 Games",
      href: "https://altf4games.vercel.app/",
      dates: "Ongoing",
      active: true,
      description:
        "My indie game development studio altf4 games where I've developed over 20 unique games, spanning genres from horror to fast-paced action, designed to be engaging and accessible to a wide audience. The games have collectively achieved 150k+ downloads and a dedicated community of 750+ followers across platforms.",
      technologies: ["Unity", "C#", "JavaScript", "Game Development"],
      links: [
        {
          type: "Website",
          href: "https://altf4games.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Itch.io",
          href: "https://altf4-games.itch.io/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/developer?id=AltF4+Games",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/altf4-games/alt-f4.games/blob/main/public/AltF4%20Demo.mp4?raw=true",
    },
    {
      title: "Code Snip",
      href: "https://code-snip.vercel.app/",
      dates: "March 2024",
      active: true,
      description:
        "Code Snip is a web platform designed to make code sharing easy, efficient, and user-friendly. Users can save and share code snippets instantly, with features like syntax highlighting, unique URLs for easy access, and multi-language support.",
      technologies: ["Html", "Javascript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://code-snip.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/altf4-games/CodeSnip/blob/main/CodeSnip%20Demo.mp4?raw=true",
    },
  ],

  hackathons: [
    {
      title: "Winter MelonJam 2023 ❄️🍈",
      dates: "28 Dec 2023 - 31 Dec 2023",
      location: "International",
      description:
        "Developed a first-person shooter called Heart Quake in just three days for Winter MelonJam 2023, where the player charms enemies with the Charm-inator 3000 to turn them into allies. I received an honorable mention for it!",
      image: "https://img.itch.zone/aW1hZ2UyL2phbS8zODM1NTkvMTQxODYzNzIucG5n/original/ITmCOx.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/altf4-games/Heart-Quake",
        },
        {
          title: "Itch.io",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://altf4-games.itch.io/heart-quake",
        },
      ]
    },
    {
      title: "Karnataka State Police Datathon",
      dates: "Jan 2024 - Apr 2024",
      location: "Bangalore",
      description:
        "Designed and implemented a dashboard using AI for real-time accident prediction and data analysis. Achieved top 50 placement in the hackathon.",
      image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-01-12T05%3A33%3A05.617Z-dp%20%E2%80%93%202.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/altf4-games/KSP-DA-Dashboard",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ksp-da-dashboard.vercel.app/",
        },
      ]
    },
    {
      title: "Devopia",
      dates: "Apr 2024 - Apr 2024",
      location: "KJSCE, Mumbai",
      description:
        "Developed a blockchain-powered ride-hailing app ensuring fair pricing and secure payments with Metamask integration for crypto transactions.",
      image: "https://devopia.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fbeccf1c4339c496e9647855afede2063%2Fassets%2Ffavicon%2F25.png&w=1440&q=75",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/altf4-games/savaaree-ride-app",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://savaaree-ride-app.vercel.app/",
        },
      ]
    },
    {
      title: "HumanAIze Hackathon <FinTech Edition>",
      dates: "June 2024 - July 2024",
      location: "India",
      description:
        "Developed an app for predicting credit scores and loan approvals using AI. Included comprehensive financial health assessments and credit scoring.",
      image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-05-24T07%3A49%3A04.995Z-dp.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/altf4-games/CreditPredict",
        },
      ]
    
    },
    {
      title: "Cosmic Craftathon",
      dates: "Sept 2024 - Oct 2024",
      location: "IIIT Nagpur",
      description:
        "Co-developed a thrilling 2D space exploration game, Starlight Escape, where a scientist is on the run from space bandits, navigating new planets and upgrading my customizable ship in a dynamic environment. Our team made it to the top 4!",
      image: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-66e1ee07bc835_design_assets_-_for_nmr__2_.png?d=200x200",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/altf4-games/Starlight-Escape",
        },
        {
          title: "Itch.io",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://altf4-games.itch.io/starlight-escape",
        },
      ]
    },
    {
      title: "Based India",
      dates: "27 Sep 2024 - 21 Oct 2024",
      location: "India",
      description:
        "Developed Grid4Good, a collaborative digital art platform that enhances community engagement by allowing users to buy pixels for a shared canvas, with proceeds supporting charities and raising awareness of local issues through blockchain technology.",
      image: "https://based-india.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F8b6f3a95cc864974be1aa571c378cd5b%2Fassets%2Ffavicon%2F831.png&w=1440&q=75",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/altf4-games/Grid4Good",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://grid4good.vercel.app/",
        },
      ]
    },
    {
      title: "Smart City Hackathon",
      dates: "Oct 2024 - Oct 2024",
      location: "International",
      description:
        "Created SafeCommute, an app designed to enhance urban navigation by providing accident heatmaps, real-time traffic and weather updates, and safer route recommendations, prioritizing commuter safety.",
      image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/012/640/datas/medium_square.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/altf4-games/SafeCommute",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://safecommute.vercel.app/",
        },
      ]
    
    },
    {
      title: "Mumbai Hacks",
      dates: "25 Oct 2024 - 26 Oct 2024",
      location: "Atlas SkillTech University, Mumbai",
      description:
        "Co-developed an AI-driven marketing platform, Cultur.AI, tailored to India's diverse market for creating culturally relevant ads, bridging AI with local traditions.",
      image: "https://mumbaihacks.com/_next/static/media/logo_hackathon_transparent_dark.9ce0a6f1.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/altf4-games/MumbaiHacks",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://culturai.vercel.app/",
        },
      ]
    },
  ],
} as const;
