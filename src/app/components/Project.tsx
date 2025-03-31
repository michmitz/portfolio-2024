"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface ProjectProps {
  readonly projectName: string;
  readonly projectType: string;
  readonly image?: string;
  readonly link?: string;
  readonly description?: string;
  readonly tech: string[];
  readonly timeOfDay: number;
}

interface CardProps {
  readonly tag: string;
  readonly projectType?: string;
  readonly projectName: string;
  readonly description?: string;
  readonly tech: string[];
  readonly link?: string;
  readonly timeOfDay: number;
}

export const Project: React.FC<ProjectProps> = ({
  projectName,
  projectType,
  link,
  description,
  tech,
  timeOfDay,
}) => {
  const [hovered, setHovered] = useState(false);
  const backgroundAnimation = useAnimation();
  const pillAnimation = useAnimation();
  const cardAnimation = useAnimation();

  const [isMobile, setIsMobile] = useState(false);
  const [cardInitialWidth, setCardInitialWidth] = useState(
    isMobile ? "100%" : "200px"
  );
  const [cardHoverWidth, setCardHoverWidth] = useState(
    isMobile ? "100%" : "355px"
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setIsMobile(true);
          setCardInitialWidth("100%");
          setCardHoverWidth("100%");
        } else {
          setIsMobile(false);
          setCardInitialWidth("200px");
          setCardHoverWidth("355px");
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getColorsByTime = (timeOfDay: number) => {
    if (timeOfDay <= 1 && timeOfDay > 0.5) {
      return {
        backgroundColor: "transparent",
        textColor: "#fdedbf",
      };
    }
    return {
      backgroundColor: "transparent",
      textColor: "#ffffff",
    };
  };

  const getPillColorsByTime = (timeOfDay: number) => {
    if (timeOfDay <= 1 && timeOfDay > 0.5) {
      return {
        backgroundColor: "rgba(189, 249, 252, 0.96)",
        textColor: "#25b1d0",
      };
    }
    return {
      backgroundColor: "rgba(158, 222, 252, 0.99)",
      textColor: "#ffffff",
    };
  };

  useEffect(() => {
    const colors = getColorsByTime(timeOfDay);
    const pillColors = getPillColorsByTime(timeOfDay);
    backgroundAnimation.start({
      backgroundColor: colors.backgroundColor,
      color: colors.textColor,
      transition: { duration: 4, ease: "easeInOut" },
    });
    pillAnimation.start({
      backgroundColor: pillColors.backgroundColor,
    });
  }, [timeOfDay, backgroundAnimation]);

  const [contentVisible, setContentVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    hovered && contentVisible ? setOpacity(1) : setOpacity(0);
  }, [contentVisible, hovered]);

  const { textColor } = getColorsByTime(timeOfDay);
  const { backgroundColor: pillBgColor, textColor: pillTextColor } =
    getPillColorsByTime(timeOfDay);

  return (
    <motion.div
      className="flex items-center justify-center mb-5 max-md:w-full h-fit"
      animate={backgroundAnimation}
    >
      <motion.div
        layout
        className="flex-1 rounded-2xl p-4 cursor-pointer backdrop-blur-2xl backdrop-saturate-115 shadow"
        onMouseEnter={() => {
          setHovered(true);
          cardAnimation
            .start({
              height: "300px",
              width: cardHoverWidth,
              transition: { duration: 0.5, ease: "easeInOut" },
            })
            .then(() => setContentVisible(true));
        }}
        onMouseLeave={() => {
          setHovered(false);
          setContentVisible(false);
          cardAnimation.start({
            height: "120px",
            width: "200px",
            transition: { duration: 0.5, ease: "easeInOut" },
          });
        }}
        animate={cardAnimation}
        initial={{ height: "120px", width: cardInitialWidth }}
      >
        <motion.p
          className="mb-1.5 text-sm font-medium uppercase"
          style={{
            color: textColor,
            transition: "color 1s ease",
          }}
        >
          {projectType}
        </motion.p>
        <hr className="border-sky-200" />
        <p
          className="text-lg font-bold mt-2"
          style={{
            color: textColor,
            transition: "color 1s ease",
          }}
        >
          {projectName}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: opacity,
            y: contentVisible ? 0 : 10,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.p
            className="text-sm leading-relaxed mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: opacity,
              y: contentVisible ? 0 : 10,
            }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          >
            {description}
          </motion.p>

          {link && (
            <motion.button
              className="rounded-full border border-sky-400 py-1 px-4 text-sm font-medium hover:bg-sky-800 hover:text-white"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: opacity,
                y: contentVisible ? 0 : 10,
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            >
              Link
            </motion.button>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <motion.span
                key={t}
                className="text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: opacity,
                  y: contentVisible ? 0 : 10,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.05,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundColor: pillBgColor,
                  color: pillTextColor,
                  transition: "background-color 1s ease, color 1s ease",
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
