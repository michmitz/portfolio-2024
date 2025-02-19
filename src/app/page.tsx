"use client"

/* eslint-disable @next/next/no-img-element */
import { appStrings } from "./appStrings";
import { JobExperience } from "./components/JobExperience";
import CloudBackground from "./CloudBackground";
import {useState} from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  return (
    <main className="w-screen h-screen font-nunito">
      <CloudBackground loaded={loaded} setLoaded={setLoaded} />
      <div className={`${loaded ? 'flex items-center justify-center fade-in' : 'hidden'}`}>
        <div className="w-3/4 h-4/5 border absolute flex justify-center top-20">
          <div className="w-full flex justify-between max-md:flex-col cursor-auto">
            {/* When small, maybe make this a sticky hamburger menu with a cloud icon or something */}
            <div className="float rounded-3xl flex flex-col justify-center items-center max-md:w-full max-md:mb-5 pl-5">
              <div className="select-none">
                <p className="text-4xl text-white font-bold font-cinzel">
                  Michelle
                </p>
                <p className="text-4xl text-white font-bold font-cinzel">
                  Stermitz
                </p>
              </div>
              <div className="mt-3 text-xl text-white cursor-pointer">
                <p>About</p>
                <p>Experience</p>
                <p>Professional Projects</p>
                <p>Personal Projects</p>
                {/* <p>Secret Page</p> */}
              </div>
            </div>

            <div className="w-2/3 overflow-y-scroll p-6 light-glass max-md:w-full">
              <h2 className="my-3 ml-1 text-3xl text-white font-cinzel font-bold select-none">
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
          </div>
        </div>
      </div>
    </main>
  );
}
