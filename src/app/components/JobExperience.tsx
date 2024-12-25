import React from "react";

interface JobExperienceProps {
  readonly startDate: string;
  readonly endDate: string;
  readonly jobTitle: string;
  readonly company: string;
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
    <div className="p-3">
      <div className="glass m-5">
        <p className="">{startDate} - {endDate}</p>
        <p className="font-corben text-lg text-white mb-1">
          {jobTitle} * {company}
        </p>
        <ul>
        {jobDuties.map((d:string) => {
          return (
            <li>•{d}</li>
          )
        })}
        </ul>
        {skills.map((s: string) => {
          return (
            <span className="skillpill">{s}</span>
          )
        })}
      </div>
    </div>
  );
};
