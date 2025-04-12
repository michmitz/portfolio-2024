import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <motion.div className="flex flex-row">
        <motion.div
          id="hi"
          initial={{ y: 0 }}
          animate={{ y: showMore ? -10 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col mr-4"
        >
          <p className="fade-in text-blue-200 text-3xl font-silkscreen">
            Hi! I'm Michelle.
          </p>
          <p className="text-white font-semibold font-nunito rounded-3xl mb-3">
            I&apos;m a software developer based in the Pacific Northwest.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="float text-blue-400 font-semibold underline focus:outline-none"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <BiUpArrow className="text-blue-300" size="30px" />
          ) : (
            <BiDownArrow className="text-blue-300" size="30px" />
          )}
        </motion.button>
      </motion.div>

      {showMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mt-2 text-white font-nunito"
        >
          <p>
            Ut lobortis nisi scelerisque porta consectetur. Suspendisse potenti.
            Etiam volutpat imperdiet leo in faucibus. Morbi pellentesque massa
            vitae lorem vestibulum, eget porttitor dolor mattis. Morbi mattis
            metus a pulvinar suscipit. Quisque ex turpis, gravida ut lectus sed,
            facilisis vestibulum nisi. Morbi et mauris sed arcu sodales
            imperdiet vitae non magna.
          </p>
        </motion.div>
      )}
    </div>
  );
};
