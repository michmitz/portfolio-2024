import { appStrings } from "./appStrings";
import { Experience } from "./components/Timeline";

export const experiences: Experience[] = [
  {
    id: "1",
    startDate: "1/2024",
    endDate: "Now",
    jobTitle: "Frontend Software Engineer",
    company: "Powell's Books",
    jobDescription: appStrings.powellsDescription,
    skills: [
      "Vue",
      "TypeScript",
      "Storybook",
      "Tailwind",
      "Vuetify",
      "Node",
      "Nuxt",
    ],
  },
  {
    id: "2",
    startDate: "3/2023",
    endDate: "10/2023",
    jobTitle: "Career Break",
    jobDescription: appStrings.careerGapDescription,
    skills: ["TypeScript", "OpenAI", "Vue", "Tailwind"],
  },
  {
    id: "3",
    startDate: "5/2021",
    endDate: "3/2023",
    jobTitle: "Software Engineer",
    company: "Olio Apps",
    jobDescription: appStrings.olioDescription,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Bootstrap",
      "Firebase",
      "Node",
      "GraphQL",
      "Figma",
    ],
  },
  {
    id: "4",
    startDate: "2015",
    endDate: "2019",
    jobTitle: "Graphic Design, Marketing",
    company: "Various Companies",
    jobDescription: appStrings.olioDescription,
    skills: ["Adobe Photoshop", "Adobe Illustrator"],
  },
];
