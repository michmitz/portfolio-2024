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
    <main className="w-screen h-screen font-nunito bg-[#616c84]">
      <CloudBackground loaded={loaded} setLoaded={setLoaded} />
      <div
        className={`${"flex items-center justify-center fade-in bg-[#616c84]"}`}
      >
        <div className="w-3/4 h-4/5 border absolute flex justify-center top-20 rounded-2xl max-md:top-5 max-md:h-[90%]">
          <div className="w-full flex justify-between max-md:flex-col cursor-auto">
            <Navigation
              displaySection={displaySection}
              setDisplaySection={setDisplaySection}
            />

            <div className="w-2/3 overflow-y-scroll p-6 light-glass max-md:w-full max-md:h-full">
              <div
                id="about"
                className={`${
                  displaySection === "about" ? "visible" : "hidden"
                }`}
              >
                About Section
              </div>

              <div
                id="experience"
                className={`${
                  displaySection === "experience" ? "visible fade-in" : "hidden"
                }`}
              >
                <h2 className="my-4 ml-1 text-3xl text-white font-cinzel font-bold select-none">
                  Experience
                </h2>
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
                <h2 className="my-4 ml-1 text-3xl text-white font-cinzel font-bold select-none">
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
