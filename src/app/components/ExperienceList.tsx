import React, { useState } from "react";
import { Experience } from "./Experience";
import { experiences } from "../experienceData";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

export const ExperienceList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(index);
    setTimeout(() => {
      document.getElementById(`experience-${index}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div
      className="relative h-full overflow-y-auto scroll-smooth pr-8 py-2 min-h-0"
      style={{ overflowAnchor: "none" }}
    >
      {/* Full-height vertical timeline line */}
      <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-sky-200/30 z-0" />

      {/* Experience cards */}
      <div className="flex flex-col gap-8 relative z-10">
        {experiences.map((exp, index) => (
          <div id={`experience-${index}`} key={index}>
            <Experience
              {...exp}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
