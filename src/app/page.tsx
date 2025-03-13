"use client";

/* eslint-disable @next/next/no-img-element */
import { appStrings } from "./appStrings";
import { JobExperience } from "./components/JobExperience";
import CloudBackground from "./CloudBackground";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Project } from "./components/Project";

export default function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [displaySection, setDisplaySection] = useState<string>("about");
  return (
    <main className="w-screen h-screen bg-[#576885]">
      <CloudBackground loaded={loaded} setLoaded={setLoaded} />
      <div
        className={`${
          loaded ? "flex items-center justify-center bg-[#576885]" : "hidden"
        }`}
      >
        <div className="w-4/5 h-4/5 absolute flex justify-center top-20 rounded-2xl max-md:top-5 max-md:h-[90%] min-w-[300px]">
          <div className="w-full flex flex-col max-md:flex-col cursor-auto float rounded">
            <Navigation
              displaySection={displaySection}
              setDisplaySection={setDisplaySection}
            />
            <div
              className="mt-3 max-md:w-full h-full w-4/5 overflow-y-auto will-change-scroll [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:bg-sky-100 [&::-webkit-scrollbar-track]:rounded-xl
                      [&::-webkit-scrollbar-thumb]:bg-blue-200 [&::-webkit-scrollbar-thumb]:rounded-xl scroll"
            >
              <div
                id="about"
                className={`${
                  displaySection === "about"
                    ? "visible flex h-full items-center"
                    : "hidden"
                }`}
              >
                <div>
                  <p className="text-blue-200 text-3xl font-rubikMono">
                    Welcome
                  </p>
                  <p className="text-white font-semibold font-nunito rounded-3xl">
                    I&apos;m a software developer based in the Pacific Northwest.
                  </p>
                </div>
              </div>

              <div
                id="experience"
                className={`${
                  displaySection === "experience" ? "visible" : "hidden"
                }`}
              >
                <div className="w-full flex flex-wrap max-md:justify-center gap-4 mt-6">
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
                <div className="w-full flex flex-wrap max-md:justify-center mt-6">
                  <Project
                    projectName="Powells Next"
                    projectType="Powell's Books"
                    description={appStrings.powellsDescription}
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                  />
                  <Project
                    projectName="Carbon Title"
                    projectType="Olio Apps"
                    description={appStrings.earplanesDescription}
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                  />
                  <Project
                    projectName="EarPlanes"
                    projectType="Olio Apps"
                    description={appStrings.earplanesDescription}
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                  />
                  <Project
                    projectName="Receipts"
                    projectType="Olio Apps"
                    description="Social media app"
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                  />
                  <Project
                    projectName="ChromaMuse"
                    projectType="Personal"
                    description="A color scheme app using AI"
                    tech={["React", "Tailwind", "OpenAI"]}
                    image=""
                  />
                  <Project
                    projectName="Interview Prep"
                    projectType="Personal"
                    description="AI powered interview questions"
                    tech={["React", "OpenAI", "Node", "Prisma", "Supabase"]}
                    image=""
                  />
                  <Project
                    projectName="AMAzine"
                    projectType="Alchemy Code Lab"
                    description="This was built with a team of four"
                    tech={["React", "Python"]}
                    image=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
