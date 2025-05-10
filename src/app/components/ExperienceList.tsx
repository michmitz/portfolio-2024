import React, { useState, useEffect, useRef } from "react";
import { Experience } from "./Experience";
import { experiences } from "../experienceData";

export const ExperienceList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={listRef}
      className="flex flex-col max-md:items-center gap-4 h-full"
    >
      {experiences.map((exp, index: number) => (
        <Experience
          key={index}
          {...exp}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
