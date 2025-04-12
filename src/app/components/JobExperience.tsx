import React from "react";

interface JobExperienceProps {
  readonly startDate: string;
  readonly endDate: string;
  readonly jobTitle: string;
  readonly company?: string;
  readonly jobDuties?: ReadonlyArray<string>;
  readonly jobDescription?: string;
  readonly skills: ReadonlyArray<string>;
}

export const JobExperience: React.FC<JobExperienceProps> = ({
  startDate,
  endDate,
  jobTitle,
  company,
  jobDuties,
  jobDescription,
  skills,
}) => {
  return (
    <div className="relative w-4/5 max-w-xl cursor-pointer max-md:w-[90%] w-[85%] rounded-xl hover:shadow-lg transition-transform duration-1000 ease-in-out backdrop-saturate-125 bg-blue-300/20 hover:shadow-blue-200/20 backdrop-blur-2xl hover:bg-white/20">
      <div className="group relative w-full overflow-hidden rounded-l p-4 transition-all duration-1000 ease-in-out rounded-xl">
        <div className="flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-lg font-extrabold text-white drop-shadow-md font-nunito">
              {jobTitle}
            </p>
            <p className="text-neutral-200 text-sm md:text-md font-semibold opacity-90">
              {company}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xs md:text-sm font-bold tracking-wide">
              {startDate} -
            </p>
            <p className="text-white text-xs md:text-sm font-bold tracking-wide">
              {endDate}
            </p>
          </div>
        </div>

        <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-[500px] group-hover:pb-4 will-change-[max-height]">
          {jobDescription && (
            <p className="mt-2 text-sm text-[#ffffff] leading-relaxed text-semibold">
              {jobDescription}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="bg-blue-400/20 border border-blue-300/50 text-sky-600 text-xs 
             font-semibold px-3 py-1 rounded-full shadow-sm transition-transform 
             hover:scale-105 hover:bg-blue-400/40"
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
