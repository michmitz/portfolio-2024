/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { experiences } from "../experienceData";

export interface Experience {
  id: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  company?: string;
  jobDescription?: string;
  skills: readonly string[];
}

interface TimelineCardProps {
  item: Experience;
  isActive: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, isActive }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`relative w-[80%] p-4 md:p-6 my-3 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-sky-200/10 border border-white/20 shadow-lg text-white cursor-pointer max-md:w-full transition-transform duration-300 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"
      } ${expanded ? "backdrop-saturate-150" : ""}`}
    >
      <div className="text-sm font-semibold text-sky-200 tracking-widest">
        {item.startDate} - {item.endDate}
      </div>
      <h3 className="text-xl font-semibold">{item.jobTitle}</h3>
      <h4 className="text-md font-medium opacity-80">{item.company}</h4>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="my-2 pl-1 text-sm text-neutral-100 font-semibold">
          {item.jobDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-sky-300/50 text-sky-100 text-xs font-semibold bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="min-h-[400px] pl-2 max-md:px-4 cursor-grab h-full overflow-y-scroll flex flex-col w-full py-2 items-start will-change-scroll [&::-webkit-scrollbar]:w-0 scroll">
      {/* Vertical Line */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full md:left-[calc(50%-150px)] md:translate-x-0" /> */}

      <div className="flex flex-col max-md:items-center w-full">
        {experiences.map((item, i) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            // margin: "-40% 0px -40% 0px",
            amount: 0.5,
          });

          return (
            <div
              key={i}
              ref={ref}
              className="flex flex-col md:flex-row w-full justify-start items-center rounded"
            >
              <TimelineCard item={item} isActive={isInView} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
