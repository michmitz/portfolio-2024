"use client";

import { appStrings } from "./appStrings";
import { JobExperience } from "./components/JobExperience";
import CloudBackground from "./CloudBackground";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";
// import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { About } from "./components/About";
import { ProjectGrid } from "./components/ProjectGrid";

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
      <div className="float max-md:hidden md:visible md:absolute md:top-10 md:right-10 flex flex-col items-center">
        <div className="select-none flex-col mb-5">
          <p className="text-xl text-sky-200 font-bold font-silkscreen">
            Michelle
          </p>
          <p className="text-xl text-white font-bold font-silkscreen">
            Stermitz
          </p>
        </div>
        <Contact loaded={loaded} />
      </div>
      <div
        className={`${
          loaded ? "flex items-center justify-center bg-[#576885]" : "hidden"
        }`}
      >
        <div className="w-3/4 h-4/5 absolute flex justify-center top-20 rounded-2xl max-md:top-6 max-md:h-[90%] min-w-[300px]">
          <div className="w-full flex flex-col max-md:flex-col cursor-auto float rounded">
            <Navigation
              displaySection={displaySection}
              setDisplaySection={setDisplaySection}
            />
            <div
              className="md:w-[700px] mt-5 max-md:w-full h-full overflow-y-auto will-change-scroll 
              [&::-webkit-scrollbar-thumb]:opacity-[0.5] [&::-webkit-scrollbar-track]:opacity-[0.5]
                      [&::-webkit-scrollbar]:w-2.5
                      [&::-webkit-scrollbar-track]:bg-sky-100/20 [&::-webkit-scrollbar-track]:rounded-2xl
                      [&::-webkit-scrollbar-thumb]:bg-sky-200/30 [&::-webkit-scrollbar-thumb]:rounded-2xl scroll"
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
                  displaySection === "experience" ? "visible fade-in" : "hidden"
                }`}
              >
                <div className="w-full flex flex-wrap max-md:justify-center gap-4 mt-6">
                  <JobExperience
                    startDate="1/2024"
                    endDate="Now"
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
                    startDate="3/2023"
                    endDate="10/2023"
                    jobTitle="Career Break"
                    jobDescription={appStrings.careerGapDescription}
                    skills={["TypeScript", "OpenAI", "Vue", "Tailwind"]}
                  />
                  <JobExperience
                    startDate="5/2021"
                    endDate="3/2023"
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
                    startDate="2015"
                    endDate="2019"
                    jobTitle="Graphic Design, Marketing"
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
                <ProjectGrid timeOfDay={timeOfDay} />
              </div>

              <div
                id="contact"
                className={`${
                  displaySection === "contact"
                    ? "float md:hidden flex flex-col justify-center h-3/4"
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
