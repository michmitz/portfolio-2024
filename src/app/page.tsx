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
      <div
        className={`${
          loaded
            ? "fade-in float max-md:hidden md:visible md:absolute md:top-10 md:right-3 flex flex-col items-center w-[180px]"
            : "hidden"
        }`}
      >
        <div className="select-none flex-col mb-2">
          <p className="text-xl text-sky-200/60 font-bold font-silkscreen">
            Michelle
          </p>
          <p className="text-xl text-white/70 font-bold font-silkscreen">
            Stermitz
          </p>
        </div>
        <Contact loaded={loaded} />
      </div>

      <div className={`${"flex items-center justify-center bg-[#576885]"}`}>
        <div className="max-md:w-[85%] md:w-3/4 md:h-4/5 absolute flex justify-center top-20 max-md:top-6 max-md:h-[90%] min-w-[300px] overflow-hidden">
          <div className="relative w-full flex flex-col max-md:flex-col cursor-auto float rounded">
            <Navigation
              displaySection={displaySection}
              setDisplaySection={setDisplaySection}
            />
            <div className="md:w-[600px] h-full">
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
                  displaySection === "experience"
                    ? "visible mt-8 md:h-4/5 max-md:h-[90%] relative w-full overflow-hidden"
                    : "hidden"
                } `}
              >
                <Timeline />
              </div>
              <div
                id="projects"
                className={`${
                  displaySection === "projects"
                    ? "visible max-md:h-[90%] mt-8 md:h-4/5 relative w-full overflow-y-auto will-change-scroll [&::-webkit-scrollbar-thumb]:opacity-[0.5] [&::-webkit-scrollbar-track]:opacity-[0.5] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-sky-100/20 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-sky-200/40 [&::-webkit-scrollbar-thumb]:rounded-xl scroll max-md:pb-10"
                    : "hidden"
                }`}
              >
                <ProjectGrid timeOfDay={timeOfDay} />
              </div>

              <div
                id="contact"
                className={`${
                  displaySection === "contact"
                    ? "float md:hidden flex flex-col justify-center h-3/4 ml-2"
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
