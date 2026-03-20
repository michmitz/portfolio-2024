"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { VscLinkExternal } from "react-icons/vsc";

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
    { label: "Projects", section: "projects" },
  ];

  const mobileNavLinks = [
    ...navLinks,
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
      <div className="max-md:hidden flex flex-row items-center gap-6">
        <Header />
        <NavLinks
          links={navLinks}
          onClick={onChangeSection}
          displaySection={displaySection}
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full flex justify-between rounded-t-2xl">
        <Header />
        <nav className="z-50 relative flex flex-col items-end pt-2">
          <AnimatedHamburgerButton
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          />
          {expanded && (
            <div
              ref={menuRef}
              className="absolute mt-5 p-6 w-[250px] rounded-lg border border-white/10 bg-[#0f172a]/90 z-50"
            >
              <p className="font-semibold text-lg text-white ml-1 mb-2 select-none tracking-wide">
                Menu
              </p>

              <NavLinks
                links={mobileNavLinks}
                onClick={onChangeSection}
                displaySection={displaySection}
              />
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

const Header = () => (
  <div className="select-none max-md:pt-3 md:flex md:flex-row md:gap-2">
    <p className="max-md:text-2xl md:text-3xl text-white/80 font-semibold">
      Michelle
    </p>
    <p className="max-md:text-2xl md:text-3xl text-white font-semibold">
      Stermitz
    </p>
  </div>
);

const NavLinks: React.FC<{
  links: { label: string; section: string }[];
  onClick: (section: string) => void;
  displaySection: string;
}> = ({ links, onClick, displaySection }) => {
  // const [resumeClicked, setResumeClicked] = useState<boolean>(false);

  const handleNonResumeClick = (section: string) => {
    // setResumeClicked(false)
    onClick(section);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer flex max-md:flex-col flex-row gap-y-2 md:gap-x-2"
    >
      {links.map(({ label, section }) => (
        <button
          key={section}
          onClick={() => handleNonResumeClick(section)}
          className={`${
            displaySection === section
              ? "text-white"
              : "text-white/70 hover:text-white"
          } text-lg font-semibold transition-colors duration-200 px-2.5 py-1 relative self-start text-left ${
            displaySection === section ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white" : ""
          }`}
        >
          <span className="relative z-10">{label}</span>
        </button>
      ))}
      <button
        key="resume"
        onClick={() => {
          // setResumeClicked(true);
          // setTimeout(() => setResumeClicked(false), 400);
          window.open("/michelle-stermitz-resume.pdf", "_blank");
        }}
        className="text-white/70 hover:text-white text-lg font-semibold transition-colors duration-200 px-2.5 py-1 relative self-start text-left"
      >
        <div className="flex items-center relative z-10">
          <span className="relative z-10 mr-2">Resume</span>
          <VscLinkExternal className="text-white/70" size="14" />
        </div>
        {/* {resumeClicked && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600/40 to-blue-300/10 rounded-xl backdrop-blur-sm shadow-md"
        />
      )} */}
      </button>
    </motion.div>
  );
};

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
