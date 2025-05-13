"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";
// import { useEffect } from "react";

export type ProjectType = "personal" | "school" | "work";

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
  projectType,
  company,
  link,
  description,
  tech,
  // timeOfDay,
  isSelected,
}) => {
  // const pillAnimation = useAnimation();
  // const backgroundAnimation = useAnimation();

  // const getColorsByTime = (timeOfDay: number) => {
  //   if (timeOfDay <= 1 && timeOfDay > 0.5) {
  //     return {
  //       backgroundColor: "rgba(189, 249, 252, 0.10)",
  //       textColor: "#25b1d0",
  //       descriptionTextColor: "#7fe4f5",
  //     };
  //   }
  //   return {
  //     backgroundColor: "rgba(252, 230, 158, 0.10)",
  //     backdropFilter: "blur(10px)",
  //     textColor: "#ffffff",
  //     descriptionTextColor: "#cccccc",
  //   };
  // };

  // const getPillColorsByTime = (timeOfDay: number) => {
  //   if (timeOfDay <= 1 && timeOfDay > 0.5) {
  //     return {
  //       backgroundColor: "rgba(252, 250, 189, 0.96)",
  //       textColor: "#25b1d0",
  //     };
  //   }
  //   return {
  //     backgroundColor: "rgba(158, 222, 252, 0.99)",
  //     textColor: "#ffffff",
  //   };
  // };

  // const { textColor, descriptionTextColor } = getColorsByTime(timeOfDay);
  // const { backgroundColor, textColor: pillTextColor } =
  //   getPillColorsByTime(timeOfDay);

  // useEffect(() => {
  //   const colors = getColorsByTime(timeOfDay);
  //   const pillColors = getPillColorsByTime(timeOfDay);
  //   backgroundAnimation.start({
  //     backgroundColor: colors.backgroundColor,
  //     color: colors.textColor,
  //     transition: { duration: 4, ease: "easeInOut" },
  //   });
  //   pillAnimation.start({
  //     backgroundColor: backgroundColor,
  //     color: pillColors.textColor,
  //     transition: { duration: 4, ease: "easeInOut" },
  //   });
  // }, [timeOfDay, backgroundAnimation, pillAnimation, backgroundColor]);

  return (
    <motion.div
      className={`w-full h-full rounded-xl p-6 shadow-md cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-blue-200/50 to-blue-400/70"
          : "hover:shadow-lg hover:scale-[1.02]"
      }`}
      // animate={backgroundAnimation}
    >
      {/* Top Part (icon, company, project name) */}
      <div>
        <div className="flex items-center gap-3 mb-4 border-b border-white/20 pb-3">
          {projectType === "school" ? (
            <MdOutlineSchool className="text-xl text-blue-300" />
          ) : projectType === "work" ? (
            <BsBriefcase className="text-xl text-neutral-300" />
          ) : (
            <HiOutlineLightBulb className="text-xl text-sky-200" />
          )}
          <span
            className="text-xs font-medium uppercase tracking-widest"
            // style={{ color: textColor }}
          >
            {company}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-3">{projectName}</h3>
      </div>

      {isSelected && (
        <motion.div initial={false} animate={{ opacity: 1 }} className="mt-4">
          <p
            className="text-sm leading-relaxed mb-4 text-sky-800/70 font-semibold"
            // style={{ color: descriptionTextColor }}
          >
            {description}
          </p>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 px-4 py-2 rounded-full border border-sky-400 text-sm font-medium hover:bg-sky-800 hover:text-white transition-colors"
            >
              View Project
            </a>
          )}

          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <motion.span
                key={t}
                className="bg-blue-200 text-blue-900 text-xs font-medium px-3 py-1 rounded-full"
                // animate={pillAnimation}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
