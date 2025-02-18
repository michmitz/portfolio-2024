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
      <div className="font-nunito cursor-pointer w-full h-[200px] rounded-3xl select-none border b-2">
        <div className="rounded-t-3xl w-full h-[40px] light-glass pl-3 pt-3 flex justify-between">
        <p className="font-bold text-white flex">
          {/* Use a star icon for bullet point */}
          {jobTitle} {company && <p className="text-neutral-600 font-bold ml-2">{company}</p>}
        </p>
        <p className="text-white font-bold mt-1 text-sm">{startDate} - {endDate}</p>
        </div>


        <ul className="m-4 font-[500] text-white">
        {jobDuties?.map((d:string) => {
          return (
            <li className="text-sm" key={`${d}`}>• {d}</li>
          )
        })}
        </ul>
        <p className="font-semibold text-sm text-white px-2">{jobDescription}</p>
        <div className="mt-2 flex-wrap flex pt-2">
        {skills.map((s: string) => {
          return (
            <span key={`${s}`} className="skillpill2 text-white text-sm mx-2 mb-2 px-2">{s}</span>
          )
        })}
        </div>
    </div>
  );
};


// Darken the rest of the cards when this sidebar is in focus. When the user hovers over a card, or leaves the sidebar, it becomes bright again. 

