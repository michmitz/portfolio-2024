import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiPowerLightning } from "react-icons/gi";
import Link from "next/link";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

interface ContactProps {
  loaded: boolean;
}

export const Contact: React.FC<ContactProps> = ({ loaded }) => {
  const [showContact, setShowContact] = useState(false);
  const [showCloud, setShowCloud] = useState(true);
  const [showLightning, setShowLightning] = useState(false);

  const handleClick = () => {
    if (showContact) {
      setShowContact(false);
      return;
    }
    setShowLightning(true);
    setTimeout(() => {
      setShowCloud(false);
      setShowContact(true);
      setShowLightning(false);
    }, 500);
  };

  const handleCloseSkills = () => {
    setShowContact(false);
    setTimeout(() => {
      setShowCloud(true);
    }, 300);
  };

  return (
    <div
      className={`${
        loaded
          ? "flex flex-col items-center max-md:[w-200px] md:w-[150px] md:z-50"
           : "hidden"
      }`}
    >
      <AnimatePresence>
        {!showContact && showCloud && (
          <motion.div
            className="flex justify-center items-center max-md:w-[220px] max-md:h-[150px] md:w-[150px] md:h-[100px] cursor-pointer relative"
            style={{
              backgroundImage: "url(/cloud2.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              imageRendering: "pixelated",
              WebkitMaskImage: "url(/cloud2.png)",
              WebkitMaskSize: "cover",
              WebkitMaskPosition: "center",
              zIndex: 10, // Ensures cloud is above sparkles
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
      </AnimatePresence>

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
        ) : !showLightning && !showContact && showCloud ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="glitter-container absolute inset-0 z-0"
          >
            <span className="sparkle"></span>
            <span className="sparkle"></span>
            <span className="sparkle"></span>
            <span className="sparkle"></span>
            <span className="sparkle"></span>
            <p className="glitter-text max-md:text-2xl md:text-lg font-bold font-silkscreen text-white text-center tracking-wide z-50">
              Contact Me!
            </p>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContact && (
          <motion.div
            className="p-4 border-4 border-white shadow-lg md:w-full pixelated flex flex-col items-start bg-blue-100/40 backdrop-blur-lg cursor-pointer max-md:w-[220px] h-[150px] md:w-[150px] z-50"
            initial={{ scale: 0, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleCloseSkills}
          >
            <div className="flex flex-col gap-1">
              <motion.p
                className="text-blue-500 font-silkscreen text-sm pixelated"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Feel free to reach out!
              </motion.p>

              <div className="flex flex-row items-center gap-2">
                <Link
                  href="https://www.linkedin.com/in/michelle-stermitz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialLinkedinCircular size="40px" color="white" />
                </Link>
                <Link
                  href="https://github.com/michmitz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size="30px" color="white" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
