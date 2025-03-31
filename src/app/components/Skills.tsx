import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiPowerLightning } from "react-icons/gi";

interface SkillsProps {
  readonly category: string;
  readonly skills: string[];
  readonly background: string;
}

export const Skills: React.FC<SkillsProps> = ({
  category,
  skills,
  background,
}) => {
  const [showSkills, setShowSkills] = useState(false);
  const [showLightning, setShowLightning] = useState(false);

  const handleClick = () => {
    if (showSkills) {
      setShowSkills(false);
      return;
    }
    setShowLightning(true);
    setTimeout(() => {
      setShowSkills(true);
      setShowLightning(false);
    }, 500);
  };

  const handleCloseSkills = () => {
    setShowLightning(false);
    setShowSkills(false);
  };

  return (
    <div className="flex flex-col items-center w-[200px]">
      {!showSkills && (
        <motion.div
          className="flex justify-center items-center w-[180px] h-[135px] border cursor-pointer"
          style={{
            backgroundImage: background,
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "pixelated",
            WebkitMaskImage: background,
            WebkitMaskSize: "cover",
            WebkitMaskPosition: "center",
          }}
          whileHover={{ scale: 1.05 }}
          onClick={handleClick}
        >
          <AnimatePresence>
            {showLightning && (
              <motion.div
                className="absolute inset-0 bg-white opacity-0"
                animate={{ opacity: [0, 1, 0, 1, 0] }}
                transition={{ duration: 0.3, repeat: 2 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}

      <AnimatePresence>
        {showLightning ? (
          <motion.div
            className="text-yellow-400 text-4xl pixelated"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0] }}
            transition={{ duration: 0.3, repeat: 2 }}
          >
            <GiPowerLightning />
          </motion.div>
        ) : !showLightning && !showSkills ? (
          <p className="text-lg font-bold font-silkscreen text-sky-800 text-center tracking-wide">
            {category}
          </p>
        ) : (
          <></>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSkills && (
          <motion.div
            className="p-4 border-4 border-white shadow-lg w-full pixelated flex flex-col items-start select-none bg-blue-100/40 backdrop-blur-lg cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={handleCloseSkills}
          >
            <div className="flex flex-col gap-1 overflow-y-auto">
              {skills.map((skill, index) => (
                <motion.p
                  key={skill}
                  className="text-blue-500 font-silkscreen text-sm pixelated"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  {skill}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
