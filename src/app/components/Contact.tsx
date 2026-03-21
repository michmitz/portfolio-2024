import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type ContactProps = {
  variant?: "toggle" | "inline";
};

const ContactLinks = () => (
  <div className="flex max-md:flex-col md:flex-row items-center justify-center gap-3 w-full">
    <Link
      href="https://www.linkedin.com/in/michellestermitz/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-300 hover:text-sky-200 transition-colors duration-200 max-md:flex max-md:items-end"
      aria-label="LinkedIn"
    >
      <FaLinkedin size="24" /><p className="max-md:visible max-md:ml-1 md:hidden text-white text-semibold tracking-wide hover:text-sky-200">LinkedIn</p>
    </Link>
    <Link
      href="https://github.com/michmitz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-300 hover:text-sky-200 transition-colors duration-200 max-md:flex max-md:items-end text-semibold tracking-wide"
      aria-label="GitHub"
    >
      <FaGithub size="24" /><p className="max-md:visible md:hidden text-white max-md:ml-1 hover:text-sky-200">Github</p>
    </Link>
  </div>
);

export const Contact: React.FC<ContactProps> = ({ variant = "toggle" }) => {
  const [showContact, setShowContact] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "toggle" || !showContact) return;

    const handlePointerDown = (event: PointerEvent) => {
      const el = containerRef.current;
      if (el && !el.contains(event.target as Node)) {
        setShowContact(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [variant, showContact]);

  if (variant === "inline") {
    return (
      <div
        className="flex flex-col items-center gap-3 w-full max-w-md text-center px-4"
        role="region"
        aria-label="Contact links"
      >
        <p className="text-white/90 text-lg font-medium">
          Feel free to reach out!
        </p>
        <ContactLinks />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative z-[200] flex items-center gap-3"
    >
      {!showContact ? (
        <button
          type="button"
          onClick={() => setShowContact(true)}
          className="text-white/80 hover:text-white font-semibold text-base transition-colors duration-200 focus:outline-none"
        >
          Contact
        </button>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="contact-panel"
            className="rounded-2xl border border-white/10 bg-slate-400/90 backdrop-blur-md shadow-lg shadow-black/30 p-4 flex flex-col items-start gap-3 min-w-[180px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center w-full gap-2">
              <p className="text-white/90 md:text-sm max-md:text-lg font-medium">
                Feel free to reach out!
              </p>
              <button
                type="button"
                onClick={() => setShowContact(false)}
                className="text-neutral-800 text-xs font-medium transition-colors duration-200 bg-neutral-200 rounded px-2 py-1 shrink-0"
              >
                Close
              </button>
            </div>
            <ContactLinks />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
