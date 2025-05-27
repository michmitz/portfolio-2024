import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { appStrings } from "../appStrings";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-md:px-2 md:pl-3">
      <motion.div className="flex flex-row">
        <motion.div
          id="hi"
          initial={{ y: 0 }}
          animate={{ y: showMore ? -10 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col mr-4"
        >
          <p className="fade-in text-blue-200 text-3xl font-bold">
            Hi! I&apos;m Michelle.
          </p>
          <p className="text-white font-semibold font-nunito rounded-3xl mb-3">
            I&apos;m a frontend developer based in the Pacific Northwest.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="float text-blue-400 font-semibold underline focus:outline-none"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <BiUpArrow
              className="text-blue-300"
              size="30px"
              aria-label="show-less"
            />
          ) : (
            <BiDownArrow
              className="text-blue-300"
              size="30px"
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden mt-2 text-white font-nunito"
          >
            <p>{appStrings.about}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
