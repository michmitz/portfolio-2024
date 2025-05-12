"use client";

import CloudBackground from "./CloudBackground";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";
// import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { About } from "./components/About";
import { ProjectGrid } from "./components/ProjectGrid";
import { Resume } from "./components/Resume";
import { ExperienceList } from "./components/ExperienceList";

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
                    ? "visible mt-8 max-md:h-full md:h-4/5"
                    : "hidden"
                } `}
              >
                {/* <Resume loaded={loaded} /> */}

                {/* <ExperienceList /> */}
                <Timeline />
              </div>
              <div
                id="projects"
                className={`${
                  displaySection === "projects" ? "visible mt-10" : "hidden"
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
