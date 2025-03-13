import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  readonly projectName: string;
  readonly projectType: string;
  readonly image?: string;
  readonly link?: string;
  readonly description?: string;
  readonly tech: string[];
}

interface CardProps {
  readonly tag: string;
  readonly projectName: string;
  readonly description?: string;
  readonly tech: string[];
  readonly link?: string;
}

export const Project: React.FC<ProjectProps> = ({
  projectName,
  projectType,
  link,
  description,
  tech,
}) => {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-fit pt-6 pb-6 pr-7"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card
        tag={`/ ${projectType}`}
        tech={tech}
        projectName={projectName}
        description={description}
        link={link}
      />
    </motion.div>
  );
};

const Card: React.FC<CardProps> = ({
  tag,
  projectName,
  description,
  tech,
  link,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="rounded-2xl p-4 cursor-pointer bg-opacity-80 backdrop-blur-md border border-sky-300 w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.p
        className="mb-1.5 text-sm font-medium uppercase"
        animate={{ color: hovered ? "#38bdf8" : "#fff" }}
      >
        {tag}
      </motion.p>
      <hr className="border-sky-200" />
      <p className="text-lg leading-relaxed font-bold mt-2 text-white">
        {projectName}
      </p>
      <p className="text-sm leading-relaxed mb-2 text-white">{description}</p>
      {link && (
        <motion.button
          className="rounded-full border border-sky-400 py-1 px-4 text-sm font-medium transition-colors hover:bg-sky-800 hover:text-white"
          whileHover={{ scale: 1.1 }}
        >
          Link
        </motion.button>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <motion.span
            key={t}
            className="bg-sky-200 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
            whileHover={{ scale: 1.1 }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
