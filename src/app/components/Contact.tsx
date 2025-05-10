import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

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
    <div className={`${loaded ? "flex items-center gap-3 md:z-50" : "hidden"}`}>
      {/* Cloud + Text trigger */}
      {!showContact && showCloud && (
        <motion.div
          className="relative flex items-center gap-2 cursor-pointer group"
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cloud and lightning container */}
          <div className="relative flex flex-col items-center justify-center h-12 w-10">
            {/* Cloud image */}
            <motion.div
              className="w-10 h-8 bg-center bg-cover"
              style={{
                backgroundImage: "url(/cloud2.png)",
                imageRendering: "pixelated",
                WebkitMaskImage: "url(/cloud2.png)",
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "center",
              }}
              whileHover={{ scale: 1.05 }}
              animate={
                showLightning
                  ? { opacity: [1, 0.6, 1, 0.6, 1] }
                  : { opacity: 1 }
              }
              transition={{ duration: 0.4 }}
            />

            {/* Lightning absolutely positioned under cloud */}
            <AnimatePresence>
              {showLightning && (
                <motion.div
                  className="absolute top-10 bottom-0 text-yellow-400/80 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0, 1, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, repeat: 2 }}
                >
                  <FaBoltLightning />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact text with sparkles */}
          <div className="relative">
            <p className="font-silkscreen text-white text-base group-hover:text-sky-200 transition relative z-10">
              Contact
            </p>

            {/* Sparkles (absolute) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <span className="sparkle"></span>
              <span className="sparkle"></span>
              <span className="sparkle"></span>
              <span className="sparkle"></span>
              <span className="sparkle"></span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Contact panel when open */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="p-4 border-4 border-white shadow-lg pixelated flex flex-col items-start bg-blue-100/40 backdrop-blur-lg cursor-pointer max-md:w-[220px] h-[150px] md:w-[150px] z-50"
            initial={{ scale: 0, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleCloseSkills}
          >
            <motion.p
              className="text-blue-500 font-silkscreen text-sm pixelated mb-2"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
