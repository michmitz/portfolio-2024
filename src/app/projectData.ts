import { appStrings } from "./appStrings";
import { ProjectType } from "./components/Project";

type ProjectProps = {
  id: number;
  projectName: string;
  projectType: ProjectType;
  company?: string;
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
    description: "",
    tech: ["React", "Tailwind", "Next", "Three.js", "Framer Motion"],
    image: "",
  },
  {
    id: 2,
    projectName: "Powell's Next",
    projectType: "work",
    company: "Powell's Books",
    description: appStrings.powellsNextDescription,
    tech: ["Vue", "Tailwind", "Nuxt", "Storybook", "Vuetify"],
    image: "",
    link: "https://www.powells.com",
  },
  {
    id: 3,
    projectName: "ColorMuse",
    projectType: "personal",
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
    description: appStrings.interviewPrepDescription,
    tech: ["React", "Next", "OpenAI", "Node", "Prisma", "Supabase"],
    image: "",
    link: "https://ai-interview-questions.netlify.app",
  },
  {
    id: 9,
    projectName: "Tarot NPM Package",
    projectType: "personal",
    description: appStrings.tarotDescription,
    tech: ["Node"],
    image: "",
    link: "https://www.npmjs.com/package/terminal-tarot",
  },
];

const byType = projects.reduce<Record<string, ProjectProps[]>>((acc, p) => {
  const t = p.projectType;
  if (!acc[t]) acc[t] = [];
  acc[t].push(p);
  return acc;
}, {});

export const projectSections: { key: string; title: string; projects: ProjectProps[] }[] = [
  { key: "work", title: "Work", projects: byType.work ?? [] },
  { key: "personal", title: "Independent", projects: byType.personal ?? [] },
  // { key: "collab", title: "Collaboration", projects: byType.collab ?? [] },
];
