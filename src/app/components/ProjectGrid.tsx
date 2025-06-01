"use client";
import { useState, useRef, useEffect } from "react";
import { Project } from "./Project";
import { projects } from "../projectData";
import { motion, AnimatePresence } from "framer-motion";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

type ProjectGridProps = {
  timeOfDay: number;
};

export const ProjectGrid: React.FC<ProjectGridProps> = ({ timeOfDay }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  const checkOverflow = () => {
    if (scrollContainerRef.current) {
      const hasVerticalOverflow =
        scrollContainerRef.current.scrollHeight >
        scrollContainerRef.current.clientHeight;
      setHasOverflow(hasVerticalOverflow);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 300,
        behavior: "smooth",
      });
    }
  };

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
      <div className="relative h-full">
        <AnimatePresence>
          <motion.div
            ref={scrollContainerRef}
            className="flex flex-wrap gap-4 w-[calc(100%-60px)] max-md:w-full max-md:px-5 max-md:pb-10 md:px-2 h-full overflow-y-auto max-md:[&::-webkit-scrollbar-thumb]:opacity-[0.5] max-md:[&::-webkit-scrollbar-track]:opacity-[0.5] max-md:[&::-webkit-scrollbar]:w-2 max-md:[&::-webkit-scrollbar-track]:bg-sky-100/20 max-md:[&::-webkit-scrollbar-track]:rounded-xl max-md:[&::-webkit-scrollbar-thumb]:bg-sky-200/40 max-md:[&::-webkit-scrollbar-thumb]:rounded-xl md:[&::-webkit-scrollbar]:hidden max-md:justify-center"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`${
                  selectedId === null
                    ? "bg-blue-300/10 hover:backdrop-saturate-150 backdrop-blur-xl"
                    : ""
                } rounded-xl w-[calc(33.333%-1rem)] max-lg:w-[calc(50%-0.5rem)] max-md:w-full h-[130px]`}
                animate={{
                  filter: selectedId !== null ? "blur(8px)" : "blur(0px)",
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                onClick={() => setSelectedId(project.id)}
              >
                <Project
                  {...project}
                  timeOfDay={timeOfDay}
                  isSelected={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {hasOverflow && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-white/5 backdrop-blur-sm p-2 rounded-lg hidden md:flex">
            <button
              onClick={scrollUp}
              className="hover:scale-110 transition-transform"
              aria-label="scroll-up"
            >
              <BiUpArrow className="text-blue-300" size="30px" />
            </button>
            <button
              onClick={scrollDown}
              className="hover:scale-110 transition-transform"
              aria-label="scroll-down"
            >
              <BiDownArrow className="text-blue-300" size="30px" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="md:w-[550px] max-md:w-full fixed top-20 left-0 right-0 bottom-0 z-20 flex justify-center items-center">
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
