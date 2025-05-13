import React from "react";
import { FaArrowRight } from "react-icons/fa";

export interface ExperienceProps {
  readonly startDate: string;
  readonly endDate: string;
  readonly jobTitle: string;
  readonly company?: string;
  readonly jobDescription?: string;
  readonly skills: ReadonlyArray<string>;
  readonly isExpanded?: boolean;
  readonly onToggle?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  startDate,
  endDate,
  jobTitle,
  company,
  jobDescription,
  skills,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className={`relative w-[95%] cursor-pointer rounded-xl hover:shadow-lg transition-transform duration-1000 ease-in-out hover:backdrop-saturate-125 hover:dropshadow-md hover:backdrop-blur-2xl ${
        isExpanded
          ? "dropshadow-md backdrop-blur-2xl backdrop-saturate-150 shadow-lg"
          : ""
      }`}
    >
      <div
        className="group relative w-full overflow-hidden rounded-l p-4 transition-all duration-1000 ease-in-out rounded-xl"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <div>
            <p className="md:text-xl max-md:text-lg font-extrabold text-white drop-shadow-sm">
              {jobTitle}
            </p>
            <p className="md:text-lg max-md:text-md text-sky-200 font-semibold">
              {company}
            </p>
          </div>

          <div className="flex items-center justify-center cursor-pointer transition-all duration-700 text-neutral-200 bg-blue-300/50 rounded-xl p-2 gap-2">
            <p className="text-white text-xs font-bold tracking-widest">
              {startDate}
            </p>
            <FaArrowRight size="10px" color="white" />
            <p className="text-white text-xs font-bold tracking-widest">
              {endDate}
            </p>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ease-in-out ${
            isExpanded ? "max-h-[500px] pb-4" : "max-h-0 overflow-hidden"
          }`}
        >
          {jobDescription && (
            <p className="mt-2 text-sm text-white leading-relaxed text-semibold">
              {jobDescription}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="border border-blue-300/50 text-sky-100 text-xs 
             font-semibold px-3 py-1 rounded-full shadow-sm transition-transform 
             hover:scale-105"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
