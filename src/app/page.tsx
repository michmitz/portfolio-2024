"use client";

import CloudBackground from "./CloudBackground";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { ProjectGrid } from "./components/ProjectGrid";
import Timeline from "./components/Timeline";

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

      <div className="fixed h-full w-full top-0 left-0 overflow-y-auto overflow-x-hidden">
        <header className="relative z-[110] flex flex-col md:flex-row md:items-center md:justify-between w-full px-6 pt-6 md:pt-10 pb-4 gap-4 shrink-0">
          <Navigation
            displaySection={displaySection}
            setDisplaySection={setDisplaySection}
          />
          <div className="max-md:hidden fixed top-5 right-10 z-[200] flex items-center">
            <Contact />
          </div>
        </header>

        <div
          id="contact"
          className={
            displaySection === "contact"
              ? "md:hidden shrink-0 px-6 pointer-events-none"
              : "hidden"
          }
        >
          <div className="pointer-events-auto max-w-5xl mx-auto w-full flex flex-col items-center pt-4 md:pt-6">
            <h1 className="mb-6 w-full text-center text-white font-bold text-2xl tracking-wider">
              CONTACT
            </h1>
            <Contact variant="inline" />
          </div>
        </div>

        <div className="absolute z-10 w-full px-6 pb-12 md:pb-16 flex flex-col items-center justify-start flex-1">
          <div className="max-w-5xl w-full mx-auto">
            <div
              id="about"
              className={
                displaySection === "about"
                  ? "visible pt-12 md:pt-[200px] w-full"
                  : "hidden"
              }
            >
              <About />
            </div>

            <div
              id="experience"
              className={
                displaySection === "experience"
                  ? "visible flex w-full flex-col items-center pt-4 md:pt-10"
                  : "hidden"
              }
            >
              <h1 className="mb-10 w-full text-center text-white font-bold text-2xl tracking-wider">
                EXPERIENCE
              </h1>
              <div className="flex w-full flex-col items-center">
                <Timeline displaySection={displaySection} />
              </div>
            </div>

            <div
              id="projects"
              className={
                displaySection === "projects"
                  ? "visible flex w-full flex-col items-center pt-4 md:pt-10"
                  : "hidden"
              }
            >
              <h1 className="mb-6 w-full text-center text-white font-bold text-2xl tracking-wider">
                PROJECTS
              </h1>
              <div className="w-full">
                <ProjectGrid timeOfDay={timeOfDay} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}