"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsBriefcase } from "react-icons/bs";

type ProjectType = "personal" | "school" | "work";

interface ProjectProps {
  readonly projectName: string;
  readonly projectType: ProjectType;
  readonly company?: string;
  readonly image?: string;
  readonly link?: string;
  readonly description?: string;
  readonly tech: string[];
  readonly timeOfDay: number;
}

export const Project: React.FC<ProjectProps> = ({
  projectName,
  projectType,
  company,
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
    isMobile ? "95%" : "200px"
  );
  const [cardHoverWidth, setCardHoverWidth] = useState(
    isMobile ? "95%" : "355px"
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setIsMobile(true);
          setCardInitialWidth("95%");
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
        textColor: "pink",
        descriptionTextColor: "#7fe4f5",
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
  }, [timeOfDay, backgroundAnimation, pillAnimation]);

  const [contentVisible, setContentVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (hovered && contentVisible) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [contentVisible, hovered]);

  const { textColor, descriptionTextColor } = getColorsByTime(timeOfDay);
  const { backgroundColor: pillBgColor, textColor: pillTextColor } =
    getPillColorsByTime(timeOfDay);

  return (
    <motion.div
      className="flex items-center justify-center mb-5 h-fit max-md:w-[95%]"
      animate={backgroundAnimation}
    >
      <motion.div
        layout
        className="flex-1 rounded-2xl p-4 cursor-pointer hover:backdrop-blur-2xl hover:backdrop-saturate-135 hover:shadow"
        onMouseEnter={() => {
          setHovered(true);
          cardAnimation
            .start({
              height: "300px",
              width: cardHoverWidth,
              transition: { duration: 0.3, ease: "easeInOut" },
            })
            .then(() => setContentVisible(true));
        }}
        onMouseLeave={async () => {
          setHovered(false);
          setOpacity(0);
          
          await cardAnimation.start({
            height: "120px",
            width: cardInitialWidth,
            transition: { duration: 0.3, ease: "easeInOut" },
          });

          setContentVisible(false);
        }}
        animate={cardAnimation}
        initial={{ height: "120px", width: cardInitialWidth }}
      >
        <div className="flex flex-row items-center">
          {projectType === "school" ? (
            <MdOutlineSchool className="mb-1.5 mr-2" />
          ) : projectType === "work" ? (
            <BsBriefcase className="mb-1.5 mr-2" />
          ) : (
            <HiOutlineLightBulb className="mb-1.5 mr-2" />
          )}
          <motion.p
            className="mb-1.5 text-sm font-medium uppercase"
            style={{
              color: textColor,
              transition: "color 1s ease",
            }}
          >
            {company}
          </motion.p>
        </div>
        <hr className="border-sky-200" />
        <p
          className="text-lg font-bold mt-2 font-nunito"
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
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <motion.p
            className="text-sm leading-relaxed mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: opacity,
              y: contentVisible ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
            style={{ color: descriptionTextColor, transition: "color 1s ease" }}
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
              transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
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
                  duration: 0.3,
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
