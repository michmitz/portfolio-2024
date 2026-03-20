import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { appStrings } from "../appStrings";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-full p-5">
      <motion.div className="flex flex-row">
        <motion.div
          id="hi"
          initial={{ y: 0 }}
          animate={{ y: showMore ? -4 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col mr-4"
        >
          <p className="fade-in text-2xl md:text-3xl font-semibold text-[#b2d9f5]">
            Hi! I&apos;m Michelle.
          </p>
          <p className="text-white/80 font-normal leading-relaxed mt-1 mb-3">
            I&apos;m a frontend developer based in the Pacific Northwest.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-white/80 hover:text-white font-medium focus:outline-none shrink-0"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <BiUpArrow
              className="text-white/80"
              size="24px"
              aria-label="show-less"
            />
          ) : (
            <BiDownArrow
              className="text-white/80"
              size="24px"
              aria-label="show-more"
            />
          )}
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {showMore && (
          <motion.div
            key="about-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-2 text-white/90 leading-relaxed"
          >
            <p>{appStrings.about}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
