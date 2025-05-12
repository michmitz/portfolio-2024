import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experiences } from "../experienceData";

const TimelineCard = ({ item, isActive }: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      onClick={() => setExpanded(!expanded)}
      initial={{ scale: 0.95, opacity: 0.6 }}
      animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.6 }}
      transition={{ duration: 0.4 }}
      className="relative w-[80%] p-4 md:p-6 my-3 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-sky-200/10 border border-white/20 shadow-lg text-white cursor-pointer max-md:w-full"
    >
      <div className="text-sm font-semibold text-sky-200">
        {item.startDate} - {item.endDate}
      </div>

      {/* <motion.div
        className="w-10 h-8 bg-center bg-cover"
        style={{
          backgroundImage: "url(/cloud2.png)",
          imageRendering: "pixelated",
          WebkitMaskImage: "url(/cloud2.png)",
          WebkitMaskSize: "cover",
          WebkitMaskPosition: "center",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      /> */}
      <h3 className="text-xl font-semibold">{item.jobTitle}</h3>
      <h4 className="text-md font-medium opacity-80">{item.company}</h4>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-sky-200">{item.jobDescription}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.skills.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-sky-300/50 text-sky-100 text-xs font-semibold bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="min-h-[400px] pl-2 max-md:px-4 cursor-grab h-full overflow-y-scroll flex flex-col w-full py-2 items-start will-change-scroll [&::-webkit-scrollbar]:w-0 scroll">
      {/* Vertical Line */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full md:left-[calc(50%-150px)] md:translate-x-0" /> */}

      <div className="flex flex-col max-md:items-center w-full">
        {experiences.map((item, i) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            // margin: "-40% 0px -40% 0px",
            amount: 0.5,
          });

          return (
            <div
              key={i}
              ref={ref}
              className="flex flex-col md:flex-row w-full justify-start items-center rounded"
            >
              <TimelineCard item={item} isActive={isInView} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
