"use client";

import { appStrings } from "./appStrings";
import { JobExperience } from "./components/JobExperience";
import CloudBackground from "./CloudBackground";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { About } from "./components/About";

export default function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [displaySection, setDisplaySection] = useState<string>("about");
  const [timeOfDay, setTimeOfDay] = useState(0);

  return (
    <main className="w-screen h-screen bg-[#576885]">
      <CloudBackground
        loaded={loaded}
        setLoaded={setLoaded}
        timeOfDay={timeOfDay}
        setTimeOfDay={setTimeOfDay}
      />
      <div className="float max-md:hidden md:visible md:absolute md:top-10 md:right-10">
        <Contact loaded={loaded} />
      </div>
      <div
        className={`${
          loaded ? "flex items-center justify-center bg-[#576885]" : "hidden"
        }`}
      >
        <div className="w-3/4 h-4/5 absolute flex justify-center top-20 rounded-2xl max-md:top-5 max-md:h-[90%] min-w-[300px]">
          <div className="w-full flex flex-col max-md:flex-col cursor-auto float rounded">
            <Navigation
              displaySection={displaySection}
              setDisplaySection={setDisplaySection}
            />
            <div
              className="md:w-[600px] mt-5 max-md:w-full h-full overflow-y-auto will-change-scroll 
              [&::-webkit-scrollbar-thumb]:opacity-[0.5] [&::-webkit-scrollbar-track]:opacity-[0.5]
                      [&::-webkit-scrollbar]:w-2.5
                      [&::-webkit-scrollbar-track]:bg-sky-100/50 [&::-webkit-scrollbar-track]:rounded-3xl
                      [&::-webkit-scrollbar-thumb]:bg-sky-200/70 [&::-webkit-scrollbar-thumb]:rounded-3xl scroll"
            >
              <div
                id="about"
                className={`${
                  displaySection === "about"
                    ? "visible flex h-full items-center"
                    : "hidden"
                }`}
              >
                <About />
              </div>

              <div
                id="experience"
                className={`${
                  displaySection === "experience" ? "visible" : "hidden"
                }`}
              >
                <div className="w-full flex flex-wrap max-md:justify-center gap-4 mt-6">
                  <div className="p-3 self-start rounded-3xl text-sky-100 cursor-pointer tracking-widest font-bold w-fit bg-blue-200/30 flex flex-row gap-2 items-center">
                    <p className="text-md">My Resume</p>
                    <LiaExternalLinkSquareAltSolid size="25px" />
                  </div>
                  <JobExperience
                    startDate="Jan 2024"
                    endDate="Present"
                    jobTitle="Frontend Software Engineer"
                    company="Powell's Books"
                    jobDescription={appStrings.powellsDescription}
                    skills={[
                      "Vue",
                      "TypeScript",
                      "Storybook",
                      "Tailwind",
                      "Vuetify",
                      "Node",
                      "Nuxt",
                    ]}
                  />
                  <JobExperience
                    startDate="Mar 2023"
                    endDate="Oct 2023"
                    jobTitle="Career Break"
                    jobDescription={appStrings.careerGapDescription}
                    skills={["TypeScript", "OpenAI", "Vue", "Tailwind"]}
                  />
                  <JobExperience
                    startDate="May 2021"
                    endDate="March 2023"
                    jobTitle="Software Engineer"
                    company="Olio Apps"
                    jobDescription={appStrings.olioDescription}
                    skills={[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Material UI",
                      "Bootstrap",
                      "Firebase",
                      "Node",
                      "GraphQL",
                      "Figma",
                    ]}
                  />
                  <JobExperience
                    startDate="May"
                    endDate="fill this out"
                    jobTitle="Graphic Designer, Marketing"
                    company="Various Companies"
                    jobDescription={appStrings.graphicDesignDescription}
                    skills={["Adobe Photoshop", "Adobe Illustrator"]}
                  />
                </div>
              </div>

              <div
                id="projects"
                className={`${
                  displaySection === "projects" ? "visible" : "hidden"
                }`}
              >
                <div className="flex flex-wrap gap-4">
                  <Project
                    projectName="This Website"
                    projectType="Personal"
                    description={appStrings.powellsDescription}
                    tech={[
                      "React",
                      "Tailwind",
                      "NextJS",
                      "ThreeJS",
                      "Framer Motion",
                    ]}
                    image=""
                    timeOfDay={timeOfDay}
                  />
                  <Project
                    projectName="Powell's Next"
                    projectType="Powell's Books"
                    description={appStrings.powellsDescription}
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                    timeOfDay={timeOfDay}
                  />
                  <Project
                    projectName="Carbon Title"
                    projectType="Olio Apps"
                    description={appStrings.earplanesDescription}
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                    timeOfDay={timeOfDay}
                  />
                  <Project
                    projectName="EarPlanes"
                    projectType="Olio Apps"
                    description={appStrings.earplanesDescription}
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                    timeOfDay={timeOfDay}
                  />
                  <Project
                    projectName="Receipts"
                    projectType="Olio Apps"
                    description="Social media app"
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                    timeOfDay={timeOfDay}
                  />
                  <Project
                    projectName="ChromaMuse"
                    projectType="Personal"
                    description="A color scheme app using AI"
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                    timeOfDay={timeOfDay}
                  />
                  <Project
                    projectName="Interview Prep"
                    projectType="Personal"
                    description="AI powered interview questions"
                    tech={["React", "OpenAI", "Node", "Prisma", "Supabase"]}
                    image=""
                    timeOfDay={timeOfDay}
                  />
                  <Project
                    projectName="AMAzine"
                    projectType="Alchemy Code Lab"
                    description="This was built with a team of four"
                    tech={["React", "Python"]}
                    image=""
                    timeOfDay={timeOfDay}
                  />
                </div>
              </div>

              <div
                id="contact"
                className={`${
                  displaySection === "contact"
                    ? "float md:hidden visible flex flex-col h-full"
                    : "max-md:hidden hidden"
                }`}
              >
                <Contact loaded={loaded} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
