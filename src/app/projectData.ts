import { appStrings } from "./appStrings";
import { ProjectType } from "./components/Project";

type ProjectProps = {
  id: number;
  projectName: string;
  projectType: ProjectType;
  company: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
};

export const projects: ProjectProps[] = [
  {
    id: 1,
    projectName: "This Website!",
    projectType: "personal",
    company: "Personal",
    description: appStrings.portfolioDescription,
    tech: ["React", "Tailwind", "Next", "Three.js", "Framer Motion"],
    image: "",
  },
  {
    id: 2,
    projectName: "Powell's Next",
    projectType: "work",
    company: "Powell's",
    description: appStrings.powellsNextDescription,
    tech: ["Vue", "Tailwind", "Nuxt", "Storybook", "Vuetify"],
    image: "",
    link: "https://www.powells.com",
  },
  {
    id: 3,
    projectName: "ColorMuse",
    projectType: "personal",
    company: "Personal",
    description: appStrings.colorMuseDescription,
    tech: ["React", "Tailwind", "OpenAI"],
    image: "",
    link: "https://colormuse.netlify.app",
  },
  {
    id: 4,
    projectName: "Carbon Title",
    projectType: "work",
    company: "Olio Apps",
    description: appStrings.carbonTitleDescription,
    tech: ["React", "NextJs"],
    image: "",
  },
  {
    id: 5,
    projectName: "EarPlanes",
    projectType: "work",
    company: "Olio Apps",
    description: appStrings.earplanesDescription,
    tech: ["React Native"],
    image: "",
  },
  {
    id: 6,
    projectName: "Solar Panel Quote App",
    projectType: "work",
    company: "Olio Apps",
    description: appStrings.solarRedlineDescription,
    tech: ["Material UI", "React", "Firebase"],
    image: "",
  },
  {
    id: 7,
    projectName: "Social Media App",
    projectType: "work",
    company: "Olio Apps",
    description: appStrings.receiptsDescription,
    tech: ["React Native"],
    image: "",
  },
  {
    id: 8,
    projectName: "AI Interview Prep",
    projectType: "personal",
    company: "Personal",
    description: appStrings.interviewPrepDescription,
    tech: ["React", "Next", "OpenAI", "Node", "Prisma", "Supabase"],
    image: "",
    link: "https://ai-interview-questions.netlify.app",
  },
];
