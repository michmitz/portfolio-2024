"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";

interface NavProps {
  displaySection: string;
  setDisplaySection: (v: string) => void;
}

export const Navigation: React.FC<NavProps> = ({
  displaySection,
  setDisplaySection,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const onChangeSection = (section: string) => {
    setDisplaySection(section);
    setExpanded(false);
  };

  const toggleHamburgerMenu = () => {
    if (expanded) {
      return;
    }
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  return (
    <div className="md:hidden w-full border-b p-1 flex flex-row justify-between light-glass rounded-t-2xl">
      <div className="select-none p-2">
        <p className="text-4xl max-md:text-2xl tracking-wide text-white font-bold font-cinzel">
          Michelle
        </p>
        <p className="text-4xl tracking-wide max-md:text-2xl text-white font-bold font-cinzel">
          Stermitz
        </p>
      </div>

      <nav className="">
        <div className="relative flex flex-col items-end p-2">
          <AnimatedHamburgerButton
            expanded={expanded}
            onClick={toggleHamburgerMenu}
          />

          {expanded && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-10 light-glass rounded-xl p-4 w-[250px] shadow-lg"
            >
              <ul className="flex flex-col text-white text-xl cursor-pointer">
                <li
                  className="hover:text-blue-700"
                  onClick={() => onChangeSection("about")}
                >
                  About
                </li>
                <li
                  className="hover:text-blue-700"
                  onClick={() => onChangeSection("experience")}
                >
                  Experience
                </li>
                <li
                  className="hover:text-blue-700"
                  onClick={() => onChangeSection("professional-projects")}
                >
                  Professional Projects
                </li>
                <li
                  className="hover:text-blue-700"
                  onClick={() => onChangeSection("personal-projects")}
                >
                  Personal Projects
                </li>
                <li className="hover:text-blue-700">Contact</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

interface AnimatedHamburgerButtonProps {
  expanded: boolean;
  onClick: () => void;
}

const AnimatedHamburgerButton: React.FC<AnimatedHamburgerButtonProps> = ({
  onClick,
  expanded,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={expanded ? "open" : "closed"}
        onClick={onClick}
        className="relative h-[65px] w-[65px] rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-[30px] bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-[30px] bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-[15px] bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 7px)",
    },
  },
};
