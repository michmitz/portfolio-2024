import React from "react";
import { FaArrowUp } from "react-icons/fa";

interface JobExperienceProps {
  readonly startDate: string;
  readonly endDate: string;
  readonly jobTitle: string;
  readonly company?: string;
  readonly jobDescription?: string;
  readonly skills: ReadonlyArray<string>;
}

export const JobExperience: React.FC<JobExperienceProps> = ({
  startDate,
  endDate,
  jobTitle,
  company,
  jobDescription,
  skills,
}) => {
  return (
    <div className="relative w-[95%] cursor-pointer rounded-xl hover:shadow-lg transition-transform duration-1000 ease-in-out hover:backdrop-saturate-125 hover:bg-blue-300/20 hover:dropshadow-md hover:backdrop-blur-2xl">
      <div className="group relative w-full overflow-hidden rounded-l p-4 transition-all duration-1000 ease-in-out rounded-xl">
        <div className="flex justify-between items-center cursor-pointer">
          <div>
            <p className="md:text-xl max-md:text-lg font-extrabold text-white drop-shadow-sm">
              {jobTitle}
            </p>
            <p className="md:text-lg max-md:text-md text-sky-200 font-semibold">
              {company}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-700 text-neutral-200">
            <p className="text-white text-xs font-bold tracking-widest mb-1">
              {endDate}
            </p>
            <FaArrowUp size="10px" color="white" />
            <p className="text-white text-xs font-bold tracking-widest mt-1">
              {startDate}
            </p>
          </div>
        </div>

        <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-[500px] group-hover:pb-4 will-change-[max-height]">
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
