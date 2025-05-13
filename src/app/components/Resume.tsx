import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ResumeProps {
  loaded: boolean;
}

export const Resume: React.FC<ResumeProps> = ({ loaded }) => {

  const handleClick = () => {};
  return (
    <div className={`${loaded ? "flex items-center gap-3 md:z-50" : "hidden"}`}>
      
        <motion.div
          className="relative flex items-center gap-2 cursor-pointer group"
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col items-center justify-center h-12 w-10">
            <motion.div
              className="w-10 h-8 bg-center bg-cover"
              style={{
                backgroundImage: "url(/moon.png)",
                imageRendering: "pixelated",
                WebkitMaskImage: "url(/moon.png)",
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "center",
              }}
              whileHover={{ scale: 1.05 }}
            
            />

          </div>

          {/* Resume text with sparkles */}
          <div className="relative">
            <p className="font-silkscreen text-white text-base group-hover:text-sky-200 transition relative z-10">
              Resume
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
    </div>
  );
};
