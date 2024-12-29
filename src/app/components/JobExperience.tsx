import React from "react";

interface JobExperienceProps {
  readonly startDate: string;
  readonly endDate: string;
  readonly jobTitle: string;
  readonly company?: string;
  readonly jobDuties: ReadonlyArray<string>;
  readonly skills: ReadonlyArray<string>;
}

export const JobExperience: React.FC<JobExperienceProps> = ({
  startDate,
  endDate,
  jobTitle,
  company,
  jobDuties,
  skills,
}) => {
  return (
      <div className="m-5 pb-3 font-nunito cursor-pointer">
        <p className="font-nunito text-xl mb-1 font-bold mt-4 ml-4 text-white">
          {jobTitle} - {company}
        </p>
        <p className="text-white font-bold ml-4 mt-1">{startDate} - {endDate}</p>
        <ul className="m-4 font-[600]">
        {jobDuties.map((d:string) => {
          return (
            <li>• {d}</li>
          )
        })}
        </ul>
        <div className="mb-2 flex-wrap flex pt-2">
        {skills.map((s: string) => {
          return (
            <span className="skillpill font-nunito font-bold text-white ml-2 mr-2 mb-2 px-2">{s}</span>
          )
        })}
        </div>
    </div>
  );
};
