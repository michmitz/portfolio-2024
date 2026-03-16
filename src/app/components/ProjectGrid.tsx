"use client";
import { Project } from "./Project";
import { projectSections } from "../projectData";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";

const SECTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  work: BsBriefcase,
  personal: HiOutlineLightBulb,
  collab: MdOutlineSchool,
};

type ProjectGridProps = {
  timeOfDay: number;
};

export const ProjectGrid: React.FC<ProjectGridProps> = ({ timeOfDay }) => {
  return (
    <div className="flex flex-col gap-10 mt-8 items-center">
      <h1 className="text-white font-bold text-2xl tracking-wider">PROJECTS</h1>
      {projectSections.map(({ key, title, projects }) => {
        if (!projects.length) return null;
        const Icon = SECTION_ICONS[key];
        return (
          <section key={key}>
            <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold text-white mb-4 border-b pb-2 border-b-3 w-fit">
              {Icon && <Icon className="w-5 h-5" />}
              {title}
            </h2>
            <div className="flex flex-wrap gap-5 justify-center">
              {projects.map((project) => (
                <Project
                  key={project.id}
                  {...project}
                  timeOfDay={timeOfDay}
                  isSelected={false}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
