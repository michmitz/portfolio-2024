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
    <div className="relative w-full max-w-xl cursor-pointer">
      <div className="group relative w-full overflow-hidden rounded-3xl border-2 border-[#576885] p-4 shadow-lg transition-all duration-1000 ease-in-out">
        <div className="flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-lg md:text-xl font-bold text-[#576885]">
              {jobTitle}
            </p>
            {company && (
              <p className="text-neutral-600 text-sm md:text-md font-semibold">
                {company}
              </p>
            )}
          </div>
          <p className="text-neutral-500 text-xs md:text-sm font-medium tracking-wide">
            {startDate} - {endDate}
          </p>
        </div>

        <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-[500px] group-hover:pb-4 will-change-[max-height]">
          {jobDuties && jobDuties.length > 0 && (
            <ul className="ml-4 mt-2 list-disc text-[#3d4f63] text-sm font-medium leading-relaxed">
              {jobDuties.map((d) => (
                <li key={d} className="text-sm">
                  ✧{d}
                </li>
              ))}
            </ul>
          )}

          {jobDescription && (
            <p className="mt-2 text-sm text-[#3d4f63] leading-relaxed">
              {jobDescription}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="bg-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm transition-transform hover:scale-105"
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
