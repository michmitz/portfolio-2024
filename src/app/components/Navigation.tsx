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

  const navLinks = [
    { label: "About", section: "about" },
    { label: "Experience", section: "experience" },
    { label: "Professional Projects", section: "professional-projects" },
    { label: "Personal Projects", section: "personal-projects" },
    { label: "Contact", section: "contact" },
  ];

  const onChangeSection = (section: string) => {
    setDisplaySection(section);
    setExpanded(false);
  };

  React.useEffect(() => {
    if (!expanded) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  return (
    <>
      {/* Desktop */}
      <div className="max-md:hidden flex flex-col justify-center items-center md:pl-5">
        <Header />
        <NavLinks links={navLinks} onClick={setDisplaySection} />
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full border-b p-1 flex justify-between border border-white/20 rounded-t-2xl">
        <Header />
        <nav className="z-20 relative flex flex-col items-end p-2">
          <AnimatedHamburgerButton
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          />
          {expanded && (
            <div
              ref={menuRef}
              className="absolute right-5 mt-10 p-4 w-[250px] rounded-xl shadow-lg backdrop-blur-lg bg-white/70 border border-white/20 transition-opacity duration-300"
            >
              <NavLinks links={navLinks} onClick={onChangeSection} />
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

const Header = () => (
  <div className="select-none max-md:p-3">
    <p className="max-md:text-2xl md:text-3xl lg:text-4xl text-white font-bold font-cinzel">
      Michelle
    </p>
    <p className="max-md:text-2xl md:text-3xl lg:text-4xl text-white font-bold font-cinzel">
      Stermitz
    </p>
  </div>
);

const NavLinks: React.FC<{
  links: { label: string; section: string }[];
  onClick: (section: string) => void;
}> = ({ links, onClick }) => (
  <div className="mt-3 text-xl text-white cursor-pointer flex flex-col max-md:text-[#616c84]">
    {links.map(({ label, section }) => (
      <p
        key={section}
        className="hover:text-[#00b4d8] transition-colors duration-300"
        onClick={() => onClick(section)}
      >
        {label}
      </p>
    ))}
  </div>
);

const AnimatedHamburgerButton: React.FC<{
  expanded: boolean;
  onClick: () => void;
}> = ({ expanded, onClick }) => (
  <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
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

const VARIANTS = {
  top: {
    open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
    closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] },
  },
  middle: {
    open: { rotate: ["0deg", "0deg", "-45deg"] },
    closed: { rotate: ["-45deg", "0deg", "0deg"] },
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
