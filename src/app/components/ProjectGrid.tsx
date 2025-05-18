"use client";
import { useState, useRef, useEffect } from "react";
import { Project } from "./Project";
import { projects } from "../projectData";
import { motion, AnimatePresence } from "framer-motion";

type ProjectGridProps = {
  timeOfDay: number;
};

export const ProjectGrid: React.FC<ProjectGridProps> = ({ timeOfDay }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <>
      <AnimatePresence>
        <motion.div className="flex flex-wrap gap-4 w-full max-md:px-5 max-md:pb-8 md:px-2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`${
                selectedId === null
                  ? "bg-blue-300/10 hover:backdrop-saturate-150 backdrop-blur-xl"
                  : ""
              } rounded-xl w-[calc(33.333%-1rem)] max-lg:w-[calc(50%-0.5rem)] max-md:w-full`}
              animate={{
                filter: selectedId !== null ? "blur(8px)" : "blur(0px)",
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              onClick={() => setSelectedId(project.id)}
            >
              <Project {...project} timeOfDay={timeOfDay} isSelected={false} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <div className="md:w-[600px] max-md:w-full md:px-2 fixed top-20 left-0 right-0 bottom-0 z-20 flex justify-center items-center">
            <motion.div
              ref={modalRef}
              layoutId={`project-${selectedProject.id}`}
              className="p-6 w-[400px]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              {/* <motion.div
                layoutId={`project-${selectedProject.id}`}
                className=""
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              > */}
              <Project
                {...selectedProject}
                timeOfDay={timeOfDay}
                isSelected={true}
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-white font-semibold tracking-wide bg-gradient-to-br from-[#a7c5e7] via-[#a3b6d6] to-[#7aa3d9] px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
              {/* </motion.div> */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
