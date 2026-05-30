"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUserAstronaut, FaFolderOpen } from "react-icons/fa";
import { cn } from "@/lib/utils";

// Define the sections that match the IDs on your actual HTML sections
const sections = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUserAstronaut },
  { id: "projects", label: "Projects", icon: FaFolderOpen },
];

export default function CheckpointNav() {
  const [activeSection, setActiveSection] = useState("home");

  // 1. The Scroll Tracker Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: 0.2 },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center justify-between py-4">
      <div className="absolute top-5 bottom-5 w-[1px] bg-zinc-200 dark:bg-zinc-800 -z-10" />
      <div className="flex flex-col gap-8">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="relative group flex items-center justify-center p-2"
              aria-label={`Scroll to ${section.label}`}
            >
              <span className="absolute left-10 px-2 py-1 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                {section.label}
              </span>

              <motion.div
                layout
                className={cn(
                  "relative z-10 flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-300 border border-transparent",
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-110"
                    : "bg-white text-zinc-400 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 hover:scale-105",
                )}
              >
                <Icon className="w-4 h-4" />
              </motion.div>
              {isActive && (
                <motion.div
                  layoutId="activeRing"
                  className="absolute inset-0 rounded-full border-2 border-zinc-900 dark:border-white opacity-50"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
