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
    <main className="relative min-h-screen w-full bg-[#576885]">
      <div className="fixed inset-0 z-0 w-full h-full">
        <CloudBackground
          loaded={loaded}
          setLoaded={setLoaded}
          timeOfDay={timeOfDay}
          setTimeOfDay={setTimeOfDay}
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <header className="relative z-[110] flex flex-col md:flex-row md:items-center md:justify-between w-full px-6 pt-6 md:pt-10 pb-4 gap-4">
          <Navigation
            displaySection={displaySection}
            setDisplaySection={setDisplaySection}
          />
          <div className="max-md:hidden fixed top-5 right-5 z-[200] flex items-center">
            <Contact />
          </div>
        </header>

        <div
          id="contact"
          className={
            displaySection === "contact"
              ? "md:hidden fixed left-0 right-0 z-[100] top-[calc(7rem+env(safe-area-inset-top,0px))] px-6 pointer-events-none"
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

        <div className="relative z-10 w-full px-6 pb-12 md:pb-16 flex flex-col items-center justify-start flex-1 min-h-0">
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
            <h1 className="mb-6 w-full text-center text-white font-bold text-2xl tracking-wider">
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
