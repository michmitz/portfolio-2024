"use client";

/* eslint-disable @next/next/no-img-element */
import { appStrings } from "./appStrings";
import { JobExperience } from "./components/JobExperience";
import CloudBackground from "./CloudBackground";
import { useState } from "react";
import { ProfessionalProject } from "./components/ProfessionalProject";
import { Navigation } from "./components/Navigation";

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
        <div className="w-3/4 h-4/5 absolute flex justify-center top-20 rounded-2xl max-md:top-5 max-md:h-[90%] min-w-[300px]">
          <div className="w-full flex justify-between max-md:flex-col cursor-auto float">
            <Navigation
              displaySection={displaySection}
              setDisplaySection={setDisplaySection}
            />
            <div
              className="w-2/3 p-6 max-md:w-full max-md:h-full rounded-r-xl shadow-lg backdrop-blur-lg backdrop-saturate-150 overflow-y-auto will-change-scroll [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:bg-sky-100 [&::-webkit-scrollbar-track]:rounded-xl
                      [&::-webkit-scrollbar-thumb]:bg-blue-300 [&::-webkit-scrollbar-thumb]:rounded-xl scroll"
            >
              <div
                id="about"
                className={`${
                  displaySection === "about"
                    ? "visible flex flex-col h-full align-center justify-center"
                    : "hidden"
                }`}
              >
                <p className="text-blue-200 text-3xl font-rubikMono">Welcome</p>
                <p className="text-white font-semibold font-nunito rounded-3xl mt-3">
                  About
                </p>
              </div>
              <div
                id="experience"
                className={`${
                  displaySection === "experience" ? "visible fade-in" : "hidden"
                }`}
              >
                <h2 className="my-4 ml-1 text-3xl text-blue-200 font-rubikMono font-bold select-none scroll">
                  Experience
                </h2>
                {/* <span className="bg-blue-200 text-pink-800 text-lg font-semibold px-3 py-1 rounded-full shadow-sm transition-transform hover:scale-105 float cursor-pointer">
                  Click here for my resume
                </span> */}
                <div className="w-full flex flex-wrap justify-center gap-4 max-md:justify-center">
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
                id="professional-projects"
                className={`${
                  displaySection === "professional-projects"
                    ? "visible fade-in"
                    : "hidden"
                }`}
              >
                <h2 className="my-4 ml-1 text-3xl text-white font-rubikMono font-bold select-none">
                  Professional Projects
                </h2>
                <div className="w-full flex flex-wrap justify-center gap-4 max-md:justify-center">
                  <ProfessionalProject
                    initials="PN"
                    projectName="Powell's Next"
                    description={appStrings.powellsNextDescription}
                  />
                  <ProfessionalProject
                    initials="CT"
                    projectName="Carbon Title"
                    description={appStrings.carbonTitleDescription}
                  />
                  <ProfessionalProject
                    initials="SR"
                    projectName="Solar Redline"
                    description={appStrings.solarRedlineDescription}
                    image="/assets/professional-projects/cloud-solar-icon.png"
                  />
                  <ProfessionalProject
                    initials="EP"
                    projectName="EarPlanes"
                    description={appStrings.earplanesDescription}
                    image="/assets/professional-projects/cloud-earplanes.png"
                  />
                  <ProfessionalProject
                    initials="GT"
                    projectName="Gut Health App"
                    description={appStrings.giThriveDescription}
                  />
                  <ProfessionalProject
                    initials="SMA"
                    projectName="Social Media App"
                    description={appStrings.receiptsDescription}
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
