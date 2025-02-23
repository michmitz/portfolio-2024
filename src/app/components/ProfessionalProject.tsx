import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProfessionalProjectProps {
  readonly projectName: string;
  readonly initials: string;
  readonly link?: string;
  readonly description?: string;
  readonly image?: string;
}

export const ProfessionalProject: React.FC<ProfessionalProjectProps> = ({
  projectName,
  initials,
  description,
  image,
  link,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[200px] h-[200px] rounded-2xl shadow-lg border-gray-700 overflow-hidden cursor-pointer max-md:w-full light-glass"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-white transition-opacity"
        initial={{ opacity: 1 }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {image ? (
          <motion.img
            src={image}
            alt={projectName}
            className="max-md:w-1/3 md:w-1/2 h-auto rounded-full aspect-square contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          />
        ) : (
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 text-3xl font-bold">
            {initials}
          </div>
        )}
        <p className="text-xl font-bold mt-2 text-center">{projectName}</p>
      </motion.div>
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 transition-opacity"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.p
          className="text-sm text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {description}
        </motion.p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-300 hover:text-blue-400 text-sm"
          >
            View Project →
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};
