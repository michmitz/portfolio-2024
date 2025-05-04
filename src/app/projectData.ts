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
};

export const projects: ProjectProps[] = [
  {
    id: 1,
    projectName: "This Website!",
    projectType: "personal",
    company: "Personal",
    description: appStrings.powellsDescription,
    tech: ["React", "Tailwind", "NextJS", "ThreeJS", "Framer Motion"],
    image: "",
  },
  {
    id: 2,
    projectName: "Powell's Next",
    projectType: "work",
    company: "Powell's",
    description: appStrings.powellsDescription,
    tech: ["React", "Tailwind", "OpenAI"],
    image: "",
  },
  {
    id: 3,
    projectName: "Carbon Title",
    projectType: "work",
    company: "Olio Apps",
    description: appStrings.earplanesDescription,
    tech: ["React", "Tailwind", "OpenAI"],
    image: "",
  },
  {
    id: 4,
    projectName: "EarPlanes",
    projectType: "work",
    company: "Olio Apps",
    description: appStrings.earplanesDescription,
    tech: ["React", "Tailwind", "OpenAI"],
    image: "",
  },
  {
    id: 5,
    projectName: "Receipts",
    projectType: "work",
    company: "Olio Apps",
    description: "Social media app",
    tech: ["React", "Tailwind", "OpenAI"],
    image: "",
  },
  {
    id: 6,
    projectName: "ChromaMuse",
    projectType: "personal",
    company: "Personal",
    description: "A color scheme app using AI",
    tech: ["React", "Tailwind", "OpenAI"],
    image: "",
  },
  {
    id: 7,
    projectName: "Interview Prep",
    projectType: "personal",
    company: "Personal",
    description: "AI powered interview questions",
    tech: ["React", "OpenAI", "Node", "Prisma", "Supabase"],
    image: "",
  },
  // {
  //   id: 8,
  //   projectName: "AMAzine",
  //   projectType: "school",
  //   company: "School",
  //   description: "This was built with a team of four",
  //   tech: ["React", "Python"],
  //   image: "",
  // },
];
