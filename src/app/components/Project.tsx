"use client";
import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export type ProjectType = "personal" | "work" | "collaboration"

export interface ProjectProps {
  readonly id: number;
  readonly projectName: string;
  readonly projectType: ProjectType;
  readonly company?: string;
  readonly image?: string;
  readonly link?: string;
  readonly description?: string;
  readonly tech: string[];
  readonly timeOfDay: number;
  readonly isSelected: boolean;
}

export const Project: React.FC<ProjectProps> = ({
  projectName,
  company,
  link,
  description,
  tech,
}) => {
  return (
    <div
      className="
        p-4
        transition-all duration-300
        hover:bg-[#7d91b3]/60
        hover:shadow-xl
        rounded-2xl
        max-md:w-full
        md:max-w-[320px]
        max-md:max-w-[95%]
        hover:backdrop-blur-md
        hover:scale-[1.02]
        h-fit
        cursor-pointer
      "
    >
      <div className="flex flex-col rounded-full">
        {company && <div className="flex items-center gap-3">
          <span className="text-md font-bold uppercase tracking-wider text-white/70">
            {company}
          </span>
        </div>}

        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold text-[#b2d9f5] mb-2">
            {projectName}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <span className="font-semibold text-neutral-100 text-lg underline">Visit</span>
              <FaExternalLinkSquareAlt size="17" color="#FFFFFF" />
            </a>
          )}
        </div>

      </div>

      <div className="mt-3">

        {description && (
          <p className="text-sm leading-relaxed text-white mb-3 font-semibold leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-lg text-white bg-sky-200/80 font-bold shadow-xl"
            >
              {t}
            </span>
          ))}
        </div>
        </div>
    </div>
  );
};
