"use client";
import React, { useEffect, useState } from "react";
import { experiences } from "../experienceData";
import { motion } from "framer-motion";

export interface Experience {
  id: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  company?: string;
  jobDescription?: string;
  skills?: readonly string[];
}

interface TimelineCardProps {
  item: Experience;
  isExpanded: boolean;
  onClick: () => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  item,
  isExpanded,
  onClick,
}) => {
  return (
    <div className="relative flex gap-4 w-full max-w-3xl">
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isExpanded ? "bg-[#b2d9f5] scale-125 shadow-lg" : "bg-white/40"}`}
        />
        <div className="w-[1px] flex-1 bg-white/10 mt-1" />
      </div>

      {/* Card */}
      <div
        onClick={onClick}
        className={`
          flex-1
          p-4 md:p-6
          rounded-2xl
          cursor-pointer
          transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          hover:bg-[#7d91b3]/60
          hover:backdrop-blur-md
          hover:scale-[1.01]

          ${isExpanded ? "bg-[#7d91b3]/50 shadow-xl" : "bg-transparent"}
        `}
      >
        <p className="text-sm font-bold tracking-widest text-[#b2d9f5] mb-1">
          {item.startDate} — {item.endDate}
        </p>

        <h3 className="text-xl font-semibold text-[white]">{item.jobTitle}</h3>

        <h4 className="text-sm font-semibold text-white/70 mb-2">{item.company}</h4>

        {/* Always mounted so height can animate when switching between cards */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? 8 : 0,
          }}
          transition={{
            height: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.35, ease: "easeOut" },
            marginTop: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
          }}
          className="overflow-hidden"
          style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        >
          <div>
            <p className="text-sm text-white/90 font-medium leading-relaxed">
              {item.jobDescription}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.skills &&
                item.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-lg text-sky-200 border border-sky-300/20 font-bold"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface TimelineProps {
  displaySection: string;
}

const Timeline = ({ displaySection }: TimelineProps) => {
  const [activeId, setActiveId] = useState<string | null>(
    experiences[0]?.id || null,
  );

  useEffect(() => {
    if (displaySection === "experience") {
      setActiveId(experiences[0]?.id ?? null);
    }
  }, [displaySection]);

  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="flex flex-col gap-6 w-full items-center">
        {experiences.map((item) => (
          <TimelineCard
            key={item.id}
            item={item}
            isExpanded={activeId === item.id}
            onClick={() =>
              setActiveId((prev) => (prev === item.id ? null : item.id))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
