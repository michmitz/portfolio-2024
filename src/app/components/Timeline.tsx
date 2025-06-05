/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { experiences } from "../experienceData";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

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
      className={`relative w-[80%] p-4 md:p-6 my-3 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-sky-200/10 border border-white/20 shadow-lg text-white cursor-pointer max-md:w-full transition-all duration-300 ${
        isActive
          ? "scale-100 opacity-100 bg-white/10"
          : "scale-95 opacity-60 bg-neutral-100/30"
      } ${expanded ? "backdrop-saturate-150" : ""}`}
    >
      <p className="text-sm font-extrabold rounded-full text-[#b2d9f5] tracking-widest">
        {item.startDate} - {item.endDate}
      </p>
      <h3 className="text-xl font-semibold">{item.jobTitle}</h3>
      <h4 className="text-md font-medium opacity-80">{item.company}</h4>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="my-2 pl-1 text-sm text-neutral-100 font-semibold">
          {item.jobDescription}
        </p>
        {/* <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-sky-300/50 text-sky-100 text-xs font-semibold bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

const Timeline = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative h-full w-full">
      <div
        ref={scrollContainerRef}
        className="h-full overflow-y-auto pl-2 max-md:px-4 flex flex-row w-full items-start pb-4 max-md:[&::-webkit-scrollbar-thumb]:opacity-[0.5] max-md:[&::-webkit-scrollbar-track]:opacity-[0.5] max-md:[&::-webkit-scrollbar]:w-2 max-md:[&::-webkit-scrollbar-track]:bg-sky-100/20 max-md:[&::-webkit-scrollbar-track]:rounded-xl max-md:[&::-webkit-scrollbar-thumb]:bg-sky-200/40 max-md:[&::-webkit-scrollbar-thumb]:rounded-xl md:[&::-webkit-scrollbar]:hidden scroll max-md:pb-10"
      >
        <div className="flex flex-col max-md:items-center w-full">
          {experiences.map((item, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
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
      <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-white/5 backdrop-blur-sm p-2 rounded-lg hidden md:flex">
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
    </div>
  );
};

export default Timeline;
